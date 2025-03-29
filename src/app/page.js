'use client';

import React, { useState } from 'react';
import JokeComponent from '../components/RandomJoke';

export default function Home() {
  const [showJoke, setShowJoke] = useState(false);
  const handleShowJoke = () => {
    setShowJoke(true);
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {!showJoke ? (
        <button type="button" onClick={handleShowJoke}>
          GET JOKE
        </button>
      ) : (
        <JokeComponent />
      )}
    </div>
  );
}
