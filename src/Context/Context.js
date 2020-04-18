import React, { Component, createContext } from "react";
import Client from "../Contentful/Contentful";

export const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    this.getData();
  }

  //  get data
  getData = async () => {
    try {
      let res = await Client.getEntries({
        content_type: "beachResortRooms",
        order: "sys.createdAt"
      });
      let rooms = this.formatData(res.items);
      let featuredRooms = rooms.filter(room => room.featured);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (err) {
      console.log(err);
    }
  };

  formatData = items => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      // we are overriding images and id fields to make it easy to fetch them
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  getRoom = slug => {
    let room = this.state.rooms.find(room => {
      return room.slug === slug;
    });
    return room;
  };

  handleChange = e => {
    const { target } = e;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value
      },
      () => this.filterRooms()
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    //temp rooms for filtering
    let tempRooms = [...rooms];

    //transform values
    capacity = parseInt(capacity);
    price = parseInt(price);
    minSize = parseInt(minSize);
    maxSize = parseInt(maxSize);

    //types
    if (type !== "all")
      tempRooms = tempRooms.filter(room => room.type === type);

    //capacity
    if (capacity > 1)
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);

    // price
    tempRooms = tempRooms.filter(room => room.price <= price);

    //size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );

    //breakfast
    if (breakfast)
      tempRooms = tempRooms.filter(room => room.breakfast === true);

    //pets
    if (pets) tempRooms = tempRooms.filter(room => room.pets === true);

    //update the state
    this.setState({ sortedRooms: tempRooms });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export default RoomProvider;
