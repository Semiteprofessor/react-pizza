import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";

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
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/order/new", element: <Cart /> },
      { path: "/checkout", element: <CreateOrder />, action: createOrderAction },
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
