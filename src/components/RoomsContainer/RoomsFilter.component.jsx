import React, { useContext } from "react";
import Title from "../Title/Title.component";
import { RoomContext } from "../../Context/Context";
import UniqueValue from "../utils/UniqueValue";
const RoomsFilter = () => {
  let {
    rooms,
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = useContext(RoomContext);

  // find unique
  let types = UniqueValue(rooms, "type");
  let people = UniqueValue(rooms, "capacity");

  //sorting
  types.sort();
  people.sort((a, b) => a - b);

  // add 'all' to it
  types = ["all", ...types];

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        {/* end of select type */}
        {/* select guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people.map((num, index) => (
              <option key={index} value={num}>
                {num}
              </option>
            ))}
            }
          </select>
        </div>
        {/* end of select guests */}
        {/* select price */}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            className="form-control"
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
            value={price}
          />
        </div>
        {/* end of select price */}
        {/* select size */}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              className="size-input"
              min={minSize}
              onChange={handleChange}
              value={minSize}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              className="size-input"
              min={maxSize}
              onChange={handleChange}
              value={maxSize}
            />
          </div>
        </div>
        {/* end of select size */}
        {/* select extra */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              onChange={handleChange}
              checked={breakfast}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              onChange={handleChange}
              checked={pets}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* end of select extra */}
      </form>
    </section>
  );
};

export default RoomsFilter;
