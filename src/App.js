import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPokemon(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {pokemon ? (
        pokemon.map((pokemon) => <div key={pokemon.name}> {pokemon.name}</div>)
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
