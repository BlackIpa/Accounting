// adding active class to navigation elements
$(document).ready(function () {
$('.nav-a').click(function(event) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
if (target.length) {
event.preventDefault();
$('html, body').animate({
scrollTop: target.offset().top
}, 1000);
$('.nav-a').removeClass('active');
$(this).addClass('active');
return false;
}
})
});

// changing background-color and color of navbar if scrolled to main part
$(document).ready(function () {
	$(window).scroll(function () {
		var mainPos = $('#about-co').offset().top;
		var scrollPos = $(this).scrollTop();
		if (scrollPos >= mainPos - 1) {
			$('.nav-container').addClass('nav-on-scroll');
			$('.nav-a').addClass('a-on-scroll');
		}else {
			$('.nav-container').removeClass('nav-on-scroll');
			$('.nav-a').removeClass('a-on-scroll');
		}
	})
});


