var activeClass = 'ss__demo__login__modal--active';
var modalSelector = 'ss__demo__login__modal';
var modalInputSelector = '#ss__demo__login__modal #ss__demo__input__shopper-id';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function toggleModal() {
	var modal = document.getElementById(modalSelector);
	var modalInput = document.querySelector(modalInputSelector);

	if (modal.classList.contains(activeClass)) {
		modal.classList.remove(activeClass);
	} else {
		modal.classList.add(activeClass);
		modalInput.focus();
	}
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setShopperID() {
	var modal = document.getElementById(modalSelector);
	var modalInput = document.querySelector(modalInputSelector);
	var id = modalInput.value;

	if (id) {
		athos.tracker.track.shopper.login({
			id: id,
		});
		modal.classList.remove(activeClass);
	}
}
