const popups = document.querySelectorAll(".popups > *")
const popupContainer = document.querySelector(".popups");

function ShowOrHideBasedOnShowOrHidePropertyOfElement () {
	document.querySelector(this.attributes.showOrHide).classList.toggle("hide")
	popupContainer.classList.toggle("backdrop")
}

document.querySelectorAll("*[show-or-hide]").forEach(item => {
	item.attributes.showOrHide = item.getAttribute("show-or-hide");
	item.addEventListener ("click", ShowOrHideBasedOnShowOrHidePropertyOfElement, false)
})

if (popupContainer != null) {
	popupContainer.addEventListener("click", () => {
		popups.forEach(popup => {
			popup.classList.add("hide");
		})
		popupContainer.classList.remove("backdrop");
	}, false)
}