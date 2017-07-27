import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorInfo = directors.map(director =>
    <div>
      <h3>{director.name}</h3>
      {director.movies.map(movie => <li>{movie}</li>)}
    </div>
  )
  return (
    <div>
      <h1>Directors Page</h1>
      {directorInfo}
    </div>
  );
}

export default Directors
