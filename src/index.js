import { companiesData } from "./companies-data";

const extraRecord = {
  title: "JS in FM Training",
  type: "Binge Mode",
  cohort: "2",
  startDate: "2022-04-12",
};

const before = document.getElementById("before");
before.innerHTML = JSON.stringify(companiesData, null, 2);

//TODO: Extract an element from the array.
//TODO: Add elements to beginning and end of array.
//TODO: Remove Elements from end of array.
//TODO: Create a new array from old data.
//TODO: Filter for a certain state.
//TODO: Find the first element with a certain name.
//TODO: Create a new array with just elements of a certain state.
//TODO: Create buttons for each record.
//functions are here
const manipulatedData = [];

after.innerHTML = JSON.stringify(manipulatedData, null, 2);
