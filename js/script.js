
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

$(".close").on("click", function () {
  $("aside, .modal-backdrop").removeClass("active");
});

$('.i-menu').click(function () {
  $(".modal-backdrop").addClass("active");
  $('aside').addClass('active');
  $('.close').css("transform", "rotate(180deg)");
  $('.close').css("transition", ".6s");
});
