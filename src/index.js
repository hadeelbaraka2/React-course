import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/Home"
import Basics from "./pages/Basics"
import Frameworks from "./pages/Frameworks"
import Tips from "./pages/Tips"
import { HelmetProvider } from 'react-helmet-async';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Not Found</h1>,
  },
  {
    path: "/Basics",
    element: <Basics />,
  },
  {
    path: "/Frameworks",
    element: <Frameworks />,
  },
  {
    path: "/Tips",
    element: <Tips />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

