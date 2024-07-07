// App.js

import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Main from './Main';
import './App.css';
import { Cardscontent } from './MyComponents/Category/Cardscontent';
import { Admineditcategory } from './MyComponents/Admin/Admineditcategory';
import { ProtectedRoute } from './MyComponents/ProtectedRoute';
import { AdminProvider } from './MyComponents/Admin/Admincontext'; // Assuming this is correctly imported
import { CategoryProvider } from "./MyComponents/Category/CategoryContext"; // Import CategoryProvider from CategoryContext
import { Admincardsedit } from './MyComponents/Admin/Admincardsedit';
import { Admincardscontent } from './MyComponents/Admin/Admincardscontent';

const router = createBrowserRouter([
  { path: "/", element:
    <CategoryProvider> 
      <Main />
    </CategoryProvider>
  },
  { path: "/Cardscontent/:categoryName/:title",
    element:
    <CategoryProvider>
      <Cardscontent />
    </CategoryProvider>
  },
  {
    path: "/Admineditcategory",
    element: (
      <ProtectedRoute>
        <AdminProvider>
        <Admineditcategory />
        </AdminProvider>
      </ProtectedRoute>
    )
  },
  {
    path: "/Admincardsedit",
    element: (
      <ProtectedRoute>
        <AdminProvider>
        <Admincardsedit />
        </AdminProvider>
      </ProtectedRoute>
    )
  },
  {
    path: "/Admincardscontent",
    element: (
      <ProtectedRoute>
         <AdminProvider>
      <Admincardscontent/>
      </AdminProvider>
      </ProtectedRoute>
    )
  },
  { path: "*", element: <Navigate to="/" replace /> }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
