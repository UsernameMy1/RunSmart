$(document).ready(function(){
	$('.carousel__inner').slick({
		prevArrow: '<button type="button" class="slick-prev"> <img src="img/slider/prev slide.png"> </button>',
		nextArrow:  '<button type="button" class="slick-next"> <img src="img/slider/next slide.png"> </button>',
		speed: 300,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: false,
					arrows: true,
					slidesToShow: 1
				}
			},
			// {
			// 	breakpoint: 600,
			// 	settings: {
			// 		slidesToShow: 1,
			// 		slidesToScroll: 2
			// 	}
			// }
		]	
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });


    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});
			