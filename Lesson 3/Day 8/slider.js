	// function Slider(direction) {
	// 	this.direction = direction;
	// }

	// Slider.prototype.move = function() {
	// 	console.log('moving ' + this.direction);
	// }

	// var slider = new Slider('forward');	
	// slider.move();

	// var slider2 = new Slider('backward');	
	// slider2.move();

function Slider( container, nav ) {
	this.container = container;
	this.nav = nav.show();

	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs[0].width; //980
	this.imgsLen = this.imgs.length;

	this.current = 0;
}

Slider.prototype.transition = function( coords ) {
	this.container.animate({
		'margin-left': coords || -( this.current * this.imgWidth )
	});
};

Slider.prototype.setCoordinates = function( dir ) {
	var pos = this.current;
	pos += ( ~~( dir === 'next' ) || -1 ); // Casting the dir and checking against if it's truthy or falsy, i.e 1 or 0. 
																				// [Being cast as an integer value hence the ~~.]
	this.current = ( pos < 0 )  ? this.imgsLen - 1 : pos % this.imgsLen;
	
	return pos;
}; 

	// ( dir === next) ? this.current++ : this.current--

	// if ( dir === 'next' ) {
	// 	this.current++;
	// } else {
	// 	this.current--;
	// }

