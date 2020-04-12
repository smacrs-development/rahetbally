$(document).ready(function() {

  //menu in responsive
  $(".btn-hamburger").click(function() {
    $(".slideoutMenu ").toggleClass('menu-open');
    $(".slideout-panel").toggleClass('panel-open');
  });
  $(".btn-menu-close").click(function() {
    $(".slideoutMenu ").removeClass('menu-open');
    $(".slideout-panel").removeClass('panel-open');
  });




    //search 
    $(".btn-search").click(function() {
        debugger
        document.getElementById("searchInputOverlay").style.display = "block";
        // $('#searchInputOverlay').slideDown("slow");
    });
    $(".search-components-overlay-close-holder").click(function() {
        // document.getElementById("searchInputOverlay").style.display = "none";    
        $('#searchInputOverlay').slideToggle("slow");
    });


    //slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        video:true,
        videoWidth: true, 
        videoHeight: 240,
        navText: [
          "<i class='fas fa-chevron-left'></i>",
          "<i class='fas fa-chevron-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      })

      //scroll top
      var btn = $('.scrollToTop');
      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });
      
      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });

});