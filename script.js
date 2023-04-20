//your JS code here. If required.

const p=document.getElementById("timer");
window.onload = displayClock();
function displayClock(){
  var display = new Date().toLocaleString();
	p.innerText=display;
  // document.body.innerHTML = display;
  setTimeout(displayClock, 1000); 
}