// let togglebtn = document.getElementById("bar");
// let links = document.getElementById("list");

// togglebtn.onclick = function () {
//   links.classList.toggle("togglee");
// };

// // click any where to remove togglee
// document.addEventListener("click", (eo) => {
//   if (eo.target !== togglebtn && eo.target !== links) {
//     if (links.classList.contains("togglee")) {
//       links.classList.toggle("togglee");
//     }
//   }
// });
// links.onclick = function (eo) {
//   eo.stopPropagation();
// };

// other links

let Other = document.getElementById("Other");

let mega = document.getElementById("mega");

Other.onclick = function (eo) {
  mega.classList.toggle("megeclick");
};
// click any where to remove megeclick

document.addEventListener("click", (eo) => {
  if (eo.target !== Other && eo.target !== mega) {
    if (mega.classList.contains("megeclick")) {
      mega.classList.toggle("megeclick");
    }
  }
});

mega.onclick = function (eo) {
  eo.stopPropagation();
};

// on scroll

let skill = document.querySelector(".our-skills");

let spans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
  if (window.scrollY >= skill.offsetTop) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.width;
    });
  }
};
