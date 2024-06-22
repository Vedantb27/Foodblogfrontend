import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import './App.css';
import {Navbar} from './MyComponents/Navbar/Navbar'

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
   <Navbar/>
  );
}

export default Main;
