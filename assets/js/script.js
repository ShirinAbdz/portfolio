const tabs = document.querySelectorAll("[data-target]");
const tabContent = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills__active");
    });
    target.classList.add("skilss__active");
    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });
    tab.classList.add("skills__active");
  });
});
