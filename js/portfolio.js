function scrollButtons(buttonClicked) {
let scrollToSection = buttonClicked;
document.querySelector(scrollToSection).scrollIntoView({ behavior: 'smooth'});
}
