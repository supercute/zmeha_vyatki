$(document).ready(function(){
	$('.reviews-slider').slick({
		arrows: true,
		infinite: true,
		slidesToShow: 1,
  		slidesToScroll: 1,
		nextArrow: '<img src="img/icons/arrow-next.png" alt="" class="arrow-next">',
        prevArrow: '<img src="img/icons/arrow-prev.png" alt="" class="arrow-prev">'
	});
});
