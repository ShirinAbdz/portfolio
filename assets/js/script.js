const tabs = document.querySelectorAll("[data-target]");
const tabContent = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills__active");
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

const linkWork = document.querySelectorAll(".work__item");

linkWork.forEach((l) =>
  l.addEventListener("click", () => {
    linkWork.forEach((l) => l.classList.remove("active-work"));
    l.classList.add("active-work");
  })
);

linkWork.forEach((l) => l.addEventListener("click", activeWork));

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
