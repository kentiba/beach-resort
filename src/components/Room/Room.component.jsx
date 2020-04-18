import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImage from "../../images/room-1.jpeg";
const Room = ({ room: { name, slug, images, price } }) => {
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImage} alt="RoomImage" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link
          className="btn-primary room-link"
          to={`/beach-resort/rooms/${slug}`}
        >
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default Room;

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number.isRequired
  })
};
