import { companiesData } from "./companies-data";
import { salesData } from "./sales-data";

const after = document.getElementById("after");

const clickMe = (id) => {
  alert(id);
};
//TODO: Find unique States in companiesData
//TODO: for each state: create a parent element (with state name in it)
//TODO: for each state: filter for records with that state in fieldData.State
//TODO: for each record, create a button
//TODO: append to the parent element (created above)
//TODO: append the parent element to the after div

companiesData.forEach((e) => {
  const button = document.createElement("button");
  button.type = "button";
  button.id = e.fieldData.Id;
  button.addEventListener("click", function () {
    clickMe(e.fieldData.Id);
  });
  button.innerHTML = e.fieldData.CompanyName;
  button.className = "btn-sm col-3 border btn bg-primary text-white";

  after.appendChild(button);
});
