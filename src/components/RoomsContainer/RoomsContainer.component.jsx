import React, { useContext } from "react";
import RoomsList from "./RoomsList.component";
import RoomsFilter from "./RoomsFilter.component";
import WithSpinner from "../withSpinner/withSpinner.component";
import { RoomContext } from "../../Context/Context";
const RoomsContainer = () => {
  let { sortedRooms, loading } = useContext(RoomContext);

  return loading ? (
    <WithSpinner />
  ) : (
    <>
      <RoomsFilter />
      <RoomsList rooms={sortedRooms} />
    </>
  );
};

export default RoomsContainer;
