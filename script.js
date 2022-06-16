"use strict";
const tabsBtn = document.querySelectorAll(".tab__btn");
const tabsItems = document.querySelectorAll(".tabs__item");

function hideTabs() {
	tabsItems.forEach((tab) => {
		tab.classList.add("hide");
	});
	tabsBtn.forEach((item) => {
		item.classList.remove("active");
	});
}
function showTabs(index) {
	tabsItems[index].classList.remove("hide");
	tabsBtn[index].classList.add("active");
}

tabsBtn.forEach((btn, index) => {
	btn.addEventListener("click", () => {
		hideTabs();
		showTabs(index);
	});
});
hideTabs();
showTabs(0);

const menuItem = document.querySelectorAll(".nav__item a");

menuItem.forEach((item) => {
	item.addEventListener("click", function (e) {
		e.preventDefault();
		const id = item.getAttribute("href");
		const element = document.querySelector(id);
		window.scroll({
			top: element.offsetTop - 74,
			behavior: "smooth",
		});
	});
});