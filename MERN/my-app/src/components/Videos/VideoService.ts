import { Video } from './IVideo';
import axios from 'axios';
const API = 'http://localhost:4000'
export const getVideos = async() =>{
    const res = await axios.get(`${API}/videos`);
    //console.log(res);
    return res;
}
export const createNewVideo = async(video: Video) =>{
    console.log("PUT ",video)
    return await axios.post(`${API}/videos`,video);
   // console.log(res);
  //  return res;
}