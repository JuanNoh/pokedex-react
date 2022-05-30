import React, {useEffect, useState} from 'react';
import Button from './Components/Button';
import Card from './Components/Card';

function App() {

  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await result.json();
      const res = await Promise.all(data.results.map(async(item) => {
        const result = await fetch(item.url);
        return await result.json();
      }));
      setData(res);
    }
    fetchData();
  },[]);


  return (
    <div className="App">
      <div className={"container"}>
        {data.map((pokemon)=>{
          return(
            <Card
              key={pokemon.id}
              image={pokemon.sprites.other['official-artwork'].front_default}
              number={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
