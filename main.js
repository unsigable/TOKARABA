/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== CHARGES SWIPER ===============*/
let swiperCharges = new Swiper(".charges__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
    },
  });

/*=============== MIXITUP FILTER CATALOG ===============*/
let mixerCatalog = mixitup('.catalog__content', {
    selectors: {
        target: '.catalog__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active catalog */ 
const linkCatalog = document.querySelectorAll('.catalog__item')

function activeCatalog(){
    linkCatalog.forEach(l=> l.classList.remove('active-catalog'))
    this.classList.add('active-catalog')
}
linkCatalog.forEach(l=> l.addEventListener('click', activeCatalog))

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     reset: true
// })

// sr.reveal(`.home__title, .catalog__filters, .map__img, .charges__container`)
// sr.reveal(`.home__subtitle`, {delay: 500})
// sr.reveal(`.home__elec`, {delay: 600})
// sr.reveal(`.home__img`, {delay: 800})
// sr.reveal(`.home__car-data`, {delay: 900, interval: 100, origin: 'bottom'})
// sr.reveal(`.home__button`, {delay: 1000, origin: 'bottom'})
// sr.reveal(`.about__content, .adv__content, .credit__content`, {interval: 150})
// sr.reveal(`.compare__data, .order__data, .news__group, .faq__group`, {origin: 'left'})
// sr.reveal(`.compare__img, .order__img, .news__data, .faq__data`, {origin: 'right'})
// sr.reveal(`.map__bg`, {delay: 600, origin: 'bottom'})
// sr.reveal(`.map__card`, {interval: 300})
// sr.reveal(`.catalog__card, .partners__content, .logos__content, .footer__content`, {interval: 100})