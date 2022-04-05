//TODO: Find unique States in companiesData
const statesInData = companiesData.map((e) => e.fieldData.State);
console.log(statesInData);

const findUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};
const uniqueStates = statesInData.filter(findUnique);
console.log(uniqueStates);
//TODO: for each state: create a parent element (with state name in it)
const createParent = (state) => {
  const parent = document.createElement("div");
  parent.innerHTML = state;
  return parent;
};
//TODO: for each state: filter for records with that state in fieldData.State
const filterByState = (state) => { 
    return companiesData.filter((e) => e.fieldData.State === state);
}
uniqueStates.forEach((e) => {});
//TODO: for each record, create a button
//TODO: append to the parent element (created above)
//TODO: append the parent element to the after div

const createButton = (e) => {
  const button = document.createElement("button");
  button.type = "button";
  button.id = e.fieldData.id;
  button.addEventListener("click", clickMe);
  button.innerHTML = e.fieldData.CompanyName;
  button.className = "btn-sm col-3 border btn bg-primary text-white";

  after.appendChild(button);
};
