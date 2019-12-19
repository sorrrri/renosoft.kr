'use strict';

// scroll parallax
var didScroll = false;
var parallaxMain = document.querySelectorAll('.main');
var parallaxCi = document.querySelectorAll('.ci');
var parallaxCards = document.querySelectorAll('.cards');

var scrollInProgress = function scrollInProgress() {
	didScroll = true;
};

var raf = function raf() {
	if (didScroll) {
		parallaxMain.forEach(function (element, index) {
			element.style.filter = "blur(" + window.scrollY / 30 + "px)";
		});
		parallaxCi.forEach(function (element, index) {
			element.style.transform = "translateX(" + window.scrollY / -20 + "%)";
		});
		parallaxCards.forEach(function (element, index) {
			element.style.transform = "translateX(" + window.scrollY / -10 + "px)";
		});
		didScroll = false;
	}
	requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress);

// menu
$(document).ready(function () {
	$(window).scroll(function () {
		var currentScroll = $(this).scrollTop();
		if (currentScroll > 100) {
			$('header .i-menu').addClass('active');
			$('header .menu').removeClass('active');
		} else {
			$('header .i-menu').removeClass('active');
			$('header .menu').addClass('active');
		}
	});

	$('a[href^="#"]').click(function () {
		var target = this.hash,
		    $target = $(target).offset().top;
		//console.log(target, $target);
		$('html, body').animate({ 'scrollTop': $target }), 1500;
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

$(".close").on("click", function () {
	$("aside, .modal-backdrop").removeClass("active");
});

$('.i-menu').click(function () {
	$(".modal-backdrop").addClass("active");
	$('aside').addClass('active');
	$('.close').css("transform", "rotate(180deg)");
	$('.close').css("transition", ".6s");
});

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