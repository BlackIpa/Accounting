// set main background size to window height

function calcVH() {
	let vH = window.innerHeight;
	let welcome = document.querySelector(".welcome")
	if (window.innerHeight > 1300) {
		welcome.setAttribute("style", "height:1300px;");
	} else {	
		welcome.setAttribute("style", "height:" + vH + "px;");
		document.querySelector(".call-us").setAttribute("style", "top:" + vH*0.4 + "px;");
	};
};
calcVH();
window.addEventListener('orientationchange', () => setTimeout(calcVH,200), true);


// Scroll to top
$('.back-to-top').click(function() {
$('body,html').animate({
scrollTop : 0
}, 1000);
});

// changing background-color and font color of navbar if scrolled to main part
// Fading in/out back-to-top arrow
$(document).ready(function () {
onScroll();
if ($(this).scrollTop() >= $('#about-co').offset().top - 1) {
$('.nav-container').addClass('nav-on-scroll');
$('.nav-a').addClass('a-on-scroll');
};
if ($(this).scrollTop() >= 100) {
$('.back-to-top').fadeIn(200);
};
if ($(this).scrollTop() >= $('#about-co').offset().top / 1.9 && window.innerWidth < 680) {
$('.call-us').fadeIn(200);
};
$(window).scroll(function () {
var mainPos = $('#about-co').offset().top;
var scrollPos = $(this).scrollTop();
if (scrollPos >= mainPos - 1) {
$('.nav-container').addClass('nav-on-scroll');
$('.nav-a').addClass('a-on-scroll');
} else {
$('.nav-container').removeClass('nav-on-scroll');
$('.nav-a').removeClass('a-on-scroll');
};
if (scrollPos >= 100) {
$('.back-to-top').fadeIn(200);
} else {
$('.back-to-top').fadeOut(200);
};
if (scrollPos >= mainPos/1.9 && window.innerWidth < 680) {
$('.call-us').fadeIn(200);
} else {
$('.call-us').fadeOut(200);
};
});
});

// On nav click scrolls to correct element and adds active class - should refactor
$(document).ready(function () {
$(document).on("scroll", onScroll);
//smoothscroll
$('.nav-a').on('click', function (e) {
e.preventDefault();
$(document).off("scroll");
$('.nav-a').each(function () {
$(this).removeClass('active');
})
$(this).addClass('active');

var target = this.hash,

$target = $(target);
$('html, body').stop().animate({
'scrollTop': $target.offset().top
}, 1000, 'swing', function () {
window.location.hash = target;
$(document).on("scroll", onScroll);
});
});
});

// onScroll function changing active class for actually in-scope part of the website
function onScroll(){
var scrollPos = $(document).scrollTop();
$('.nav-a').each(function () {
var refElement = $($(this).attr("href"));
if (refElement.position().top <= scrollPos) {
$('.nav-a').removeClass("active");
$(this).addClass("active");
} else {
$(this).removeClass("active");
};
});
};

$(function () {
	$('#contactform').on('submit', function (e) {
		console.log('been here');
		e.preventDefault();
		
		$.ajax({
			type: 'post',
			url: 'res/send_message.php',
			data: $('#contactform').serialize(),
			success: function() {
				messageSend();
			}
		});
	});
});

function messageSend(){
	const formTitle = document.getElementById("form-title");
	let node = document.createElement("div")
	let textnode = document.createTextNode("Wiadomość wysłana");
	node.className = 'message-send';
	node.appendChild(textnode);
	formTitle.appendChild(node);
	document.querySelector('#contactform').reset();
	setTimeout(function() {
    formTitle.removeChild(node);
	}, 5000);
};