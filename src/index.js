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
import SearchMovie from "./Components/Pages/SearchMovie";
import PageNotFound from "./Components/Pages/PageNotFound";
import ReactGA from "react-ga4";


const root = ReactDOM.createRoot(document.getElementById("samsmovies"));
let routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
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
    path: "you-are-searching-for/:id",
    element: <SearchMovie />,
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


ReactGA.initialize("G-RGPRFZHVKS"); 
ReactGA.send({ hitType: "pageview", page: window.location.pathname });
ReactGA.event({
  category: "User",
  action: "Clicked Button",
  label: "Signup Button"
});

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
reportWebVitals();