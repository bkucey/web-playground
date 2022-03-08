var myDate = new Date();
var timeOutput = document.getElementById("time-output");
timeOutput.textContent = "The date now is " + myDate.toDateString() + ", and the time now is " + myDate.toTimeString() + ".";
