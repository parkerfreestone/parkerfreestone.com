import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TopNav } from "./components/top-nav/TopNav";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
