(function($) {

	var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
			imgs = sliderUL.find('img'),
			imgWidth = imgs[0].width, // 980
			imgsLen = imgs.length, // 4
			current = 1,
			totalImgsWidth = imgsLen * imgWidth; //3920 ... 4 x 980px width image  

	$('#slider-nav').show().find('button').on('click', function() {
		var direction = $(this).data('dir'),
				loc = imgWidth;
		//update current value
		( direction === 'next' ) ? ++current : --current; // if yes{do stuff}: no{do stuff}
		// if (direction == 'next') {
		// 	current += 1; // 2
		// }
		// else {
		// 	current -= 1; // 0
		// }

		// if first image
		// current = 0
		if (current === 0 ) {
			current = imgsLen;
			loc = -totalImgsWidth + imgWidth;
			direction == 'next';
		}	else if ( current - 1 === imgsLen ) { // Are we at end? Should we reset?
			current	= 1;
			loc = 0;
		}

		transition(sliderUL, loc, direction);
		
	});

	function transition( container, loc, direction ) {
		var unit; // -= +=

		if ( direction && loc !== 0 ) {
			unit = ( direction === 'next' ) ? '-=' : '+=';
		}

		container.animate({
			'margin-left': unit ? ( unit + loc ) : loc
		});
	}

})(jQuery);