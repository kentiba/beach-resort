import React from "react";
import StyledHero from "../components/Hero/StyledHero.component";
import Banner from "../components/Banner/Banner.component";
import { Link } from "react-router-dom";
import roomImage from "../images/room-2.jpeg";
import RoomsContainer from "../components/RoomsContainer/RoomsContainer.component";
const Rooms = () => {
  return (
    <>
      <StyledHero image={roomImage}>
        <Banner title="Rooms">
          <Link to="/beach-resort/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </StyledHero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
