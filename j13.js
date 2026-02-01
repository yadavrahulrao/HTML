// const URL = "https://http.cat/100"

// let promise = fetch(URL);
// console.log(promise);


// const getimage = async () => {
//   let Response = await fetch(URL);
//   console.log(Response);
// }


// const URL = "https://cat-fact.herokuapp.com/facts";
// const factpara = document.querySelector("#facts");
// const btn = document.querySelector('#btn');

// const getfacts = async () => {
//   console.log("getting data");
//   let respone = await fetch(URL)
//   console.log(respone);
//   let data = await respone.json();
//   factpara.innerText = data[2].text;
// };

// btn.addEventListener("click",getfacts);









const BaseUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json"


const dropdown = document.querySelector(".dropdown select");




for(let select of dropdown){
  for (currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
      select.append(newOption);
  }
}