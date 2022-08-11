import { useEffect, useState } from "react";
import PokemonThumnail from "./components/PokemonThumnail";

function App() {
  const [allPokemons,setAllPokemons] = useState([])
  const [loadMore,setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data =await res.json()
    console.log("res => ",res);
    console.log("data => ",data);
    
    console.log("==> ",data.results.name); 
    setLoadMore(data.next)

    //get specific data from the pokemon
    function createPokemonObject(result){
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        
        const data = await res.json()
       console.log("??? ",data);
        setAllPokemons(currentList => [...currentList,data]);
        await console.log("final => "+allPokemons)  
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons)
    
  } 
  console.log("final => "+allPokemons)  
  useEffect(() => {
    getAllPokemons();
    console.log("useeffect activated")
  },[])

  return (
    <div className="app-container">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons === null ? <h1>true</h1>: <h1>false</h1>}
          {/* {allPokemons.map((pokemon,index) => 
            <h1>{pokemon.name}</h1>

            // <PokemonThumnail
            //   id={pokemon.id}
            //   name={pokemon.name}
            //   image={pokemon.sprites.other.dream_world.front_default}
            //   type={pokemon.types[0].type.name}
            //   key={index}
           // />
          )} */}
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
    </div>
  );
}

export default App;
