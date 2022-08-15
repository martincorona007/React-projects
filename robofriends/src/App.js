import React, { Component } from "react";
import {robots} from './robots'
import CardList from './CardList';
import SearchBox from './SearchBox'
import "./App.css"
 

class App extends Component { 
  constructor(){
    super()
    this.state = {
      // robots: robots,//state 1
      robots: [],
      searchfield: ''//state 2
    } 
    console.log("cosnturctor")
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots: users})})
    //this.setState({robots: robots})
    console.log("componentDidMount")
  }

  onSearchChange = (event)=>{
    this.setState({searchfield: event.target.value})//this render the component so is going use render() again
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    })
    console.log("render")
    //console.log(filteredRobots)
    if(this.state.robots.length === 0){//if it takes more than 5 seconds
      return <h1>Loading</h1>
    }else{
      return (
        <div className="tc">
          <h1 className="f2">Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          {/* <CardList robots={this.state.robots}/> */}
          <CardList robots={filteredRobots}/>
        </div>
    
      )
    }
    
  }
}
export default App;