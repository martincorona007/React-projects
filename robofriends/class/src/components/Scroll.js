import React from "react";
const Scroll = (props) => {
  //console.log(props)//eventhough we wrap the component we have a children inside of it
  //css: overflow-y jsx: overflowY
  //{js expression}
  //{{returning a object or using a object}}
  return(
    <div style={{overflowY: "scroll",border:"5px solid black", height: "500px"}}>
      {props.children}
    </div>
  );
 
} 
export default Scroll;