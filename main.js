function changeTime() {

  now = new Date()
  total_secs = (now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds()) / 0.96

  hours = Math.floor(total_secs/60/60)
  minutes = Math.floor(total_secs/60) % 60
  seconds = Math.floor(total_secs % 60)

	document.getElementById("hour-1").setAttribute("class","num-"+Math.floor(hours/10));
	document.getElementById("hour-2").setAttribute("class","num-"+hours%10);
	document.getElementById("minute-1").setAttribute("class","num-"+Math.floor(minutes/10));
	document.getElementById("minute-2").setAttribute("class","num-"+minutes%10);
	document.getElementById("second-1").setAttribute("class","num-"+Math.floor(seconds/10));
	document.getElementById("second-2").setAttribute("class","num-"+seconds%10);

	setTimeout(changeTime, 1000);
}

changeTime();
