$(document).ready(function() {


    // For the sticky navigation
    $('.js--section-features').waypoint(function(direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    })


    // Scroll on buttons

    $('.js--scroll-to-plans').click(function() {

        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);

    });

    $('.js--scroll-to-start').click(function() {

        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });


    // Navigation scroll

    $(document).ready(function(){
        $("a").on('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
              window.location.hash = hash;
            });
          } 
        });
      });


    // Mobile navi

    $('.js--nav-icon').click(function() {
        let nav = $('.js--main-nav');
        let icon = $('.js--nav-icon ion-icon');

        nav.slideToggle(200);

        if (icon[0].name === "menu") {
            icon.attr('name', 'close');
        } else {
            icon.attr('name', 'menu');
        }
    })
});