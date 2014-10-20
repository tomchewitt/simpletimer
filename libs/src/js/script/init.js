// *****************************************************************
// TIMER MODULE
// *****************************************************************
Timer = (function($) {
	
	var counting;
	var hours = 0;
	var minutes = 0;
	var seconds = 0;
	var miliseconds = 0;

	// constructor
	var Timer = function() {

	}

	// private

	function update() {
		miliseconds++;
		if (miliseconds >= 100) {
			miliseconds = 0;
			seconds++;
		    if (seconds >= 60) {
		        seconds = 0;
		        minutes++;
		        if (minutes >= 60) {
		            minutes = 0;
		            hours++;
		        }
		    }
		}    
	    	
	    updateTimer();

	}

	function updateTimer() {
		$('.timer span').text((hours ? (hours > 9 ? hours : '0' + hours) : '00') + ':' + 
	    	(minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + ':' + 
	    	(seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00') + ':' +
	    	(miliseconds > 9 ? miliseconds : '0' + miliseconds));
	}

	// public
	Timer.start = function() {
		counting = setInterval(function(){update()}, 10);
	}

	Timer.stop = function() {
		clearInterval(counting);
	}

	Timer.reset = function() {
		hours = 0;
		minutes = 0;
		seconds = 0;
		miliseconds = 0;

		updateTimer();
	}

	Timer.lap = function() {
		var laptime = $('.timer span').text();
		var lapint = $('.laps div').length + 1;
		$('.laps').append('<div class="laptime">' + lapint + ' | ' + laptime + '</div>');
	}

	return Timer;

})(jQuery);


// *****************************************************************
// INIT
// *****************************************************************
$(document).ready(function() {
	
	// setup flowtype	
	$('.timer').flowtype();

	// start/stop timer
	$('.timer-controls .startstop').click(function() {
		if ($(this).hasClass('started')) {
			Timer.stop();
			$(this).removeClass('started');
		} else {
			Timer.start();
			$(this).addClass('started');
		}
	});

	// reset
	$('.timer-controls .reset').click(function() {
		Timer.reset();
	});
	
	// lap
	$('.timer-controls .lap').click(function() {
		Timer.lap();
	});

	// clear
	$('.timer-controls .clear').click(function() {
		$('.laps').html('');
	});
});

