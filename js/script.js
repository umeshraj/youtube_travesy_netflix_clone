const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// select tab content item
function selectItem(e) {
  removeBorder();
  // add border to current tab
  this.classList.add("tab-border");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

// listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
