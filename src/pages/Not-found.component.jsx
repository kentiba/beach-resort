import React from "react";
import Banner from "../components/Banner/Banner.component";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "4rem"
      }}
    >
      <Banner title="404" subtitle="page not found">
        <Link to="/beach-resort/" className="btn-primary">
          Back to Home page
        </Link>
      </Banner>
    </div>
  );
};

export default NotFound;
