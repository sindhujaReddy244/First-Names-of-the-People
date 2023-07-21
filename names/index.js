const namesOfPeople = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (namesOfPeople) => {
  return getFirstNames(namesOfPeople);
};

module.exports = getPeopleInCity;
