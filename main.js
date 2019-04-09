// VARIABLES 
let hours = 0;
let minutes = 0;
let seconds = 0;
let time = 0;
let sec = 0;
let min = 0;
let hr = 0;
let diff = 0;
let counter = 0;
let repeat;
let repeat2;
let isPaused = false;

// FORMATTING THE USER INPUT AND DISPLAYING THE CLOCK
function setup(){

	var hours = document.getElementById("hoursInput").value;
	
		if(hours < 0){
			hours = "";
			document.getElementById("hour").innerHTML = "00";
			document.getElementById("hoursInput").placeholder = "hours";
			document.getElementById("hoursInput").value = "";
			alert("Please enter only positiv numbers");
		}
		else if(hours == ""){
			document.getElementById("hour").innerHTML = "00";
		}
		else if(hours == 0){
			document.getElementById("hour").innerHTML = "00";	
		}
		else if(hours < 10){
			document.getElementById("hour").innerHTML = "0"+hours;
		}
		else{
			document.getElementById("hour").innerHTML = hours;
		}
		hr = hours;

	var minutes = document.getElementById("minutesInput").value;
		if(minutes < 0){
			minutes = "";
			document.getElementById("minute").innerHTML = "00";
			document.getElementById("minutesInput").placeholder = "minutes";
			document.getElementById("minutesInput").value = "";
			alert("Please enter only positiv numbers");
		}
		else if(minutes == ""){
			document.getElementById("minute").innerHTML = "00";
		}
		else if(minutes == 0){
			document.getElementById("minute").innerHTML = "00";	
		}
		else if(minutes < 10){
		document.getElementById("minute").innerHTML = "0" +minutes;
		}
		else{
			document.getElementById("minute").innerHTML = minutes;
		}
		min = minutes;

	var seconds = document.getElementById("secondsInput").value;
		if(seconds < 0){
			seconds = "";
			document.getElementById("second").innerHTML = "00";
			document.getElementById("secondsInput").placeholder = "seconds";
			document.getElementById("secondsInput").value = "";
			alert("Please enter only positiv numbers");
		}
		else if(seconds == ""){
			document.getElementById("second").innerHTML = "0"+0;
		}
		else if(seconds < 10){
		document.getElementById("second").innerHTML = "0" +seconds;
		}
		else{
			document.getElementById("second").innerHTML = seconds;
		}
		sec = seconds;
	convertInputs();
	
}

// STARTING THE COUNT DOWN 
function start(){
	if(hr == 0 && min  == 0 && sec == 0){
		
	}
	else{
		repeat = setInterval(function(){ countDown() },1000);
		repeat2 = setInterval(function(){ display() }, 3)
		document.getElementById("start").value = "start";
		document.getElementById("start").disabled = "true";
		document.getElementById("pause").disabled = "";
	}
}

// ACTUAL COUNT DOWN FUNCTION
function countDown(){

	// DECREMENT MINUTES
	if(diff == time){
		diff = diff - 60;
		counter++;
		min = min - 1; 
	}
	
	// DECREMENT HOURS
	if((counter / 60) == 0 ){
		hr  = (hr - 1);
	}

	// DECREMENT SECONDS
	time = time -1;
	//console.log(time);
	
	// STOP EVERYTHING WHEN THE TIME IS ZERO
	if(time == 0){
		 timesUp();
		 }
}

