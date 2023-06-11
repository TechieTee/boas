import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/index.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import ErrorPage from './ErrorPage';
import Women from './pages/Women';
import Men from './pages/Men';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "page-one",
        element: <Women />,
      },
      {
        path: "page-two",
        element: <Men />,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


