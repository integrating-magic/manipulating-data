import { companiesData } from "./companies-data";
import { salesData } from "./sales-data";

const before = document.getElementById("before");
before.innerHTML = JSON.stringify(companiesData, null, 2);

//functions are here
