const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

const url = location.href;
const anchorLinks = links.querySelectorAll("a");
for (let link of anchorLinks) {
  if (link.href === url) {
    console.log(url);
    link.classList.toggle("active");
  }
}

// add fixed nav for scroll page
let navbar = document.getElementById("nav");
window.addEventListener("scroll", function () {
  const navbarHeight = navbar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  //console.log(navbarHeight);console.log(scrollHeight);
  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
});

// ********** smooth scroll ************
// select links
// const scrollLinks = document.querySelectorAll(".scroll-link");
const scrollLinks = document.querySelectorAll(".sidebar-links a");
navbar = document.getElementById("nav");
const linksContainer = document.querySelector(".sidebar-links");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    console.log(element);
    const navHeight = navbar.getBoundingClientRect().height;
    // const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    // if (navHeight > 82) {
    //   position = position + containerHeight;
    // }

    window.scrollTo({
      left: 0,
      top: position - 100,
      behavior: "smooth",
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

// switch active links by looping Array of Links in ['className','className','C$
// replace. current[Index].className.replace("  active", "")

// var x = document.querySelector(".nav-links");
// var btns = x.getElementsByClassName("nav-link");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     // var current = document.getElementsByClassName("active");
//     var current = document.querySelector(".active");
//     current.className = current.className.replace(" active", "");

//     // current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//     // console.log(this); // why can't use arrow fn? becoz this = window.
//   });
// }

// // Manage the scroll of the navigation header up
// const header = document.querySelector(".main-nav");
// window.addEventListener("scroll", () => {
//   const scrollPos = window.scrollY;
//   if (scrollPos > 10) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });

// const btn_hamburger = document.querySelector("#btn_hamburger");

// Using header parent to add/remove classes responsive for display/remove
// mobile menu. And class open for change icon to cross from ham. Event mash:)
// <input type="checkbox" class="menu-btn" id="menu-btn" />
// <label for="menu-btn" class="menu-icon open" id="btn_hamburger">
//   <span class="menu-icon__line"></span>
