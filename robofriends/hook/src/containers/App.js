import React, { Component, useState, useEffect } from "react";
import { robots } from "../robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
//containers - components that has state,lifecycle

function App() {
  
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
  });
  console.log("render ",robots,searchField);
  //console.log(filteredRobots)
  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setRobots(users))
  }
  useEffect(()=> {
    getUsers();
  },[])
  
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f2">Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      {/* <CardList robots={this.state.robots}/> */}
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
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
export default App;
