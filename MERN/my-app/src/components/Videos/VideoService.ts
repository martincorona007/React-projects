import { Video } from './IVideo';
import axios from 'axios';
const API = 'http://localhost:4000'
export const getVideos = async() =>{
    const res = await axios.get<Video[]>(`${API}/videos`);
    //console.log(res);
    return res;
}
export const createNewVideo = async(video: Video) =>{
    console.log("PUT ",video)
    return await axios.post(`${API}/videos`,video);
   // console.log(res);
  //  return res;
}
export const getVideo = async(id: string) =>{
   // console.log("PUT ",video)
    return await axios.get<Video>(`${API}/videos/${id}`);
   // console.log(res);
  //  return res;
}
export const updateVideo = async(id: string,video: Video) =>{
    // console.log("PUT ",video)
     return await axios.put<Video>(`${API}/videos/${id}`,video);
    // console.log(res);
   //  return res;
 }
 export const deleteVideo = async(id: string) =>{
    // console.log("PUT ",video)
     return await axios.delete<Video>(`${API}/videos/${id}`);
    // console.log(res);
   //  return res;
 }