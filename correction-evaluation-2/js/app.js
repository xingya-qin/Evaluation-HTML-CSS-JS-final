var app = {};

(function($){

	"use strict";

	/*************************
		Predefined variables
	*************************/

	var $window =  $(window),
	$document = $(document); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

	app.background = function(){
		var imgs = ["./img/background.jpg", "./img/background-1.jpg", "./img/background-2.jpg"];
		var imgs_last_index = imgs.length -1;
		var compteur = 0;
		changeBackGround();

		function changeBackGround(){
			console.log(compteur);
			if(compteur < imgs_last_index){
				compteur++;
			}else{
				compteur = 0;
			}
			$("header").css("background-image", "url(" + imgs[compteur] + ")");
			setTimeout(changeBackGround, 15000);
		}

	};

	app.carrousel = function() {
		$('.carousel').carousel('pause');
	};

	app.animations = function() {

        $("#menu-burger").click(function(){
			$("#rideau").slideToggle();
			$(this).toggleClass("menu-burger-background");
        });

	};

	app.loadScroll = function() {

		$window.scroll(function() {
			var scrollHeight = $(document).height();
			var scrollPosition = $(window).height() + $(window).scrollTop();
			if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
				$("#vehicules_to_be_loaded").fadeIn(2000);
			}
		});

	};

	$document.ready(function(){
		app.animations();
		app.carrousel();
		app.background();
		app.loadScroll();
	});


})(jQuery);