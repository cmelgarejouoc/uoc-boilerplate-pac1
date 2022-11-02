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



/**
 * Controls menú hamburguesa
 */

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



/**
 * Accions etiquetes anys
 */

document.querySelectorAll(".js-btn").forEach( elem => {
  elem.addEventListener("click", e => {
    document.querySelectorAll(".js-content").forEach( contentElem => {
      contentElem.classList.remove("show-year-content");

      var contentYear = contentElem.dataset.year;

      if (contentYear == e.target.dataset.year) {
        contentElem.classList.add("show-year-content");
      }
    });
  });
});



/**
 * Click a element de menú
 */

document.querySelectorAll(".js-scroll").forEach( elem => {
  elem.addEventListener("click", e => {
    document.getElementById(e.target.dataset.target).scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    if (window.innerWidth < 768) {
      closeNav();
    }
    
  });
});


/**
 * Listener per saber si s'ha redimensionat la finestra
 */

function windowResizeListener() {
  if (window.innerWidth > 767) {
    document.querySelector(".js-open").style.display = "none";
    document.querySelector(".js-close").style.display = "none";
    document.querySelector(".js-menu-content").style.width = "100%";
  }else{
    document.querySelector(".js-open").style.display = "block";
    document.querySelector(".js-close").style.display = "none";
    document.querySelector(".js-menu-content").style.width = "0";
  }
}

window.addEventListener("resize", windowResizeListener);