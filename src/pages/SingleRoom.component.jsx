import React, { useEffect, useContext, useState } from "react";
import { RoomContext } from "../Context/Context";
import StyledHero from "../components/Hero/StyledHero.component";
import Banner from "../components/Banner/Banner.component";
import { Link } from "react-router-dom";

const Room = ({ match }) => {
  const { getRoom } = useContext(RoomContext);
  const [room, setRoom] = useState("");
  useEffect(() => {
    setRoom(getRoom(match.params.slug));
  }, [match.params.slug, getRoom]);

  return room ? (
    <>
      <StyledHero image={room.images[0]}>
        <Banner title={`${room.name} room`}>
          <Link to="/beach-resort/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {room.images.slice(1).map((img, index) => {
            return <img src={img} alt={room.name} key={index} />;
          })}
        </div>

        <div className="single-room-info">
          <article className="description">
            <h3>Details</h3>
            <p>{room.description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price: ${room.price}</h6>
            <h6>Size: {room.size} SQFT</h6>
            <h6>
              Max Capacity:{" "}
              {room.capacity < 2
                ? `${room.capacity} Person`
                : `${room.capacity} People`}
            </h6>
            <h6> {room.pets ? "Pets are allowed" : "Pets are NOT allowed"}</h6>
            <h6> {room.breakfast && "Free Breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {room.extras.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </section>
    </>
  ) : (
    <div className="error">
      <h3> No such room could be found...</h3>
      <Link to="/beach-resort/rooms" className="btn-primary">
        Back to rooms
      </Link>
    </div>
  );
};

export default Room;
