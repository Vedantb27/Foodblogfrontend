import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import './App.css';
import {Cardscontent} from './MyComponents/Category/Cardscontent';
import { Admineditcategory } from './MyComponents/Admin/Admineditcategory';
import {ProtectedRoute}  from './MyComponents/ProtectedRoute';
import { AdminProvider  } from './MyComponents/Admin/Admincontext';
import { Admincardsedit } from './MyComponents/Admin/Admincardsedit';

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/Cardscontent", element: <Cardscontent /> },
  {
    path: "/Admineditcategory",
    element: (
      <ProtectedRoute>
        <Admineditcategory />
      </ProtectedRoute>
    )
  },
  {
    path: "/Admincardsedit",
    element: (
      <ProtectedRoute>
        <Admincardsedit />
      </ProtectedRoute>
    )
  },
]);

function App() {
  return (
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  );
}

export default App;
