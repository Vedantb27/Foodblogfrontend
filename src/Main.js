import React, { useState, useEffect } from 'react';
import './App.css';
import {Navbar} from './MyComponents/Navbar/Navbar'
import { Corouselnew } from './MyComponents/Corousel/Corouselnew';
import {Categorymain}  from './MyComponents/Category/Categorymain';
import {Loginform} from './MyComponents/Navbar/Loginform';
import { NoResultsFound } from './MyComponents/Category/NoResultsFound';

function Main() {
  
  return (
   <Navbar/>
  );
}

export default Main;
