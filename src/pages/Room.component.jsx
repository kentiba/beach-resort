import React, { useEffect, useContext, useState } from "react";
import { RoomContext } from "../Context/Context";

const Room = ({ match }) => {
  const { getRoom } = useContext(RoomContext);
  const [room, setRoom] = useState("");
  useEffect(() => {
    setRoom(getRoom(match.params.slug));
  }, [match.params.slug, getRoom]);

  return <div>{room.name}</div>;
};

export default Room;
