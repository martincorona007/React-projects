import React, { Component } from "react";
import {robots} from './robots'
import CardList from './CardList';
import SearchBox from './SearchBox'



class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    } 
  }

  onSearchChange = (event)=>{
    this.setState({searchfield: event.target.value})
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    })
    console.log(filteredRobots)
    return (
      <div className="tc">
        <h1>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        {/* <CardList robots={this.state.robots}/> */}
        <CardList robots={filteredRobots}/>
      </div>
  
    )
  }
}
export default App;