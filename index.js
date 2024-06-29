// Code your solution in this file!
// Return the first two drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }

  // Array of functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  
  // Return the last two drivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);

  }
  
  
  // Create a fare multiplier function
  function createFareMultiplier(multiplier) {
    return function(fare) {

      return fare * multiplier;
    };
  }
  
  
  // Function to triple the fare
  const fareTripler = createFareMultiplier(3);

  // Function to double the fare
  const fareDoubler = createFareMultiplier(2);
  
  
  // Select different drivers based on the function passed
  function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
  }
  
  // Exporting the functions for testing
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  