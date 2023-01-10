import React, { Component } from "react";
import {connect} from "react-redux"
import {robots} from '../robots'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import "./App.css"
import { setSearchField,requestRobots } from "../actions";
//containers - components that has state,lifecycle 
//useDispatch 
//comes from the reducer
// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps  = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPeding: state.requestRobots.isPeding,
    error: state.requestRobots.error
  }
}
//useSelector
//actions
// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispath) => {
  return {
    onSearchChange: (event) => dispath(setSearchField(event.target.value)),
    onRequestRobots: () => dispath(requestRobots())
  }
}
class App extends Component { 
  // constructor(){
  //   super()
  //   this.state = {
  //     // robots: robots,//state 1
  //     robots: [],
  //     // searchfield: ''//state 2
  //   } 
  //   console.log("cosnturctor")
  // }
  componentDidMount(){//
    this.props.onRequestRobots();
    console.log(this.props.store);
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => {this.setState({robots: users})})
    //this.setState({robots: robots})//this render the component so is going use render() again
    console.log("componentDidMount")
  }

  // onSearchChange = (event)=>{
  //   this.setState({searchfield: event.target.value})
  // }

  render(){
    
   // const {robots} = this.state;
    const {searchField, onSearchChange,robots,isPeding} =  this.props
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    })
    console.log("render")
    //console.log(filteredRobots)
    return isPeding ?
    <h1>Loading</h1> :
    (
      <div className="tc">
          <h1 className="f2">Robo Friends</h1>
          <SearchBox searchChange={onSearchChange}/>
          {/* <CardList robots={this.state.robots}/> */}
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
 
    ) 
    // if(this.state.robots.length === 0){//if it takes more than 5 seconds
    //   return <h1>Loading</h1>
    // }else{
    //   return (
    //     <div className="tc">
    //       <h1 className="f2">Robo Friends</h1>
    //       <SearchBox searchChange={this.onSearchChange}/>
    //       {/* <CardList robots={this.state.robots}/> */}
    //       <Scroll>
    //         <CardList robots={filteredRobots}/>
    //       </Scroll>
    //     </div>
    
    //   )
    // }
    
  }
}
//mapStateToProps - state to listen
//mapDispatchToProps - what action or dispath should i listen to
// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps,mapDispatchToProps) (App);