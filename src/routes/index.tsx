import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import LandingPage from "../pages/landing-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
