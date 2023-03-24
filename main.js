// import { data } from "autoprefixer";
// import "./src/style.css";

// get data element
const search = document.getElementById("searchInput");
const searchType = document.getElementById("searchType");
const result = document.getElementById("result");
let mountainData = [];
// convert to lower case string
function lower(string) {
  return string.toLowerCase();
}
// init
const loadData = async () => {
  try {
    const url = await fetch(
      "https://indonesia-public-static-api.vercel.app/api/volcanoes"
    );
    mountainData = await url.json();
    console.log(mountainData);
    loadMountainData(mountainData);
  } catch (error) {
    console.error(error);
  }
};
const loadMountainData = (data) => {
  const output = data
    .map((element) => {
      return `
      <div class="w-full px-6 py-4 my-20 bg-white rounded-lg shadow-lg">
      <div>
               <h2 class="text-3xl font-semibold text-gray-800">${element.nama}</h2>
               <p class="mt-2 text-gray-600">
               ${element.bentuk}
               </p>
             </div>
             <div class="flex justify-end mt-4">
             <a href="#" class="text-xl font-medium text-indigo-500">
             ${element.tinggi_meter}
               </a>
               </div>
               </div>
               `;
    })
    .join("");
  result.innerHTML = output;
};
search.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();
  const input = mountainData.filter((data) => {
    return data.nama.toLowerCase().includes(value);
    // return data.bentuk.toLowerCase().includes(value);
  });

  loadMountainData(input);
});
searchType.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();
  const type = mountainData.filter((data) => {
    // return data.nama.toLowerCase().includes(value);
    return data.bentuk.toLowerCase().includes(value);
  });

  loadMountainData(type);
});
loadData();

// hamburger & active toggle
let hamburger = document.querySelector("#hamburger");
let menu = document.getElementById("mobile-menu-3");
let link = document.querySelectorAll(".link");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("hidden");
});
menu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("active");
});
// navbar

let fixed = document.querySelector(".fixed");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    fixed.classList.add("shadow-lg");
  } else {
    fixed.classList.remove("shadow-lg");
  }
});
