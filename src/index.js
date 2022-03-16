import { companiesData } from "./companies-data";
import { salesData } from "./sales-data";

const before = document.getElementById("before");
before.innerHTML = JSON.stringify(companiesData, null, 2);

function constructNewObject(e) {
  const obj = {
    city: e.fieldData.City,
    state: e.fieldData.State,
    cityState: `City / State: ${e.fieldData.City}, ${e.fieldData.State}`,
  };
  return obj;
}

const filterData = function (e) {
  return e.fieldData.State === "TX";
};

const manipulatedData = companiesData
  .filter(filterData) //only show texas records
  .map(constructNewObject); //constrcut the new object with those TX records.

// const manipulatedData = companiesData.filter(filterData);
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null, 2);

//functions are here
