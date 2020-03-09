import React from "react";
import Hero from "../components/Hero/Hero.component";
import Banner from "../components/Banner/Banner.component";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          Back to Home page
        </Link>
      </Banner>
    </Hero>
  );
};

export default NotFound;
