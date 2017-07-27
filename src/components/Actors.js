import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorInfo = actors.map(actor =>
    <div>
      <h3>{actor.name}</h3>
      {actor.movies.map(movie => <ul>{movie}</ul>)}
    </div>
  )
  return (
    <div>
      <h1>Actors Page</h1>
      {actorInfo}
    </div>
  );
};

export default Actors;
