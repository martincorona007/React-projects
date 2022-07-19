import React, { useEffect, useState } from 'react'
import {Video} from './IVideo'
import VideoItem from './VideoItem'
import * as videoService from './VideoService'

const VideoList = () => {
  
//save videos in this component
  const [videos,setVideos] = useState<Video[]>([]);


  const loadVideos = async()=>{
    const res  = await videoService.getVideos();
    setVideos(res.data);
  }
  useEffect(()=> {
    loadVideos()
  },[])

  return (
    <div>
      {videos.map((video,index) => {
        return <VideoItem video={video}/>
      })}
    </div>
  )
}
export default VideoList