var app = {};

(function($){

    "use strict";

    /*************************
        Predefined variables
    *************************/

    var $window =  $(window),
    $document = $(document); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)


            //******header****///
    app.headerAction = function(){
        $("header").backstretch([ 
            "img/background.jpg", 
            "img/bg02.jpg",
            "img/bg03.jpg"
            ],{duration: 1000, fade: 1500});
   

        /***Navbar button changer bg-color***/
        $(".navbar-toggler-icon").mouseover(function(){
            $(this).css("background-color","lightgrey");
        });
        $(".navbar-toggler-icon").mouseout(function(){
             $(this).css("background-color","");
         });
     
      
         $("h1").click(function(){
           $("h1").css({"fontWeight":"normal"})
           $(this).css({"fontWeight":"bold"});
                       
        });

        $("#valider").click(function () {
        alert("Are you sure？");
    });


     };/*--fin app.headerAction */ 

     /****fin header****/    

    app.loadScroll = function(){
   
        setTimeout(function(){
            $('.carousel').carousel('pause');
        },500);


        /// Calculer la taille de l'écran et afficher 
        /// x nombre d'élèments en fonction de la taille de l'écran

        $window.scroll(function() {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                // when scroll to bottom of the page
                setTimeout(function(){
                    $("#spinner").remove();
                    $(".load-carousel-on-scroll").each( function( index, element ){
                        $(this).fadeIn(1000);
                    });
                },500);

            }
        });


    }

    /***footer***/

    app.footerEffet = function(){

       $("#imgAgence").mouseover(function(){
            $("#imgAgence").css({height:"250px",
                width:"350px"});
        });
       $("#imgAgence").mouseout(function(){
           $("#imgAgence").css({
            height:"", width:""
           });
       });
    };

    $document.ready(function(){
        app.headerAction();
        app.loadScroll();
        app.footerEffet();

    });


})(jQuery);