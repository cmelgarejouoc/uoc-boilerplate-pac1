/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import "some-node-module";
// import SomeModule from "some-node-module";

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

const btn_open = document.querySelector(".js-open");
const btn_close = document.querySelector(".js-close");

btn_open.addEventListener("click", function () {
  openNav();
});

btn_close.addEventListener("click", function () {
  closeNav();
});

function openNav() {
  document.querySelector(".js-open").style.display = "none";
  document.querySelector(".js-close").style.display = "block";
  document.querySelector(".js-menu-content").style.width = "34rem";
}

function closeNav() {
  document.querySelector(".js-open").style.display = "block";
  document.querySelector(".js-close").style.display = "none";
  document.querySelector(".js-menu-content").style.width = "0";
}

document.querySelectorAll(".js-btn").forEach( elem => {
  elem.addEventListener("click", e => {
    document.querySelectorAll(".js-content").forEach( contentElem => {
      contentElem.classList.remove("showYearContent");

      var contentYear = contentElem.dataset.year;

      if (contentYear == e.target.dataset.year) {
        contentElem.classList.add("showYearContent");
      }
    });
  });
});


document.querySelectorAll(".js-scroll").forEach( elem => {
  elem.addEventListener("click", e => {
    document.getElementById(e.target.dataset.target).scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  });
});
