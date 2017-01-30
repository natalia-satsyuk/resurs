$(document).ready(function(){ 
	var screenWidth = $(document).width(),
		activeTab = $("ul.customers-logo-list").first();

	// slide-menu
	$(".pop-up-menu").click(function() {
		$(".nav-list").slideToggle(400);
	});

	// pop-up certificate
	$(".widen").click(function(){
		$(".container-pop-up").fadeIn(400);
	});

	$(".close-image").click(function(){
		$(".container-pop-up").fadeOut(300);
	});

	// slider
	$(".banner-slider-wrap").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480, 
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$(".work-slider-wrap").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000,
	});

	//active-class
	$(".choose-active").on('click', function(event) {
		$(this).addClass("active").siblings().removeClass("active");

		activeTab = $(event.target).find('ul.customers-logo-list');
		var shownContent = activeTab.clone();
		$(".customers-logo-container").html('');
		if (screenWidth > 768){
			$(".customers-logo-container").append(shownContent.css("display", "block")[0]);
		} else {
			$(".customers-logo-container").append(shownContent[0]);
			activeTab.slideToggle();
			$(event.target).siblings().find('ul.customers-logo-list').slideUp();
		}
	});


	$(window).on("resize", function (event) {
		screenWidth = $(document).width();
		if (screenWidth > 768) {
			$(".customers-logo-container").css("display", "block").find(".customers-logo-list").css("display", "block");	
			$('ul.customers-list ul.customers-logo-list').css("display", "none");
		} else {
			activeTab.css("display", "block");
			$(".customers-logo-container").css("display", "none");
		}
	});

	// accordeon
	activeTab.clone().appendTo(".customers-logo-container");
	if ($(document).width() > 768) {
		$(".customers-logo-container").find(".customers-logo-list").css("display", "block");
	} else {
		$(".customers-logo-container").css("display", "none");	
	}
});