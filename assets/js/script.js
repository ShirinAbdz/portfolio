const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

if (navClose) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

const tabs = document.querySelectorAll("[data-target]");
const tabContent = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("active-work");
    });
    target.classList.add("skills__active");
    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });
    tab.classList.add("skills__active");
  });
});

// <!-- Mixitup Filter --!>

let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

// <!-- Link Active Work --!>

// Select all work items
const linkWork = document.querySelectorAll(".work__item");
const workItems = document.querySelectorAll(".work__item");

workItems.forEach((item) => {
  item.addEventListener("click", () => {
    workItems.forEach((item) => item.classList.remove("active-work"));
    item.classList.add("active-work");
    console.log(item);
  });
});

// <!-- input aimation --!>

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// scroll

// const sections = document.querySelectorAll("section[id]");

// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
//   let scrollY = window.scrollY;
//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     const sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(`.nav__menu a[href*="${sectionId}"]`)
//         .classList.add("active-link");
//     } else {
//       document.querySelector(`.nav_menu a[href*="${sectionId}"]`).classList.remove("active-link");
//     }
//   });
// }



document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav__link");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Remove active-link class from all nav links
            navLinks.forEach((navLink) => {
                navLink.classList.remove("active-link");
            });

            // Add active-link class to the clicked nav link
            this.classList.add("active-link");

            // Scroll to the target section
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
        const scrollY = window.scrollY;
        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Remove active-link class from all nav links
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active-link");
                });
                // Add active-link class to the corresponding nav link
                document.querySelector(`.nav__menu a[href="#${sectionId}"]`).classList.add("active-link");
            }
        });
    }
});
