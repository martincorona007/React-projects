import axios from 'axios';

export const getVideos = async() =>{
    const res = await axios.get('http://localhost:4000/videos');
    console.log(res);
    return res;
}
