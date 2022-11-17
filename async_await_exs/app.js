// /** 1)
//   Create an input field and a button when the button is clicked
//   call  function that receives 'number' as a parameter (from input field)
//   and returns a new promise after 2 sec
//   If the number is above 17 display on the screen 'You can drive'
//   and if it's smaller throw error and display on the screen 'You're too young to drive'
//  */
// //! Check yourself once with .then .catch and once with async await
// //! DRY
// //! Small functions

// // let submit = document.querySelector('.submit')
// // let h1 = document.querySelector('h1')
// // // event listener on input that calls func

// // const setEvents = () => {
// //     submit.addEventListener("click", () => {
// //       let input = document.querySelector("#input");
// //     });
// // }
// // setEvents()

// // //func (new promise) receives number, set timeout 2 sec
// // function canIDrive(input){
// //     return new Promise((resolve, reject) => {
// //         if (input.value > 17) {
// //             resolve()
// //         } else {
// //             reject()
// //         }
// //     });

// //     canIDrive.then(() => {
// //         h1.textContent = "You can drive";
// //     }).catch(() => {
// //         h1.textContent = "You cannot drive";
// //     })
// // }

// /** 2)
//    create a car Market Object
//    fetch all data from the API and assign it to the carMarketObj
//    add spinner to see that everything works
//    and show message when done
//    */
// //? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies
// //? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies/:id
// //? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers
// //? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers/:id:

// // async function fetchData(url) {
// //   try {
// //     const response = await fetch(url);
// //     const data = await response.json();
// //     return data;
// //   } catch (e) {
// //     console.log("error");
// //   }
// // }

// //
// const carMarketObj = {
//     agencies: [],
//     customers: [],
//     tax: {}
// }

// async function fetchData(url) {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       return data;
//     } catch (e) {
//       console.log("error");
//     }
//   }
//   const fetchId = async(url, searchId)=>{
//     let data = await fetchData(url);
//     const agenciesID = [];
//     data.forEach((agency)=>{
//       agenciesID.push(agency[searchId])
//     })
//     // console.log(agenciesID);
//     return agenciesID;
//   }
//   const getData = async (arr, temp) => {
//     let idArr = await Promise.all(arr)
//     console.log(idArr);
//     tempArr =[];
//     for (let id of idArr) {
//         let res = fetchData(`https://capsules7.herokuapp.com/api/carMarket/${temp}/${id}`)
//         tempArr.push(res);
//         // carMarket[temp].push(res)
//     }
//     const promises = await Promise.all(tempArr)
//     return promises;
//     console.log(promises);
//     }
// //  getData(fetchId("https://capsules7.herokuapp.com/api/carMarket/agencies", "agencyId"),"sellers");
// //   fetchId("https://capsules7.herokuapp.com/api/carMarket/customers", "id");

// const test = async () => {
//   const fetchAll = await fetchId(
//     "https://capsules7.herokuapp.com/api/carMarket/agencies",
//     "agencyId"
//   );
//   getData(fetchAll, "agencies");
// };
// test();

// const carMarket = {
//   sellers: null,
//   customers: null,
//   tax: {},
// };
// async function fetchData(url) {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (e) {
//     console.log("error");
//   }
// }
// const fetchID = async (url, searchId) => {
//   const data = await fetchData(url);
//   const agenciesId = [];
//   data.forEach((agency) => {
//     agenciesId.push(agency[searchId]);
//   });
//   return agenciesId;
// };
// //fetchID('https://capsules7.herokuapp.com/api/carMarket/agencies', "agencies");
// //fetchID('https://capsules7.herokuapp.com/api/carMarket/customers', "id");

