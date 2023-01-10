import { CHANGE_SEARCH_FIELD } from "./constants"

const initialState = {
  searchField: ''
}
//serch the robots
export const searchRobots = (state = initialState,action = {}) => {
  console.log("s ",state);
  console.log("a ",action)
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
      
      return Object.assign({},state,{searchField: action.payload})
      // return {...state ,searchField: action.payload}
    default:
      return state;
  }
}