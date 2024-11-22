
const $ = require('jquery');
global.$ = global.jQuery = $;



//import 'styles/small-business.css';
//import 'styles/app.css';
require('./styles/app.css'); 


require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.bundle.js');



$(document).ready(function() {

	showMenu(); 

	function showMenu(){
	   $('.li-service').hover(function() {
			$('ul.menucache').addClass('showMenu'); 
		},function () {
	  	$('ul.menucache').removeClass('showMenu'); 
		});
	}


  });
 



