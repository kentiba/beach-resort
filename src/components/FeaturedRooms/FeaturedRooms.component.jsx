import React, { useContext } from "react";
import { RoomContext } from "../../Context/Context";
import Title from "../Title/Title.component";
import Room from "../Room/Room.component";
import WithSpinner from "../withSpinner/withSpinner.component";

const FeaturedRooms = () => {
  let { featuredRooms, loading } = useContext(RoomContext);
  const rooms = featuredRooms.map(room => {
    return <Room key={room.id} room={room} />;
  });
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <WithSpinner /> : rooms}
      </div>
    </section>
  );
};

export default FeaturedRooms;
