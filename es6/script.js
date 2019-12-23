

// menu
$(document).ready(function() {	
	$(window).scroll(function(){		
			let currentScroll = $(this).scrollTop();
			if(currentScroll > 100){
				$('header .i-menu').addClass('active');
        $('header .menu').removeClass('active');
			}
			else{
				$('header .i-menu').removeClass('active');
				$('header .menu').addClass('active');
			}
	});
	
	$('a[href^="#"]').click(function(){
		let target = this.hash,
		$target = $(target).offset().top;
		//console.log(target, $target);
		$('html, body').animate({'scrollTop': $target}), 1500;
	});
});



// Modal
function modal(type) {
  $(".modal-backdrop").addClass("active");
  if (type == "aside") {
    $("aside").toggleClass("active");
  } else if (type == "timeline") {
    $(".modal-timeline").toggleClass("active");
  }
}

$(".modal-backdrop").on("click", function () {
  $(".modal-backdrop, aside, .modal").removeClass("active");
});

$(".close, aside a").on("click", function () {
  $("aside, .modal-backdrop").removeClass("active");
});

$('.i-menu').click(function () {
  $(".modal-backdrop").addClass("active");
  $('aside').addClass('active');
  $('.close').css("transform", "rotate(180deg)");
  $('.close').css("transition", ".6s");
});



// scroll parallax

var windowWidth = $(window).width();
if (windowWidth > 990) {
	let didScroll = false;
	let parallaxMain = document.querySelectorAll('.main');
	let parallaxLogo = document.querySelectorAll('.parallax-logo');
	let parallaxCi = document.querySelectorAll('.ci');
	let parallaxCards = document.querySelectorAll('.cards');
	
	const scrollInProgress = () => {
		didScroll = true
	}
	
	const raf = () => {
		if (didScroll) {
			parallaxMain.forEach((element, index) => {
				element.style.filter = "blur(" + window.scrollY / 30 + "px)"
			});
			parallaxLogo.forEach((element, index) => {
				element.style.transform = "translateX(" + window.scrollY / 10 + "%)"
			});
			parallaxCi.forEach((element, index) => {
				element.style.transform = "translateY(" + window.scrollY / -8 + "%)"
			});
			parallaxCards.forEach((element, index) => {
				element.style.transform = "translateX(" + window.scrollY / -10 + "px)"
			})
			didScroll = false;
		}
		requestAnimationFrame(raf);
	}
	
	
	requestAnimationFrame(raf);
	window.addEventListener('scroll', scrollInProgress)
	
}