import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import AppLayout from "./components/AppLayout";
import Services from "./pages/Services";

const App = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "/blogs",
          element: <Blog />
        },
        {
          path: "/faq",
          element: <Faq />
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
  )
};

export default App;