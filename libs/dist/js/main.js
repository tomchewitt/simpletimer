/*
 *  simpletimer - v0.1.0
 *  Simple Timer / Stopclock | An @tomchewitt Experiment
 *
 *  Made by 
 *  Under BSD-2-Clause License
 */
'use strict';

// vars
var secondsUnits = 0;
var secondsTens = 0;
var minutesUnits = 0;
var minutesTens = 0;
var hoursUnits = 0;
var hoursTens = 0;

// intervals
var countMiliseconds;
var countSecondsUnits;
var countSecondsTens;
var countMinutesUnits;
var countMinutesTens;
var countHoursUnits;
var countHoursTens;


function updateMiliseconds() {
	var miliseconds = parseInt($('.miliseconds').text(), 10);
    if (miliseconds === 99) {
    	updateTime('secondsUnits', 9, '.seconds .units');
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

	// CONTROL FUNCTIONS
	$('.start-stop').click(function() {
			// update miliseconds
			countMiliseconds = setInterval(updateMiliseconds, 1);
			// update seconds
			//countSecondsUnits = setInterval(function() { updateTime('secondsUnits', 9, '.seconds .units') }, 1000);
			countSecondsTens = setInterval(function() { updateTime('secondsTens', 5, '.seconds .tens') }, 10000);
			// update minutes
			countMinutesUnits = setInterval(function() { updateTime('minutesUnits', 9, '.minutes .units') }, 60000);
			countMinutesTens = setInterval(function() { updateTime('minutesTens', 5, '.minutes .tens') }, 600000);
			// update hours
			countHoursUnits = setInterval(function() { updateTime('hoursUnits', 9, '.hours .units') }, 3600000);
			countHoursTens = setInterval(function() { updateTime('hoursTens', 5, '.hours .tens') }, 356400000);		
	});

	$('.stop').click(function() {
		clearInterval(countMiliseconds);
		clearInterval(countSecondsUnits);
		clearInterval(countSecondsTens);
		clearInterval(countMinutesUnits);
		clearInterval(countMinutesTens);
		clearInterval(countHoursUnits);
		clearInterval(countHoursTens);
	});


});




