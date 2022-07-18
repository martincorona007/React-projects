//This file is for configuration to the server

import express from 'express'
import config from './config';
//app aplication backned 
const app = express();
app.set('port',config.PORT)//set a port
export default app;
