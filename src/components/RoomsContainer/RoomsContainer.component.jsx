import React, { useContext } from "react";
import RoomsList from "./RoomsList.component";
import RoomsFilter from "./RoomsFilter.component";
import WithSpinner from "../withSpinner/withSpinner.component";
import { RoomContext } from "../../Context/Context";
import "./RoomsContainer.styles.css";
const RoomsContainer = () => {
  let { sortedRooms, loading } = useContext(RoomContext);

  return loading ? (
    <WithSpinner />
  ) : (
    <div className="room">
      <RoomsFilter />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default RoomsContainer;
