import React, { useEffect, useState } from 'react'
import {Video} from './IVideo'
import VideoItem from './VideoItem'
import * as videoService from './VideoService'


const VideoList = () => {
  

  const [videos,setVideos] = useState<Video[]>([]);//save videos in this component


  const loadVideos = async()=>{
    const res  = await videoService.getVideos();
    const formatedVideos = res.data.map(video => {
      return {
        ...video,
        createdAt: video.createdAt ? new Date(video.createdAt): new Date(),
        updatedAt: video.updatedAt ? new Date(video.updatedAt): new Date(),
      };
      
    }).sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime());
    setVideos(formatedVideos);

  }
  useEffect(()=> {
    loadVideos()
  },[])

  return (
    <div className="row">
      {videos.map((video,index) => {
        return <VideoItem video={video} key={video._id} loadVideos={loadVideos}/>
      })}
    </div>
  )
}
export default VideoList