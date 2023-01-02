const slideshowElements = document.querySelectorAll(".slideshow-element");
let countElements = 1;
setInterval(() => {
	countElements++;
	const currentElement = document.querySelector(".current");
	if (countElements > slideshowElements.length) {
		slideshowElements[0].classList.add("current");
		countElements = 1;
	} else {
		currentElement.nextElementSibling.classList.add("current");
	}
	currentElement.classList.remove("current");
}, 2000);