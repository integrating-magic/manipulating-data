import { companiesData } from "./companies-data";
import { salesData } from "./sales-data";

const before = document.getElementById("before");
before.innerHTML = JSON.stringify(companiesData, null, 2);

//functions are here
const manipulateData = companiesData[0].fieldData;
const keys = Object.keys(manipulateData);

const after = document.getElementById("after");
after.innerHTML = JSON.stringify(keys, null, 2);
