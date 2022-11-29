
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination],
	// Optional parameters
	loop: true,
	grabCursor: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	slidesPerView: 4,
	slidesPerGroup: 4,
	spaceBetween: 78,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 0,
		},
		640: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 15,
		},
		902: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 10,
		},
		1280: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 15,
		},
		1440: {
			spaceBetween: 40,
		},
		1920: {
			spaceBetween: 78,
		}
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});