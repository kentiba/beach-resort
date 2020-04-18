import React from "react";
import StyledHero from "../components/Hero/StyledHero.component";
import Banner from "../components/Banner/Banner.component";
import Services from "../components/Services/Services.component";
import FeaturedRooms from "../components/FeaturedRooms/FeaturedRooms.component";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <React.Fragment>
      <StyledHero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/beach-resort/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </StyledHero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
};

export default Home;
