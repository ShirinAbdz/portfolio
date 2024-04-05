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
const linkWork = document.querySelectorAll(".work__item a");

workItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove 'active-work' class from all items
    workItems.forEach((item) => item.classList.remove("active-work"));
    // Add 'active-work' class to the clicked item
    this.classList.add("active-work");
  });
});

linkWork.forEach((link) => {
  link.addEventListener("click", activeWork);
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

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav_menu a[href*="${sectionId}"]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav_menu a[href*="${sectionId}"]`)
        .classList.remove("active-link");
    }
  });
}






// let placeholder = document.getElementById("description");
// let words = ["Software Engineering graduate", "passionate about code and creativity", "a real fast learner","solves complex problems", "with analytical mindset ! :)"];
// let index = 0;
// function type(word){
//     let i = 0;
//     let writing = setInterval(()=>{
//         placeholder.innerHTML += word.charAt(i);
//         i ++;
//         if(i>=word.length){
//             clearInterval(writing);
//             setTimeout(erase, 1000);
//         }
//     }, 75)

// }

// function erase(){
//     let deleting = setInterval(() => {
//         placeholder.innerHTML = placeholder.innerHTML.slice(0,-1);
//         if(placeholder.innerHTML.length <= 0){
//             clearInterval(deleting);
//             index++;
			
//             if(index>=words.length){
//                 index = 0;
//             }
//             type(words[index])
//         }
//     }, 8);

// }
// type(words[index]);
