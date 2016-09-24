$(document).ready(function() {

	$(".tab-wrapper .tab").click(function() {
  	$(".tab-wrapper .tab").removeClass("active-tab").eq( $(this).index() ).addClass("active-tab");
  	$(".tab-item").hide().eq( $(this).index() ).fadeIn();
	});
	
	$(".carousel").owlCarousel({
		
		items : 1,
		nav : true,
		loop : true,
		navText : ""
		
	});
	
	$(".header-center h1, .header-center p, .header-center a, .section-1 .item-wrap").animated("fadeInUp", "fadeInUp");
	$(".section-2 .img-wrap img").animated("fadeInLeft", "fadeInLeft");
	$(".section-3 .img-wrap .map").animated("fadeInRight", "fadeInRight");
	$(".section-3 .img-wrap .dot").animated("bounceIn", "bounceIn");
	
	
	
	$(window).scroll( function() {
		
		var scrollMnu = $(this).scrollTop();
		
		if(scrollMnu > 20) {
			$(".top-line").addClass('scroll');
		} else {
			$(".top-line").removeClass('scroll');
		};
		
	});
	
	$('.toggle-mnu').on('click', function(e){
		e.preventDefault();
		$(this).addClass('open');
		$('.vert-mnu').toggleClass('open');

		if ($('.vert-mnu').hasClass('open')) {
			$('#close').on('click', function(e){
				e.preventDefault();
				$('.vert-mnu').removeClass('open');
			});
		}
	});
	
	
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	

});




