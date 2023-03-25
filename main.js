import "./src/style.css";

// get data element
const search = document.getElementById("searchInput");

const result = document.getElementById("result");
let mountainData = [];
// convert to lower case string

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
       <div class="flex flex-col items-start pb-8 lg:items-center bg-white shadow-lg rounded-xl w-full  swiper-slide
                                          transition-all duration-500" id="card" data-aos="fade-up">
                <h1 class=" font-inter font-semibold text-sm tracking-widest text-[#FE5E44] pb-5 pl-8 pt-2 lg:pl-0">
                  Volcano
                </h1>
                <h2 class="font-main font-normal text-4xl text-[#0C0E2B] lg:text-center pb-8 pl-8 lg:pl-0">
                  ${element.nama}
                </h2>

                <!-- List -->
                <div class="flex flex-col pb-8 pl-8 lg:pl-0">
                  <!-- wraper row lg for list -->
                  <div class="pb-1 lg:pb-2 lg:flex lg:flex-row">
                    <!-- mount jenis -->
                    <button
                      class="transition-all duration-500 group">
                      <div class="flex flex-row items-center gap-[15px] pb-2 lg:pb-0 lg:pr-2 ">
                      <svg class="h-10 transition-all duration-500 group-hover:rotate-45 group-hover:fill-slate-500" width="51" height="70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M160 144c-35.3 0-64-28.7-64-64s28.7-64 64-64c15.7 0 30 5.6 41.2 15C212.4 12.4 232.7 0 256 0s43.6 12.4 54.8 31C322 21.6 336.3 16 352 16c35.3 0 64 28.7 64 64s-28.7 64-64 64c-14.7 0-28.3-5-39.1-13.3l-32 48C275.3 187 266 192 256 192s-19.3-5-24.9-13.3l-32-48C188.3 139 174.7 144 160 144zM144 352l48.4-24.2c10.2-5.1 21.6-7.8 33-7.8c19.6 0 38.4 7.8 52.2 21.6l32.5 32.5c6.3 6.3 14.9 9.9 23.8 9.9c11.3 0 21.8-5.6 28-15l9.7-14.6-59-66.3c-9.1-10.2-22.2-16.1-35.9-16.1H235.1c-13.7 0-26.8 5.9-35.9 16.1l-59.9 67.4L144 352zm19.4-95.8c18.2-20.5 44.3-32.2 71.8-32.2h41.8c27.4 0 53.5 11.7 71.8 32.2l150.2 169c8.5 9.5 13.2 21.9 13.2 34.7c0 28.8-23.4 52.2-52.2 52.2H52.2C23.4 512 0 488.6 0 459.8c0-12.8 4.7-25.1 13.2-34.7l150.2-169z"/></svg>
                        <p class="transition-all duration-500 group-hover:text-slate-500 font-header font-normal text-lg text-[#0C0E2B]">
                          ${element.bentuk}
                        </p>     
                      </div>
                    </button>
        
                    <button
                      class="transition-all duration-500 group">
                      <div class="flex flex-row items-center gap-[15px] pb-2 lg:pb-0 lg:pr-2 ">
                  <?xml version="1.0" encoding="utf-8"?><svg  class="h-10 transition-all duration-500 group-hover:rotate-45 group-hover:fill-slate-500" width="51" height="70" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41.04 122.88" style="enable-background:new 0 0 41.04 122.88" xml:space="preserve"><g><path d="M6.09,7.49c-2.07,0-3.75-1.68-3.75-3.75C2.34,1.68,4.02,0,6.09,0h28.86c2.07,0,3.75,1.68,3.75,3.75 c0,2.07-1.68,3.75-3.75,3.75H6.09L6.09,7.49z M6.09,122.88c-2.07,0-3.75-1.68-3.75-3.75s1.68-3.75,3.75-3.75h28.86 c2.07,0,3.75,1.68,3.75,3.75s-1.68,3.75-3.75,3.75H6.09L6.09,122.88z M22.03,109.61c-0.41,0.18-0.85,0.29-1.29,0.31l0,0l-0.09,0 l0,0l-0.09,0h0h-0.09h0l-0.09,0l0,0l-0.09,0l0,0c-0.44-0.03-0.88-0.13-1.29-0.31l-0.01,0l-0.01-0.01l-0.07-0.03l-0.01-0.01 l-0.07-0.03l-0.02-0.01l-0.01-0.01c-0.24-0.12-0.47-0.27-0.68-0.45L1.4,95.55c-1.61-1.29-1.86-3.65-0.57-5.25 c1.29-1.61,3.65-1.86,5.25-0.57l10.73,8.67l-0.02-71L6.08,36.04c-1.61,1.29-3.96,1.04-5.25-0.57c-1.29-1.61-1.04-3.96,0.57-5.25 L18.12,16.7c0.21-0.18,0.44-0.33,0.68-0.45l0.01-0.01l0.02-0.01l0.07-0.03l0.01-0.01l0.07-0.03l0.01-0.01l0.01,0 c0.41-0.18,0.85-0.29,1.29-0.31l0,0l0.09,0l0,0l0.09,0h0h0.09h0l0.09,0l0,0l0.09,0l0,0c0.44,0.03,0.88,0.13,1.29,0.31l0.01,0 l0.01,0.01l0.07,0.03l0.01,0.01l0.07,0.03l0.02,0.01l0.01,0.01c0.24,0.12,0.47,0.27,0.68,0.45l16.72,13.52 c1.61,1.29,1.86,3.65,0.57,5.25c-1.29,1.61-3.65,1.86-5.25,0.57l-10.7-8.65l0.02,70.97l10.68-8.63c1.61-1.29,3.96-1.04,5.25,0.57 c1.29,1.61,1.04,3.96-0.57,5.25l-16.72,13.52c-0.21,0.18-0.44,0.33-0.68,0.45l-0.01,0.01l-0.02,0.01l-0.07,0.03l-0.01,0.01 l-0.07,0.03l-0.01,0.01L22.03,109.61L22.03,109.61z"/></g></svg>
                        <p class="transition-all duration-500 group-hover:text-slate-500 font-header font-normal text-lg text-[#0C0E2B]">
                          ${element["tinggi_meter"]}
                        </p>     
                      </div>
                    </button>
                  </div>
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
  });
  loadMountainData(input);
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
// init swipper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
