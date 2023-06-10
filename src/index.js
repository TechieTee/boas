import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/index.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import ErrorPage from './ErrorPage';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageBTN from './pages/PageBTN';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "page-one",
        element: <PageOne />,
      },
      {
        path: "page-two",
        element: <PageTwo />,
      },
      {
        path: "page-btn",
        element: <PageBTN />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


