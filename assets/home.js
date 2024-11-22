/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */


//global  
 const $ = require('jquery');
 global.$ = global.jQuery = $;


require('./styles/coming-soon.css'); 
require('./styles/home.css'); 


//Resource
require('./styles/R/bg.mp4'); 

//import '../images/bg.mp4';
//import '../images/symfony-brands.svg';
//import '../images/methode_agile.jpg';
//import '../images/design-pattern.jpg';
//import '../images/Node.png';


require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.bundle.js');
require('@fortawesome/fontawesome-free/css/all.css');




$(document).ready(function() {


    // $('body div.masthead-bg').css('background-color','#ff7945');
    // $('body div.overlay').css('background-color','#cd955757');


     console.log("test .. build css ");

  });
 


// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';


