import { Video } from "./IVideo"
import React from 'react'
interface Props{
  video: Video
}
const VideoItem = ({video}: Props) => {
  
  return (
    <div>
      <h1>{video.title}</h1>
      <p>{video.description}</p>
    </div>
  )
}
export default VideoItem