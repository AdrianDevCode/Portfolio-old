//javascript to have smooth transition on links and buttons for scrolling
function scrollButtons(buttonClicked) {
let scrollToSection = buttonClicked;
document.querySelector(scrollToSection).scrollIntoView({ behavior: 'smooth'});
}

/**I had to use jquery to transition navigation bar from static to fixed and vice versa.
bootstrap 4 dropped .affix sadly. I could have used postion: sticky polyfills as well
  **/
$(document).ready(function() {
          $(window).on('scroll', function (event) {
            $(".navbar").hide();

              var scrollValue = $(window).scrollTop();
              if (scrollValue > 600) {

                  $('.navbar').addClass('fixed-top').show(); // try have fadIn() to work to smooth it out
              } else{
                  $('.navbar').removeClass('fixed-top');

              }
                });
                  });
