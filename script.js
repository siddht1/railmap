console.clear();
// Example only, not for production use

const tabContainer = document.querySelector("#skk-tabs");
const tabEl = tabContainer.querySelectorAll("[data-bs-toggle='tab']");
const progressTab = document.querySelector("#progress-tab");

function tabEventShow(event) {
  const currentItem = this.parentNode;
  const list = Array.from(currentItem.parentNode.children);
  const position = list.indexOf(currentItem);
  const length = list.length - 1;
  let progressWidth = 0;

  progressWidth = typeof position == "number" ? position : 0;
  progressWidth = progressWidth > 0 && length > 0 ? progressWidth / length * 100 : 0;

  progressTab.style.width = progressWidth + "%";

  tabEl.forEach(tab => {
    if (list.indexOf(tab.parentNode) <= position) {
      tab.classList.add("btn-primary");
      tab.classList.remove("btn-secondary");
    } else {
      tab.classList.add("btn-secondary");
      tab.classList.remove("btn-primary");
    }
  });
}

tabEl.forEach(tab => {
  tab.addEventListener("show.bs.tab", tabEventShow);
});