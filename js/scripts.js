var link = document.querySelector(".adress__btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
})