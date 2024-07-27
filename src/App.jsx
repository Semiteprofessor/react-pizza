import { useState } from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Header from "./ui/Header";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Home />
    </div>
  );
}

export default App;
