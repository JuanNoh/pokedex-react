import React, {useEffect, useState} from 'react';
import Card from './Components/Card';

function App() {

  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon");
  },[]);

  const fetchData = async (url = "") => {
    const result = await fetch(url);
    const data = await result.json();
    setUrl(data.next);
    const res = await Promise.all(data.results.map(async(item) => {
      const result = await fetch(item.url);
      return await result.json();
    }));
    setData(res);
  }

  function handleSubmit() {
    console.log("funciona");
    fetchData(url)
  }


  return (
    <div className="App">
      <div className={"container"}>
        <div className={"content"}>
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
        <button className={"btn"} onClick={()=> handleSubmit()} >Siguiente</button>
      </div>
    </div>
  );
}

export default App;
