$(document).ready(function($) {
	$('.slider').unslider({
		animation:'fade',
		autoplay:true,
		nav:true,
		arrows:false,
		delay:4000,
		speed:1000
	});
});

// $(document).ready(function( ){
// 	$("#menu").on("click","a", function( event ){
// 		event.preventDefault( );
// 		var id = $( this ).attr( 'href' ),
// 			top = $( id ).offset( ).top;
// 		$( 'body,html' ). animate( {scrollTop: top}, 1500 );
// 	});
// });

function setEqualHeight(columns) {
	var tallestcolumn = 0;
	columns.each( function() {
		currentHeight = $(this).height();
		if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } );
		columns.height(tallestcolumn);
	}
$(document).ready(function() { setEqualHeight($(".item h3")); });

$(document).ready(function(){
	var $head = $(".header-menu");
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 100 && $head.hasClass("default") ){
			$head.removeClass("default").addClass("thing");
		} else if($(this).scrollTop() <= 100 && $head.hasClass("thing")) {
			$head.removeClass("thing").addClass("default");
		}
	});
});
