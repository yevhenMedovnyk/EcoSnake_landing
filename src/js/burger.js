const burgerBtn = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.menu__list');
const bodyLock = document.querySelector('body');
const menuCover = document.querySelector('.menu__cover');



//Відкриваємо бургер
burgerBtn.addEventListener('click', () => {
	if (burgerMenu.classList.contains('active')) {
		closeBurger()
	}
	else
		openBurger()
})
//Закриваємо бургер по кліку на підложку
menuCover.addEventListener('click', () => {
		closeBurger()
})




//Функція для відкриття бургер-меню
const openBurger = () => {
	burgerBtn.classList.add('active');
	burgerMenu.classList.add('active');
	bodyLock.classList.add('lock');
	menuCover.classList.add('active');
}

//Функція для закриття бургер-меню
const closeBurger = () => {
	burgerBtn.classList.remove('active');
	burgerMenu.classList.remove('active');
	bodyLock.classList.remove('lock');
	menuCover.classList.remove('active');
}