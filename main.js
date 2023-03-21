import { data } from "autoprefixer";
import "./src/style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));
// get search bar
// document.getElementById("search").addEventListener("click", getMountain);
// convert to lower case string
function lower(string) {
  return string.toLowerCase();
}

// function getMountain() {
//   const url1 = `https://indonesia-public-static-api.vercel.app/api/volcanoes?type=stratovulkan`;
//   const url2 = `https://indonesia-public-static-api.vercel.app/api/volcanoes?type=kaldera`;
//   const url3 = `https://indonesia-public-static-api.vercel.app/api/volcanoes?type=kompleks`;
//   //  stratovulkan
//   fetch(url1).then((response) =>
//     response
//       .json()
//       .then((data) => {
//         const list = document.getElementById("list1");
//         data.forEach((element) => {
//           console.log(element);
//           list.innerHTML += `<li>Nama:${element.nama} - Bentuk:${element.bentuk} - Tinggi_Meter:${element["tinggi_meter"]} </li>`;
//         });
//       })
//       .catch((err) => console.error(err))
//   );
//   //   kaldera
//   fetch(url2).then((response) =>
//     response
//       .json()
//       .then((data) => {
//         const list = document.getElementById("list2");
//         data.forEach((element) => {
//           console.log(element);
//           list.innerHTML += `<li>Nama:${element.nama} - Bentuk:${element.bentuk} - Tinggi_Meter:${element["tinggi_meter"]} </li>`;
//         });
//       })
//       .catch((err) => console.error(err))
//   );
//   //   kompleks
//   fetch(url3).then((response) =>
//     response
//       .json()
//       .then((data) => {
//         const list = document.getElementById("list3");
//         data.forEach((element) => {
//           console.log(element);
//           list.innerHTML += `<li>Nama:${element.nama} - Bentuk:${element.bentuk} - Tinggi_Meter:${element["tinggi_meter"]} </li>`;
//         });
//       })
//       .catch((err) => console.error(err))
//   );
// }
// getMountain();
async function getMountain() {
  try {
    const res = await fetch(
      `https://indonesia-public-static-api.vercel.app/api/volcanoes?type=stratovulkan`
    );
    const data = await res.json();
    data.map((element) => {
      console.table(element);
      const list = document.getElementById("list1");
      list.innerHTML += `<li>Nama:${element.nama} - Bentuk:${element.bentuk} - Tinggi_Meter:${element["tinggi_meter"]} </li>`;
    });
  } catch (error) {
    console.error(error);
  }
}
getMountain();
