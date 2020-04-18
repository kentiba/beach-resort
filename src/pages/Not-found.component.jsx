import React from "react";
import StyledHero from "../components/Hero/StyledHero.component";
import Banner from "../components/Banner/Banner.component";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <StyledHero>
      <Banner title="404" subtitle="page not found">
        <Link to="/beach-resort/" className="btn-primary">
          Back to Home page
        </Link>
      </Banner>
    </StyledHero>
  );
};

export default NotFound;
