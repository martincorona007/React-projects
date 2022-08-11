import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate ,useParams} from "react-router-dom";

import { toast } from "react-toastify";
import { Video } from "./IVideo";
import * as videoService from './VideoService'
type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

// interface Paramas {
//   id: string;
// }

const VideoForm = () => {
  
  const history = useNavigate();//change of enrutador
  const params = useParams();//parameter of URL
  console.log(params)

  const initialState = {
    title: "",
    description: "",
    url: "",
  }
  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (e: InputChange) => {
    setVideo({...video,[e.target.name]: e.target.value});
  }
  const handleSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();//cancel event by default
    console.log("video ",video);
    //validation
    if(!params.id){
      const res = await videoService.createNewVideo(video);
      toast.success("New video added");
      
    }else{
      await videoService.updateVideo(params.id,video);
    }
    history('/')
    
    setVideo(initialState)
   // console.log("res",res)
  }
 
  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id);
    const {title,description,url} = res.data;
    setVideo({title,description,url})
  }
  useEffect(()=> {
    if(params.id) getVideo(params.id);
  },[]);
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New video</h3>
            <form onSubmit={handleSumbit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a tittle for this video"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.title}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  value={video.url}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write a description"
                  value={video.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              {
                params.id ?
                <button className="btn btn-info"> Update Video</button>
                :
                <button className="btn btn-primary"> Create Video</button>
              }
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoForm;