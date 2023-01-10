import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, } from 'react-redux';
import thunk from "redux-thunk";
import {createStore,applyMiddleware} from 'redux';
import {createLogger,} from 'redux-logger';
import './index.css';
import 'tachyons'
import App from './containers/App';
import { searchRobots } from './reducers';



const logger = createLogger()
const store = createStore(searchRobots,applyMiddleware(logger)); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />  
  </Provider>
    
     // <React.StrictMode>
    //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
