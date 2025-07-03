import Body from "./components/Body";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import BlogOne from "./pages/BlogOne";
import BlogTwo from "./pages/BlogTwo";
import BlogThree from "./pages/BlogThree";
import { createBrowserRouter, RouterProvider } from "react-router";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
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
          element: <Blogs />
        },
        {
          path: '/projects/:slug/:id',
          element: <ProjectDetailsPage />
        },
        {
          path: '/blogs/interior-design-trends-delhi-2025',
          element: <BlogOne />
        },
        {
          path: '/blogs/color-texture-trends-ncr-homes',
          element: <BlogTwo />
        },
        {
          path: '/blogs/modular-kitchens-remodeling-noida',
          element: <BlogThree />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
};

export default App;