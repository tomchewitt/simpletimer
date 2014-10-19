// *****************************************************************
// TIMER MODULE
// *****************************************************************
var timer = (function() {
	
	var counting;

	// constructor
	var timer = function(elm, options) {
		elm = elm || {};
		options = options || {};

		// $hours = $('.timer .hours');
		// $minutes = $('.timer .minutes');
		// $seconds = $('.timer .seconds');
		// $miliseconds = $('.timer .miliseconds');
	}

	// private

	function update() {
		if ($('.timer .miliseconds').val() == 99) {
			$('.timer .miliseconds').val('00');

			if ($('.timer .seconds').val() == 59) {
				$('.timer .seconds').val('00');

				if ($('.timer .minutes').val() == 59) {
					$('.timer .minutes').val('00');

					$('.timer .hours').val($('.timer .hours').val() + 1);

				} else {
					$('.timer .minutes').val($('.timer .minutes').val() + 1);
				}
			} else {
				$('.timer .seconds').val($('.timer .seconds').val() + 1);
			}
		} else {
			$('.timer .miliseconds').val(parseInt($('.timer .miliseconds').val() + 1));
		}
	}

	// public
	timer.start = function() {
		counting = setInterval(function(){update()}, 10);
	}

	timer.stop = function() {

	}

	timer.reset = function() {

	}

	timer.lap = function() {

	}

	return timer;

});


// *****************************************************************
// INIT
// *****************************************************************
$(document).ready(function() {
	
	// setup flowtype	
	$('.timer').flowtype();

	// setup timer
	var simpletimer = new timer($('.timer'), {controls: $('.timer-controls')});

	// start timer
	// simpletimer.start();

});

