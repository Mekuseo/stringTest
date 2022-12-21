const strLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    return "String length must be between 1 and 10";
  } else {
    return str.length;
  }
};

module.exports = strLength;
