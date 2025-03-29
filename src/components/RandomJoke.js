'use client';

import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import getJoke from '../api/jokeData';

export default function JokeComponent() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPunchline, setShowPunchline] = useState(false);

  const fetchRandomJoke = () => {
    setLoading(true);
    setShowPunchline(false);
    getJoke()
      .then((jokes) => {
        const jokesArray = Object.values(jokes);
        if (jokesArray.leangth === 0) {
          setError('No jokes here...');
        }

        const randomIndex = Math.floor(Math.random() * jokesArray.length);
        setJoke(jokesArray[randomIndex]);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to Fetch Joke');
        setLoading(false);
        console.error(err);
      });
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  const handleButton = () => {
    if (showPunchline) {
      fetchRandomJoke();
    } else {
      setShowPunchline(true);
    }
  };

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (!joke) return <p>No Joke Available</p>;

  return (
    <div>
      <h2>{joke.setup}</h2>
      {showPunchline && <p>{joke.punchline}</p>}
      <button type="button" onClick={handleButton}>
        {showPunchline ? 'Get Another Joke' : 'Get Punchline'}
      </button>
    </div>
  );
}
