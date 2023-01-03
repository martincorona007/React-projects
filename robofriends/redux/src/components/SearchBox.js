import React from 'react';
const SearchBox = ({searchChange}) => {
  //({...}) -- allows us to grab the props object and grab its properties.
  return(
    <div className='pa2'>
          <input className="pa3 ba b--green bg-lightest-blue" type='search' placeholder='search robots' onChange={searchChange}/>
    </div>

  )
}
export default SearchBox