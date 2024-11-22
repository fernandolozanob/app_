

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */



const $ = require('jquery');
global.$ = global.jQuery = $;

require('./styles/resume.css');

//import '../styles/resume.css';
//import '../images/profile.jpg';


require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.bundle.js');
require('jquery.easing/jquery.easing.js');
require('@fortawesome/fontawesome-free/css/all.css');




$(document).ready(function() {

      resume(); 


  function  resume() {

      // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: (target.offset().top)
              }, 1000, "easeInOutExpo");
              return false;
            }
          }
        });

          // Closes responsive menu when a scroll trigger link is clicked
          $('.js-scroll-trigger').click(function() {
            $('.navbar-collapse').collapse('hide');
          });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  
};

  });
 