import React, { Component } from "react";
import {robots} from '../robots'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import "./App.css"
//containers - components that has state,lifecycle 

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
  componentDidMount(){//
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots: users})})
    //this.setState({robots: robots})//this render the component so is going use render() again
    console.log("componentDidMount")
  }

  onSearchChange = (event)=>{
    this.setState({searchfield: event.target.value})
  }

  render(){
    const {robots,searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
    })
    console.log("render")
    //console.log(filteredRobots)
    return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className="tc">
          <h1 className="f2">Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
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
export default App;