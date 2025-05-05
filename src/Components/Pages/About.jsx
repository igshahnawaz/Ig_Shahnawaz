import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../Css/About.css";

function About() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="aboutContainer">
        <div className="aboutpage">
          <h1>About-Us</h1>
          <p>
            About Us Welcome to SamsMovies.onl, your one-stop destination for
            everything related to movies! We are passionate about cinema and
            committed to bringing movie lovers closer to the entertainment they
            love. At SamsMovies.onl, we aim to provide a space where film
            enthusiasts can explore the latest releases, timeless classics, and
            hidden gems from around the world. Whether you're a fan of Hollywood
            blockbusters, independent films, or international cinema, we've got
            something for everyone. Our team is dedicated to curating
            high-quality content and ensuring that your movie-watching
            experience is as enjoyable as possible. We believe in the power of
            storytelling, and we strive to celebrate the art of filmmaking in
            all its glory. Join us as we dive into the world of cinema, discover
            new favorites, and celebrate the magic of movies together. Thank you
            for being a part of SamsMovies.com—we’re thrilled to have you here!
          </p>
          <h1>Our Mission</h1>
          <p>
            At SamsMovies.onl, our mission is simple: to celebrate the magic of
            movies and provide a platform where enthusiasts can discover,
            discuss, and enjoy the world of cinema. Whether you're into
            thrilling action flicks, thought-provoking dramas, or lighthearted
            comedies, we've got something for everyone.
          </p>
          <h1>What We Offer</h1>
          <p>We strive to create an engaging movie experience through:</p>
          <p>
            Latest Updates– Stay informed about new releases, trending films,
            and upcoming industry news. Movie Reviews & Recommendations –
            Explore honest reviews and handpicked movie recommendations to help
            you choose your next watch. -Film Insight– Discover
            behind-the-scenes facts, interviews, and exclusive insights into the
            filmmaking process.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
