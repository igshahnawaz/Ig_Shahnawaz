import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import MovieInfo from "./Components/Pages/MovieInfo";
import Bollywood from "./Components/Pages/Bollywood";
import Hollywood from "./Components/Pages/Hollywood";
import HollywoodHindi from "./Components/Pages/HollywoodHindi";
import SouthHindi from "./Components/Pages/SouthHindi";
import Punjabi from "./Components/Pages/Punjabi";
import WebSeries from "./Components/Pages/WebSeries";
import Anime from "./Components/Pages/Anime";
import KoreanDrama from "./Components/Pages/KoreanDrama";
import Contact from "./Components/Pages/Contact";
import Disclaimer from "./Components/Pages/Disclaimer";
import About from "./Components/Pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
let routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "about-us",
    element: <About />,
  },
  {
    path: "contact-us",
    element: <Contact />,
  },
  {
    path: "disclaimer",
    element: <Disclaimer />,
  },
  {
    path: "movie-details/:id",
    element: <MovieInfo />,
  },
  {
    // path: "/bollywood/movie-details/:id",
    // element: <MovieInfo />,
  },
  {
    path: "bollywood-movies",
    element: <Bollywood />,
  },
  {
    path: "hollywood-english-movies",
    element: <Hollywood />,
  },
  {
    path: "south-indian-hindi-dubbed-movies",
    element: <SouthHindi />,
  },
  {
    path: "korean-drama-hindi-dubbed",
    element: <KoreanDrama />,
  },
  {
    path: "hollywood-hindi-dubbed-movies",
    element: <HollywoodHindi />,
  },
  {
    path: "punjabi-movies",
    element: <Punjabi />,
  },
  {
    path: "anime-hindi-dubbed",
    element: <Anime />,
  },
  {
    path: "web-series",
    element: <WebSeries />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
reportWebVitals();
