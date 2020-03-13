const UniqueValue = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default UniqueValue;
