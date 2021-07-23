import React, { useState, useEffect } from 'react';
import Pokemons from './Pokemons';
import Pagination from './Pagination';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=300&limit=100")
  const [prevUrl, setPrevtUrl] = useState()
  const [nextUrl, setNextUrl] = useState()
  const [load, setLoad] = useState(true)


  useEffect(()=>{
    setLoad(true)

    let cancel
    axios.get(currentUrl,{
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setLoad(false)
      setNextUrl(res.data.next)
      setPrevtUrl(res.data.previous)
      setPokemon(res.data.results.map(p=>p.name))
    })
    return () => cancel()
  }, [currentUrl])

  function goNext(){
    setCurrentUrl(nextUrl)
  }

  function goPrev(){
    setCurrentUrl(prevUrl)
  }

  if(load) return <Spinner animation="border" variant="danger" size="xl" />

  return (
    <>
    <Pagination
      goNext={nextUrl ? goNext : null}
      goPrev={prevUrl ? goPrev: null}
    />
    <Pokemons pokemon={pokemon} />
    
    </>
  );
}

export default App;
