import React from "react";
import Hero from "../components/Hero/Hero.component";
import Banner from "../components/Banner/Banner.component";
import Services from "../components/Services/Services.component";
import FeaturedRooms from "../components/FeaturedRooms/FeaturedRooms.component";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
};

export default Home;
