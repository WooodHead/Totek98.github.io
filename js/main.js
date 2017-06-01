 $(window).on('load', function () {
    $('#cos2').fadeOut();
	$('#cos').delay(350).fadeOut('slow'); 
	$('body').delay(350).css({'overflow':'visible'}); 
 });
Tippy('.tippy', {
	position: 'bottom',
	animation: 'scale',
	duration: 1000,
	arrow: true
});
Tippy('#zdj', {
  html: '#opis',
  arrow: true,
  animation: 'fade'
})
Tippy('#zdj2', {
  html: '#opis2',
  arrow: true,
  animation: 'fade'
})
Tippy('#zdj3', {
  html: '#opis3',
  arrow: true,
  animation: 'fade'
})
Tippy('#zdj4', {
  html: '#opis4',
  arrow: true,
  animation: 'fade'
})
Tippy('#zdj5', {
  html: '#opis5',
  arrow: true,
  animation: 'fade'
})
Tippy('#zdj6', {
  html: '#opis6',
  arrow: true,
  animation: 'fade'
})
Tippy('#zdj7', {
  html: '#opis7',
  arrow: true,
  animation: 'fade'
})
Tippy('#zdj8', {
  html: '#opis8',
  arrow: true,
  animation: 'fade'
})
Tippy('#zdj9', {
  html: '#opis9',
  arrow: true,
  animation: 'fade'
})
Tippy('#zdj11', {
  html: '#opis11',
  arrow: true,
  animation: 'fade'
})
Tippy('#zdj12', {
  html: '#opis12',
  arrow: true,
  animation: 'fade'
})
$(function(){
	$(".ele1").typed({
		strings: ["Jan ^1000 Kowalski"],
		typeSpeed: 100,
		showCursor: false
	});
});
$(function(){
	$(".ele2").typed({
		strings: ["Junior ^1000 <span class='red'>Web</span> ^1000 Developer"],
		typeSpeed: 100,
		showCursor: false
	});
});
$(function(){
	$(".ele3").typed({
		strings: ["<span class='blue'>Bla bla bla...</span>"],
		typeSpeed: 100,
		showCursor: false
	});
});
$.scrollTo(0);
$('#kontakt').click(function() { $.scrollTo($('#contact'), 500); });
$('.up').click(function() { $.scrollTo($('body'), 1000); });
$(window).scroll(function()
{
	if($(this).scrollTop()>300) $('.up').fadeIn('slow');
	else $('.up').fadeOut('slow');		
});

var jumpsize = 10, // %
  body = $("body");
(container = $("#bar")), (bar = container.children("div")), (topcnt = function(
  px
) {
  return 100 * px / container.width();
}), (set = function(pcnt) {
  bar.css({ width: pcnt + "%" });
});

$(window).scroll(function()
{
	var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
	set(topcnt(bar.width()) - jumpsize);
	if($(this).scrollTop())
	{
		set(topcnt(bar.width()) + jumpsize);
	}
	if(scrollBottom)
	{
		set(topcnt(bar.width()) - jumpsize);
	}
});
set(40);