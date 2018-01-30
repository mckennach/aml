var App = {

  init: function(){
    App.intro();
    App.eventListeners();


  },

  intro: function(){
	  var bottomPercent;
	  if($(window).innerWidth() <= 375){
	      bottomPercent = '10%';
      } else if($(window).innerWidth() <= 320){
        bottomPercent = '15%';
      } else {
	      bottomPercent = '0%';
        }

    $('#logo-container').animate({
      top: '7%'
    }, 1500);

    $('#page-title-navigator-container').animate({

        bottom: bottomPercent
    }, 1500);

  },



  eventListeners: function(){

    /* -----  EVENTS FOR HOME PAGE  ------ */



    /* -----  &NAVIGATOR  ------ */

    $(document).on('click', '#page-title-navigator', function(){
      $('#logo-container').animate({
        top: '-70%'
      }, 1000, function(){

        $('#home').fadeOut();

      });

      $('#page-title-navigator-container').animate({
          bottom: '-70%'
      }, 1000, function(){
        $('header').animate({
          height: '100px'
        }, 500, function(){
          $('#header-title-container').fadeIn();

          if($(window).innerWidth() > 800){
              $('#main-nav').fadeIn();
              $('#mobile-nav').addClass('nav-opened');
          } else {
              $('#mobile-nav').fadeIn().addClass('nav-opened');
          }


          $('#about').fadeIn('slow');
        });
      });



    });


    $(document).on('click', '#mobile-nav', function(){
      $('#mobile-nav-container').slideToggle();
    });



    $(document).on('click', '.nav-item', function(){
      var type = $(this).data('nav');

      if(type == 'blog'){
        return;
      }

      $('.nav-selected').removeClass('nav-selected');
      $(this).addClass('nav-selected');
      if(type == 'about'){
        $('.opened-page').removeClass('opened-page').fadeOut('fast', function(){
          $('#about').fadeIn('slow').addClass('opened-page');
        });;
      }

      if(type == 'work'){

        $('.opened-page').removeClass('opened-page').fadeOut('fast', function(){
          $('#work').fadeIn('slow').addClass('opened-page');
        });
      }


      if(type == 'contact'){
        $('.opened-page').removeClass('opened-page').fadeOut('fast', function(){
          $('#contact').fadeIn('slow').addClass('opened-page');
        });

      }


    if($('#mobile-nav-container').is(':visible')){
      $('#mobile-nav-container').slideToggle();
    }



    });



    $(document).on('mouseenter', '#page-title-navigator', function(){
      $(this).removeClass('fa-chevron-down').addClass('fa-chevron-circle-down');
    });


    $(document).on('mouseleave', '#page-title-navigator', function(){
      $(this).removeClass('fa-chevron-circle-down').addClass('fa-chevron-down')
    });





    /* -----  EVENTS FOR HOME PAGE  ------ */



    $(document).on('click', '.about-nav', function(){
      var ID = $(this).attr('id');
      var circles = $('.circle-nav');
      var order;
      var circle;
      var next;
      var prev;
      var pageToHideID;
      var pageToOpenID;
      var pageToOpen;
      for(var i = 0; i < circles.length; i++){
          if($(circles[i]).hasClass('fa-circle')){
            circle = circles[i];
            order = i;
          }
      }

      if(ID == 'about-nav-left'){
        prev = $(circle).prev();
        if(order > 0){
          pageToHideID = $(circle).attr('id');
          pageToHideID = pageToHideID.slice(0, pageToHideID.indexOf('-'));
          pageToOpenID = $(prev).attr('id');
          pageToOpenID = pageToOpenID.slice(0, pageToOpenID.indexOf('-'));
          $(circle).removeClass('fa-circle').addClass('fa-circle-o');
          $(prev).removeClass('fa-circle-o').addClass('fa-circle');


          $('#'+pageToHideID+'-container').removeClass('opened').addClass('closed-right');
          $('#'+pageToOpenID+'-container').removeClass('closed-left').addClass('opened');



        }
      } else {
        next = $(circle).next();
        if(order < 2){
          pageToHideID = $(circle).attr('id');
          pageToHideID = pageToHideID.slice(0, pageToHideID.indexOf('-'));
          pageToOpenID = $(next).attr('id');
          pageToOpenID = pageToOpenID.slice(0, pageToOpenID.indexOf('-'));
          $(circle).removeClass('fa-circle').addClass('fa-circle-o');
          $(next).removeClass('fa-circle-o').addClass('fa-circle');
          $('#'+pageToHideID+'-container').removeClass('opened').addClass('closed-left');
          $('#'+pageToOpenID+'-container').removeClass('closed-right').addClass('opened');
        }
      }

    });


    $(document).on('click', '.circle-nav', function(){
      var ID = $(this).attr('id');
      var ID = ID.slice(0, ID.indexOf('-'));
      var openedID = $('.opened').attr('id');
      var openedID = openedID.slice(0, openedID.indexOf('-'));



      if(openedID == 'what' && ID == 'who'){
        $('#'+openedID+'-circle').removeClass('fa-circle').addClass('fa-circle-o');
        $('#'+ID+'-circle').removeClass('fa-circle-o').addClass('fa-circle');
        $('#'+openedID+'-container').removeClass('opened').addClass('closed-left');
        $('#'+ID+'-container').removeClass('closed-right').addClass('opened');
      } else if(openedID == 'what' && ID == 'services'){

        $('#'+openedID+'-circle').removeClass('fa-circle').addClass('fa-circle-o');
        $('#'+ID+'-circle').removeClass('fa-circle-o').addClass('fa-circle');

        $('#who-container').removeClass('closed-right').addClass('closed-left');
        $('#'+openedID+'-container').removeClass('opened').addClass('closed-left');
        $('#'+ID+'-container').removeClass('closed-right').addClass('opened');

      } else if(openedID == 'who' && ID == 'what'){

        $('#'+openedID+'-circle').removeClass('fa-circle').addClass('fa-circle-o');
        $('#'+ID+'-circle').removeClass('fa-circle-o').addClass('fa-circle');


        $('#'+openedID+'-container').removeClass('opened').addClass('closed-right');
        $('#'+ID+'-container').removeClass('closed-left').addClass('opened');

      } else if(openedID == 'who' && ID == 'services'){

        $('#'+openedID+'-circle').removeClass('fa-circle').addClass('fa-circle-o');
        $('#'+ID+'-circle').removeClass('fa-circle-o').addClass('fa-circle');


        $('#'+openedID+'-container').removeClass('opened').addClass('closed-left');
        $('#'+ID+'-container').removeClass('closed-right').addClass('opened');

      } else if(openedID == 'services' && ID == 'what'){

        $('#'+openedID+'-circle').removeClass('fa-circle').addClass('fa-circle-o');
        $('#'+ID+'-circle').removeClass('fa-circle-o').addClass('fa-circle');

        $('#who-container').removeClass('closed-left').addClass('closed-right');
        $('#'+openedID+'-container').removeClass('opened').addClass('closed-right');
        $('#'+ID+'-container').removeClass('closed-left').addClass('opened');

      } else if(openedID == 'services' && ID == 'who'){

        $('#'+openedID+'-circle').removeClass('fa-circle').addClass('fa-circle-o');
        $('#'+ID+'-circle').removeClass('fa-circle-o').addClass('fa-circle');
        $('#'+openedID+'-container').removeClass('opened').addClass('closed-right');
        $('#'+ID+'-container').removeClass('closed-left').addClass('opened');

      }






    });




    $(document).on('click', '.work-header', function(){
      if($(this).hasClass('work-nav-selected')){
        return;
      } else {
        $('.work-nav-selected').removeClass('work-nav-selected');
        $(this).addClass('work-nav-selected');
        if($(this).attr('id') == 'current-clients-nav'){
          $('#previous-clients').removeClass('opened').addClass('closed-right');
          $('#current-clients').removeClass('closed-left').addClass('opened');
        } else {
          $('#current-clients').removeClass('opened').addClass('closed-left');
          $('#previous-clients').removeClass('closed-right').addClass('opened');
        }

      }
    });




  }

};
