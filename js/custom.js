$(document).ready(function() {
    
 var owl1=$("#owl-demo1");
 var owl2=$("#owl-demo2");
 var owl3=$("#owl-demo3");
 var owl4=$("#owl-demo4");
    
  $('#owl-demo1').owlCarousel({
    loop:true,
    items : 7,
    slideSpeed : 2000,
    nav: false,
    autoplay: true,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        900:{
            items:5,
            nav:false
        },
        1000:{
            items:7,
            nav:false
        }
    }
  });
   
  
  $('#owl-demo2').owlCarousel({
    loop:true,
    items : 4,
    slideSpeed : 2000,
    nav: false,
    autoplay: true,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
          items:1,
          nav:false
      },
      900:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:false
      }
    }
  });
  
  $('.owl-next').click(function() {
    owl2.trigger('next.owl.carousel');
  });
  $('.owl-prev').click(function() {
    owl2.trigger('prev.owl.carousel');
  });



  $('#owl-demo3').owlCarousel({
    loop:true,
    items : 4,
    slideSpeed : 2000,
    nav: false,
    autoplay: true,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        900:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false
        }
    }
  });
  
  $('.owl-next2').click(function() {
    owl3.trigger('next.owl.carousel');
  });
  $('.owl-prev2').click(function() {
    owl3.trigger('prev.owl.carousel');
  });


  


    
});
/*******************************************************************/

$(document).ready(function() {

  // .scroll() creates an event when the user scrolls
  $(window).scroll(function() {

    // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
    var scroll = $(window).scrollTop();

    var objectSelect = $('#gallery');

    // .offset() retrieves current position of element relative to document
    var objectPosition = objectSelect.offset().top;

    if (scroll > objectPosition) {
      $('nav').addClass('displayNav');
    } else {
      $('nav').removeClass('displayNav');
    }
  });
});

/*****************************************************************************/
$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 1; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: false,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    center: true,  
    items : slidesPerPage,
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    autoplay: true,
    autoplayHoverPause: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  $('.owl-next3').click(function() {
    sync2.trigger('next.owl.carousel');
  });
  $('.owl-prev3').click(function() {
    sync2.trigger('prev.owl.carousel');
  });

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});



