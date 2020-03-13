import React from "react";
import Room from "../Room/Room.component";

const RoomsList = ({ rooms }) => {
  return rooms.length === 0 ? (
    <div className="empty-search">
      <h3>Unfortunately, no rooms matched your search parameters</h3>
    </div>
  ) : (
    <section className="roomsList">
      <div className="roomslist-center">
        {rooms.map((room, index) => {
          return <Room room={room} key={index} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
