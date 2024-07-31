import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import StartPage from "./Components/StartPage/StartPage";

const route = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <StartPage /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
