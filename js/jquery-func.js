jQuery(function ($) {
   $(document).ready(function () {


  $(".col_back-tel a").click(function () {
    yaCounter25749713.reachGoal('callact');
  return true;
  });


  //Menu button on click event
  var click = 1;
  function overfl() {
    if (click==1) {
      $("body").css("overflow","hidden");
      click+=1;
    } else {
      $("body").css("overflow","auto");
      click-=1;
    }
    console.log(click);
  }
  
  $('.navbar-fixed-top .mobile-nav-button, .navbar-fixed-top .mobile-menu ul li a').on('click', function() {
    
    // Toggles a class on the menu button to transform the burger menu into a cross
    $( ".navbar-fixed-top .mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
    $( ".navbar-fixed-top .mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
    $( ".navbar-fixed-top .mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  
    
    // Toggles a class that slides the menu into view on the screen
    $('.navbar-fixed-top .mobile-menu').toggleClass('mobile-menu--open');

    overfl();

  }); 

  $(document).mouseup(function (e) {
    var elem = $(".mobile-menu"); 
      if ($(".mobile-menu").hasClass("mobile-menu--open")) {
        if(e.target!=elem[0]&&!elem.has(e.target).length){ 
          elem.removeClass('mobile-menu--open');
          overfl();
        }
      }
  });


  $('.header_nav .mobile-nav-button, .header_nav .mobile-menu ul li a').on('click', function() {
    // Toggles a class on the menu button to transform the burger menu into a cross
    $( ".header_nav .mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
    $( ".header_nav .mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
    $( ".header_nav .mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  
    
    // Toggles a class that slides the menu into view on the screen
    $('.header_nav .mobile-menu').toggleClass('mobile-menu--open');
   
    overfl();
  }); 

    if ($(window).width()<1000) {
      $(".container-price").addClass("container-fluid");
      $(".container-price").removeClass("container");
    }

  $(window).resize(function(){
    if ($(window).width()>1000) {
      $(".container-price").removeClass("container-fluid");
      $(".container-price").addClass("container");
    } else {
      $(".container-price").addClass("container-fluid");
      $(".container-price").removeClass("container");
    }
    if ($(window).width()<1185) {
      $(".greywrap__line-1").addClass("clearfix");
    } else if ($(window).width()>=1185){
      $(".greywrap__line-1").removeClass("clearfix");
    }
  });

  jQuery("a.smoothScroll").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top-50;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
  
  $(".mask").hover(function () {
    $(this).toggleClass("new_portfolio-active");
  })

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Спасибо за заявку, скоромы мы с вами свяжемся");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  

    $(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
      $('#fixed_nav').addClass("navbar-fixed-top-of");
    } else {
      $("#fixed_nav").removeClass("navbar-fixed-top-of");
    };
   });
});
});