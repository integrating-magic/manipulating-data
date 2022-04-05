import { companiesData } from "./companies-data";
import { salesData } from "./sales-data";

const after = document.getElementById("after");

const clickMe = (id) => {
  alert(id);
};
//TODO: Find all unique states
const states = companiesData.map((e) => e.fieldData.State);

const findUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};
const uniqueStates = states.filter(findUnique);
//TODO: for each state: create a parent element
const createParent = (state) => {
  const parent = document.createElement("div");
  parent.className = "col-4 p-4";
  parent.innerHTML = `<h3>${state}</h3>`;
  return parent;
};

//TODO: for each state: filter for records with that state in fieldData.State

const filterForState = (array, state) => {
  return array.filter((e) => e.fieldData.State === state);
};
//TODO: append to the parent element (created above)

// CREATE BUTTON
const createButton = (e) => {
  const button = document.createElement("button");
  button.type = "button";
  button.id = e.fieldData.Id;
  button.addEventListener("click", function () {
    clickMe(e.fieldData.Id);
  });
  button.innerHTML = e.fieldData.CompanyName;
  button.className = "btn-sm border col-12 btn bg-primary text-white";
  return button;
  // after.appendChild(button);
};
// companiesData.forEach(createButton);

// ULTIMATE FUNCTION
uniqueStates.forEach((state) => {
  const parentEl = createParent(state);
  //const data = companiesData.filter((e) => e.fieldData.State === state);
  const data = filterForState(companiesData, state);
  data.forEach((d) => {
    const button = createButton(d);
    parentEl.appendChild(button);
  });
  after.appendChild(parentEl);
});
