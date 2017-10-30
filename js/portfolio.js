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
    var prev = 0;
    let scrollValue = $(window).scrollTop();
    if (scrollValue > 480) {
      $('.navbar').addClass('fixed-top').show(); // try to ease/smooth the animation

    } else {
      $('.navbar').removeClass('fixed-top').hide();

    }
  });
});
/** settings for particles-js for the landing page**/
particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#3175e2"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 2,
        "color": "#3175e2"
      },
      "polygon": {
        "nb_sides": 7
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 10,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,

});
