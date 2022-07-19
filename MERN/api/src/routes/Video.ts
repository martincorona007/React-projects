//This file is for  modelo define data to store in the db
import {Schema,model} from 'mongoose'
const videoSchema = new Schema ({
  title : {//define type of data
    type: String,
    required: true,
    trim: true//remove spaces
  },
  description : {
    type: String,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
},{
  versionKey: false,//remove section upload
  timestamps: true//two fields know when was created and updated 
});
export default model('Video',videoSchema);
//                     |->name of the model