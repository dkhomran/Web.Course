/* =============
    Block 2 : add active 
    =========== */

let chap_Items = document.querySelectorAll(".chap-item a");
console.log(chap_Items);

chap_Items.forEach((el) => {
  el.onclick = function (eo) {
    // remove active from All
    chap_Items.forEach((ele) => {
      ele.classList.remove("active");
    });

    // add active to current
    eo.target.classList.add("active");
  };
});

/* =============
    Fast Scroll To Top 
    =========== */
let btn_Scroll_Top = document.querySelector(".btn-scroll-top");

window.onscroll = (eo) => {
  if (window.scrollY > 1400) {
    btn_Scroll_Top.style.display = "flex";
  } else {
    btn_Scroll_Top.style.display = "none";
  }
};

btn_Scroll_Top.onclick = (eo) => {
  window.scrollTo(0, 0);
};

/* =============
  nav-bar toggle 
  ================ */

let nav_Icon = document.querySelector("#icon-nav");
let nav_content = document.querySelector("#nav_Content");
let first_Header = document.querySelector(".nav-bar");

nav_Icon.addEventListener("click", (eo) => {
  nav_content.classList.toggle("nav_toggle");
});

document.body.onclick = (eo) => {
  if (
    eo.target != nav_content &&
    eo.target != first_Header &&
    eo.target != nav_Icon
  ) {
    console.log("object");
    nav_content.classList.remove("nav_toggle");
  }
};
