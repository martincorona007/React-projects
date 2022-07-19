//This file is for configuration to the server
import express from 'express'
import morgan  from 'morgan'//see request on the server
import config from './config';
import cors from 'cors'
import videoRoutes from './routes/videos.routes';

//app aplication backned 
const app = express();

app.set('port',config.PORT)//set a port
app.use(morgan('dev'));
app.use(cors())//allows any server connects o request
app.use(express.json())//undestand json object with a single value e.g. post with a value
app.use(express.urlencoded({extended: false}))// a peitition e.g. post from a form undesrtands the fields
app.use(videoRoutes)// /videos /home etc

export default app;
