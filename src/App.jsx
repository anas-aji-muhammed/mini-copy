import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Homnepage from './pages/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homnepage/>,
  },
]);
function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
