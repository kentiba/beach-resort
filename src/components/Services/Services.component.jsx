import React from "react";
import Title from "../Title/Title.component";
import services from "./servies.data";

const Services = () => {
  return (
    <section className="services">
      <Title title="servies" />
      <div className="services-center">
        {services.map(({ icon, title, info }, index) => {
          return (
            <article className="service" key={index}>
              <span>{icon}</span>
              <h6>{title}</h6>
              <p>{info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
