if (navigator.userAgent.match(/(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:|\bEdge\/)(\d+)/)) {
	jQuery('body').on("mousewheel", function () {
		// remove default behavior 
		event.preventDefault();

		//scroll without smoothing 
		var wheelDelta = event.wheelDelta;
		var currentScrollPosition = window.pageYOffset;
		window.scrollTo(0, currentScrollPosition - wheelDelta);
	});
}

// Menus
$(document).ready(function () {
	$('.menu-about').on('click', function () {
		$('.block-menu').addClass('active');
	});
	$('.close').on('click', function () {
		$('.block-menu').removeClass('active');
	});

	$(window).scroll(function () {
		let currentScroll = $(this).scrollTop();
		if (currentScroll > 80) {
			$('.toggle-menu, .scroll-top').addClass('active');
			$('.toggle-menu').removeClass('hidden');
			$('header .menu').removeClass('active');
		}
		else {
			$('.toggle-menu, .scroll-top').removeClass('active');
			$('.toggle-menu').addClass('hidden');
			$('header .menu').addClass('active');
		}


		let ypos = window.pageYOffset;
		$('.intro').css("height", 100 -(ypos * .1) + "vh");
		$('.intro .menu, .intro .logo-big').css("transform", "translateY(" + ypos * -.5 + "px)");

	});

	$('a[href^="#"]').click(function () {
		let target = this.hash;
		//console.log(target, $target);
		$('html, body').animate({ 'scrollTop': $(target).offset().top }), 1500;
	});
});



$('.scroll-top').click(function () {
	$('html, body').animate({ 'scrollTop': 0 }, 300);
})


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
	$("aside, .modal-backdrop, .block-menu").removeClass("active");
});

$('.toggle-menu').click(function () {
	$(".modal-backdrop, aside").addClass("active");
	$('.close').css("transform", "rotate(180deg)");
	$('.close').css("transition", ".6s");
});



// loader
function onReady(callback) {
	var intervalId = window.setInterval(function () {
		if (document.getElementsByTagName('body')[0] !== undefined) {
			window.clearInterval(intervalId);
			callback.call(this);
		}
	}, 1000);
}

function setVisible(selector, visible) {
	document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function () {
	setVisible('.wrapper', true);
	setVisible('.loading', false);
});



// scroll parallax


let didScroll = false;
let parallaxMain = document.querySelectorAll('.main');
let parallaxLogo = document.querySelectorAll('.parallax-logo');
let parallaxCards = document.querySelectorAll('.cards');

const scrollInProgress = () => {
	didScroll = true
}

const raf = () => {
	if (didScroll) {
		parallaxLogo.forEach((element, index) => {
			element.style.transform = "translateX(" + window.scrollY / 10 + "%)"
		});
		parallaxCards.forEach((element, index) => {
			element.style.transform = "translateX(" + window.scrollY / -10 + "px)"
		})
		didScroll = false;
	}
	requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress);




