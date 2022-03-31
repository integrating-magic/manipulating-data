import { companiesData } from "./companies-data";
import { salesData } from "./sales-data";

const clickMe = () => {
  alert(this.id);
};

// const manipulatedData = companiesData.filter(filterData);
companiesData.forEach((e) => {
  const button = document.createElement("button");
  button.type = "button";
  button.id = e.fieldData.id;
  button.addEventListener("click", clickMe);
  button.innerHTML = e.fieldData.CompanyName;
  button.className = "btn-sm col-3 border btn bg-primary text-white";

  after.appendChild(button);
});

//functions are here