// const getData = async (arr, temp) => {
//   let idArr = await Promise.all(arr);
//   let tempArr = [];
//   for (let id of idArr) {
//     let res = fetchData(
//       `https://capsules7.herokuapp.com/api/carMarket/${temp}/${id}`
//     );
//     tempArr.push(res);
//   }
//   const promises = await Promise.all(tempArr);
//   return promises;
// };
// const test = async () => {
//   const fetchAll = await fetchID(
//     "https://capsules7.herokuapp.com/api/carMarket/agencies",
//     "agencyId");
//     const fetchAllCustomers = await fetchID(
//     "https://capsules7.herokuapp.com/api/carMarket/customers", "id")
//   getData(fetchAll, "agencies", "customers");

// test();

// agencies.push(getData(fetchAll, "agencies"));
//   const agenciesProm = await Promise.all(agencies);
//   carMarket.sellers = agenciesProm.flat();
//   customers.push(getData(fetchAllCustomers, "customers"));
//   const customersProm = await Promise.all(customers);
//   carMarket.customers = customersProm.flat();
//   const taxData = await fetchData(
//     "https://capsules7.herokuapp.com/api/carMarket/tax"
//   );
//   tax.push(taxData);
//   carMarket.tax = tax;
// };
// test();
// console.log(carMarket);

//? 3)
//? Create two button on the screen "Customers" "Agencies"
//? When the user clicks the button display a list of Customers / Agencies names
// ? Only one list can be presented at a time

// function displayResult(arr) {
//   const ul = document.createElement("ul");
//   for (let item of arr) {
//     const li = document.createElement("li");
//     li.textContent = item;
//     ul.appendChild(li);
//   }
//   body.appendChild(ul)
// };

// const showList = function(e) {
//   const id = e.target.getAttribute("id");
//   document.body.appendChild(ul)
//   console.log(stat[id])
//   for (let item of stat[id]){
//     if (id === 'sellers') {
//      li.textContent = item.agencyName;
//       } else if (id === 'customers') {
//         li.textContent=item.name;
//       }
//       ul.appendChild(li);
//     }
//   };

//? 4)
//? When the user clicks on single name of a Customer / Agency
//? Show over the screen a card with all the data of that particular Customer / Agency
//! Questions we should ask ourselves:
//! Where functions can be combined into one function?
//! Am I holding unnecessary information in the client's browser?
//! Why did I choose to call the API the way I did?
//* You can divide the work inside the capsule and share the responsibility
//* Separate the functions of logic and The functions related to HTML

const spinner = document.querySelector(".spinner");
const agenciesBtn = document.querySelector("#sellers");
const customersBtn = document.querySelector("#customers");

const stat = {
  mydata: null,
};

const fetchData = async function (url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const arrOfUrls = [
  "https://capsules7.herokuapp.com/api/carMarket/agencies",
  "https://capsules7.herokuapp.com/api/carMarket/customers",
  "https://capsules7.herokuapp.com/api/carMarket/tax",
];

const getAgencyById = function (agenciesArr, id) {
  return agenciesArr.find((agency) => agency.agencyId === id);
};

const getCustomerById = (customerArr, id) => {
  return customerArr.find((customer) => {
    return customer.id === id;
  });
};

const searchForResults = function (e) {
  const res = e.target.parentElement.id;
  if (res === "sellers") console.log(getAgencyById(stat[res], e.target.id));
  else console.log(getCustomerById(stat[res], e.target.id));
};

const showList = function (e) {
  searchForResults(e);
  if (ul) ul.replaceChildren("");
  const id = e.target.getAttribute("id");
  const ul = document.createElement("ul");
  document.body.appendChild(ul);
  console.log(stat[id]);
  for (let item of stat[id]) {
    const li = document.createElement("li");
    if (id === "sellers") {
      li.textContent = item.agencyName;
      li.setAttribute("id", item.agenciesId);
      ul.setAttribute("id", "sellers");
    } else {
      li.textContent = item.name;
    }
    ul.appendChild(li);
  }
};

const events = function () {
  agenciesBtn.addEventListener("click", showList);
  customersBtn.addEventListener("click", showList);
};
// startup();
events();
