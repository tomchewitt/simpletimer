/*
 *  simpletimer - v0.1.0
 *  Simple Timer / Stopclock | An @tomchewitt Experiment
 *
 *  Made by 
 *  Under BSD-2-Clause License
 */
'use strict';

var secondsUnits = 0;
var secondsTens = 0;
var minutesUnits = 0;
var minutesTens = 0;
var hoursUnits = 0;
var hoursTens = 0;

// start/stop toggle
var startStop = true;

function updateMiliseconds() {
	var miliseconds = parseInt($('.miliseconds').text(), 10);
    if (miliseconds === 99) {
    	miliseconds = 0;
    } else {
    	miliseconds++;
    }
    $('.miliseconds').text(miliseconds);
}

function updateTime(time, timeInt, timeUnit) {
	// reset elms
	$(timeUnit + '.bottom').text(window[time]);
	$(timeUnit + '.top').css({top:'-300px', opacity:0});
	$(timeUnit + '.bottom').css({top:0, opacity:1});
	// add second and set new time
	if (window[time] == timeInt) {
		window[time] = 0;
	} else {
		window[time]++;
	}
	
	$(timeUnit + '.top').text(window[time]);
	TweenMax.to(timeUnit + '.top', 0.3, {top:0, opacity:1});
	TweenMax.to(timeUnit + '.bottom', 0.2, {top:'300px', opacity:0});
}

// INIT
$(document).ready(function() {



	// setup flowtype
	$('body').flowtype();

	// initial number setup
	$('.seconds .units').text(secondsUnits);
	$('.seconds .tens').text(secondsTens);
	$('.minutes .units').text(minutesUnits);
	$('.minutes .tens').text(minutesTens);
	$('.hours .units').text(hoursUnits);
	$('.hours .tens').text(hoursTens);


	// CONTROL FUNCTIONS
	$('.start-stop').click(function() {
		if (startStop) {

			startStop = false;
			$('.start-stop').text('Stop');

			// update miliseconds
			var countMiliseconds = setInterval(updateMiliseconds, 1);
			// update seconds
			var countSecondsUnits = setInterval(function() { updateTime('secondsUnits', 9, '.seconds .units') }, 1000);
			var countSecondsTens = setInterval(function() { updateTime('secondsTens', 5, '.seconds .tens') }, 10000);
			// update minutes
			var countMinutesUnits = setInterval(function() { updateTime('minutesUnits', 9, '.minutes .units') }, 60000);
			var countMinutesTens = setInterval(function() { updateTime('minutesTens', 5, '.minutes .tens') }, 600000);
			// update hours
			var countHoursUnits = setInterval(function() { updateTime('hoursUnits', 9, '.hours .units') }, 3600000);
			var countHoursTens = setInterval(function() { updateTime('hoursTens', 5, '.hours .tens') }, 356400000);
		} else {
			startStop = false;
			$('.start-stop').text('Start');

			// Clear intervals
			clearInterval(countMiliseconds);
			clearInterval(countSecondsUnits);
			clearInterval(countSecondsTens);
			clearInterval(countMinutesUnits);
			clearInterval(countMinutesTens);
			clearInterval(countHoursUnits);
			clearInterval(countHoursTens);
		}


		
	});


});




