import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import './App.css';
import {Cardscontent} from './MyComponents/Category/Cardscontent'


const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/Cardscontent", element: <Cardscontent /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
