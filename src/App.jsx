import { useState } from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Header from "./ui/Header";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader
      },
      {
        path: "*",
        element: <Error statusCode={404} />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
