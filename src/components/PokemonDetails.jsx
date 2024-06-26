import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetails } from '../features/pokemon/pokemonSlice';

const PokemonDetails = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.pokemon.details);
  const status = useSelector((state) => state.pokemon.status);
  const error = useSelector((state) => state.pokemon.error);

  useEffect(() => {
    dispatch(fetchPokemonDetails(name));
  }, [name, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{details.name}</h1>
      <img src={details.sprites?.front_default} alt={details.name} className="w-32 h-32 mb-4" />
      <p className="mb-2">Height: {details.height}</p>
      <p className="mb-2">Weight: {details.weight}</p>
      <p className="mb-2">Base Experience: {details.base_experience}</p>
    </div>
  );
};

export default PokemonDetails;
