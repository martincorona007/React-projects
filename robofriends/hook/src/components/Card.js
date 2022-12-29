import React from "react";

const Card = ({name,email,id}) => {
  //const {name,email,id} = props; //destructuring
  return(
    //tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5
    <div className='tc bg-light-green dib br3 pa3 ma3 grow'>
      <img alt="robots"  src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}
export default Card;