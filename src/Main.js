import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import './App.css';

function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://foodbloggingappbackend.onrender.com/get-json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="Main">
      <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" controls={true} />
      <div>Below is the fetched json</div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default Main;
