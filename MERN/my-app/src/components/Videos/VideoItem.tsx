import { Video } from "./IVideo";
import React from "react";
import ReactPlayer from "react-player";
import "./VideoItem.css";
import * as videoService from './VideoService'
import { useNavigate } from "react-router-dom";
interface Props {
  video: Video;
  loadVideos: () => void
}

const VideoItem = ({ video , loadVideos}: Props) => {
  const history = useNavigate(); //change of enrutador
  
  const handleDelete = async(id: string) => {
    console.log(id)
    await videoService.deleteVideo(id);
  loadVideos()
  }
  
  return (
    <div className="col-md-4">
      <div
        className="card card-body video-card"
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex justify-content-between">
          <h1 onClick={() => history(`/update/${video._id}`)}>{video.title}</h1>
          <span className="text-danger" onClick={()=> video._id && handleDelete(video._id)}>X</span>
        </div>
        <p>{video.description}</p>
        <div>
          <ReactPlayer url={video.url} className="myclass" />
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