// DISPLAYING THE RUNNING COUNTDOWN
function display(){
		
	//Number of minutes based on the total number of seconds
	let min = Math.floor(((time / 60) % 60));
	//Number of hours based on the total number of seconds
	let hr = Math.floor(time / 3600);
	//Number of seconds based on the total number of seconds
	let sec = (time % 60);
	
	//DISPLAYING SECONDS UNDER 10
	if(sec <= 9){
		document.getElementById("second").innerHTML =  "0"+ sec;
	}
	
	//DISPLAYING SECONDS OVER 10
	if(sec >= 10){
		document.getElementById("second").innerHTML = sec;
	}
	
	//DISPLAYING MINUTES UNDER 10
	if(min <= 9 ){
		document.getElementById("minute").innerHTML = "0" +min;
	}
	
	//DISPLAYING MINUTES OVER 10
	if(min >= 10){
		document.getElementById("minute").innerHTML = min;
	}
	
	//DISPLAYING HOURS UNDER 10
	if(hr <= 10){
		document.getElementById("hour").innerHTML =  "0" +hr;
	}
	
	//DISPLAYING HOURS OVER 10
	if(hr >= 10){
		document.getElementById("hour").innerHTML = hr;
	}
	
	
}

// CONVERTS THE INPUTS INTO SECONDS
function convertInputs(){
	// ONLY HOURS
	if(hr >= 0 && min == 0 && sec == 0){
		time = hr * 3600;
	}	
	// ONLY MINUTES
	if(min >= 0 && hr == 0 && sec == 0){
		time = (min * 60) + (sec * 1);
	}
	// ONLY SECONDS
	if(min == 0 && hr == 0 && sec >= 0){
		 time = (sec*1);
		 }
	// HOURS AND MINUTES
	if(hr >= 0 && min >= 0){
		time = (hr * 3600) + (min * 60) + (sec * 1);
	}
	// HOURS AND SECONDS
	if(hr >= 0 && sec >= 0){
		time = (hr * 3600) + (sec * 1)
	}
	// MINUTES AND SECONDS
	if(min >= 0 && sec >= 0){
		time = (min * 60) + (sec * 1)
	}
	// ALL 
	if(hours >= 0 && min >= 0 && sec >= 0){
		time = (hr * 3600) + (min * 60) + (sec * 1)
	}
	
	diff = (time);
}

// PAUSING THE COUNT DOWN
function pause(){
	if(isPaused == true){
		repeat = setInterval(function(){ countDown() },1000);
		document.getElementById("pause").value = "pause";
		isPaused = false;
	}
	else if(isPaused == false){
		clearInterval(repeat);
		document.getElementById("pause").value = "resume";
		isPaused = true;
	}
}

// RESETTING ALL THE STYLES AND VARIABLES
function reset(){
	clearInterval(repeat);
	
	document.getElementById("hour").innerHTML = "00";
	document.getElementById("minute").innerHTML = "00";
	document.getElementById("second").innerHTML = "00";

	document.getElementById("hoursInput").placeholder = "hours";
	document.getElementById("minutesInput").placeholder = "minutes";
	document.getElementById("secondsInput").placeholder = "seconds";

	document.getElementById("hoursInput").value = "";
	document.getElementById("minutesInput").value = "";
	document.getElementById("secondsInput").value = "";

	document.getElementById("start").value = "start";
	document.getElementById("start").disabled = "";
	
	document.getElementById("pause").disabled = "true";
	document.getElementById("pause").value = "pause";
	 
	document.body.style.backgroundColor = "whitesmoke";
	document.getElementById("alert").innerHTML = "";
	document.getElementById("hour").style.color = "black";
	document.getElementById("minute").style.color = "black";
	document.getElementById("second").style.color = "black";
	
	hours = 0;
	minutes = 0;
	seconds = 0;
	time = 0;
	diff = 0;
	counter = 0;
	min = 0;
	hr = 0;
	min = 0;
	sec = 0;
	isPaused = false;
}

// STOPPING THE COUNT DOWN AND CHANGING THE STYLE
function timesUp(){
	document.getElementById("second").innerHTML = "00";
	clearInterval(repeat);
	changeStyle();
}

// ACTUAL FUNCTION TO CHANGE THE STYLES 
function changeStyle(){
	document.body.style.backgroundColor = "#6c6c6c";
	document.getElementById("hour").style.color = "darkred";
	document.getElementById("minute").style.color = "darkred";
	document.getElementById("second").style.color = "darkred";//#510000
	document.getElementById("alert").innerHTML = "<h1>TIME IS UP!</h1>"
}

