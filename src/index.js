import { companiesData } from "./companies-data";

const before = document.getElementById("before");
before.innerHTML = JSON.stringify(companiesData, null, 2);

const manipulatedData = [];
//TODO: add the manipulated data array to the 'after' div.
