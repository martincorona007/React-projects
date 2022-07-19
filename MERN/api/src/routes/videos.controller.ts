//This file is for functions to manipulate the data in the db 
import { RequestHandler } from "express"
import Video from "./Video"//modelo
export const createVideo: RequestHandler = async (req,res) =>{
  
   const videoFound = await Video.findOne({url: req.body.url})//consult if the url already exits
   if(videoFound) // yes then?
    return res.status(301).json({message: 'The URL already exists'});

  //res.json('creating videos')
 //  console.log("req.body = ", req.body);
 // console.log("req.query = ", req.query);
  const video = new Video(req.body);//take data from the client
  const savedVideo = await video.save()//save the data in the database
  console.log("POST ",savedVideo)
  res.json(savedVideo)//send the data to the client, to let the client know what the client has saved

} 
export const getVideos: RequestHandler =  async(req,res) =>{
  try {//get some errors
    const videos = await Video.find();//get all video with .find() method
    console.log("GET ALL ",videos);
    res.json(videos)//response
  } catch (error) {
    console.log("ERROR get all ",error);
    res.json(error);
  }
} 
export const getVideo: RequestHandler = async(req,res) =>{
  //console.log("=> ",req.params);// videos/2 {id: '2'}
  const videoFound = await Video.findById(req.params.id);
  console.log("GET BY ID ",videoFound)
  if(!videoFound) return res.status(204).json();
  return res.json(videoFound);
}  
export const deleteVideo: RequestHandler = async (req,res) =>{
  //res.json('deleting a videos')
  //console.log("=> ",req.params);// videos/2 {id: '2'}
  const videoFound = await Video.findByIdAndDelete(req.params.id);//find in the database and delete it
  console.log("DELETE ",videoFound)
  if(!videoFound) return res.status(204).json();
  return res.json(videoFound);
} 
export const updateVideo: RequestHandler = async(req,res) =>{
  const videoUpdated = await Video.findByIdAndUpdate(req.params.id,req.body,{new: true})//{new: true} return the object updated
  if(!videoUpdated) return res.status(204).json();//if the video updated hasn't found respond with 204
  console.log("PUT ",videoUpdated)
  res.json(videoUpdated);
  //res.json('updating a videos')
} 
