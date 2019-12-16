$(document).ready(function() {	
	/* ---------- Menu --------- */
	$(window).scroll(function(){		
			let currentScroll = $(this).scrollTop();
			if(currentScroll > 175){
				$('header .i-menu').addClass('active');
        $('header .menu').removeClass('active');
        $(aside).addClass('active');
			}
			else{
				$('header .i-menu').removeClass('active');
				$('header .menu').addClass('active');
        $(aside).removeClass('active');
			}
			if(stopAnimation == true){
				if(currentScroll > skills){
					$('.col-1, .col-2, .col-3').each(function(j){
						var $this = $(this);
						setTimeout(function () {
							$this.addClass('unhide'); 
						}, 200 * j );
					});
					stopAnimation = false;
				}
			}
	});
	/* ------- End Menu ------- */
	
	/* ------- Scroll ------- */
	$('a[href^="#"]').click(function(){
		let target = this.hash,
		$target = $(target).offset().top;
		//console.log(target, $target);
		$('html, body').animate({'scrollTop': $target}), 1500;
	});
	/* ------- End Scroll ------- */
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

const canvas = document.querySelector('.js-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let mouseX = width / 2;
let mouseY = height / 2;

let circle = {
  radius: 10,
  lastX: mouseX,
  lastY: mouseY };


const elems = [...document.querySelectorAll('a, button, ion-icon')];

function onResize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

function render() {
  circle.lastX = lerp(circle.lastX, mouseX, 0.25);
  circle.lastY = lerp(circle.lastY, mouseY, 0.25);

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.arc(circle.lastX, circle.lastY, circle.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  requestAnimationFrame(render);
}

function init() {
  requestAnimationFrame(render);

  window.addEventListener('mousemove', function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  window.addEventListener('resize', onResize, false);

  let tween = TweenMax.to(circle, 0.25, {
    radius: circle.radius * 3,
    ease: Power1.easeInOut,
    paused: true });


  elems.forEach(el => {
    el.addEventListener('mouseenter', () => {
      tween.play();
    }, false);
    el.addEventListener('mouseleave', () => {
      tween.reverse();
    }, false);
  });
}

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

init();