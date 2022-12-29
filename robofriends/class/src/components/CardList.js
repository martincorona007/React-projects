import React from "react";
import Card from "./Card";
const CardList = ({robots}) => {
  //Approach 1
  // const cardsArray  = robots.map((user,i) => {
  //   return <Card id={robots[i].id } name={robots[i].name} email={robots[i].email} key={i}/>
  // })
  // return(
  //   <div>
  //     {cardsArray}
  //   </div>
  // )
  //Approach 2
  return(
    <div>
      {
        robots.map((user,i)=> {
          return(
            <Card 
              id={robots[i].id } 
              name={robots[i].name}
              email={robots[i].email}
              key={i}
            />
          )
        })
      }
    </div>
  )
}
export default CardList;