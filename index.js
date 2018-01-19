// var currentTime = new Date().getHours();
// if(5 < currentTime && currentTime < 18){
//     if (document.body) {
//         document.body.background = 'images/morning.jpg';
//     }
// } else {
//     if (document.body) {
//         document.body.background = 'images/night.jpg';
//     }
// }

// var currentTime = new Date().getHours();
// if(5 < currentTime && currentTime < 18){
// 	(document.body)
//     document.body.background = 'images/morning.jpg';
// } else { 
// 	(document.body)
//     document.body.background = 'images/night.jpg';
//     }
var morningArray = ['images/morning.jpg', 'images/beach.jpg', 'images/waterfall.jpg', 'images/beary-cool.jpg'];
var afternoonArray = ['images/mountains.jpg','images/serenity.jpg', 'images/sunset.jpg',];
var nightArray = ['images/night.jpg', 'images/spaced-out.jpg', 'images/galactic-fish.jpg'];
var morningRand = morningArray[Math.floor(Math.random() * morningArray.length)];
var afternoonRand = afternoonArray[Math.floor(Math.random() * afternoonArray.length)];
var nightRand = nightArray[Math.floor(Math.random() * nightArray.length)];
var currentTime = new Date().getHours();
var morning = document.getElementById('greetMorning');
var afternoon = document.getElementById('greetAfternoon');
var night = document.getElementById('greetNight');


if(5 < currentTime && currentTime < 12){
    document.body.background = morningRand;
    afternoon.style.display = 'none'
    night.style.display = 'none'
} else if (13 < currentTime && currentTime < 18) { 
    document.body.background = afternoonRand;
    morning.style.display = 'none'
    night.style.display = 'none'
    } else {
    document.body.background = nightRand;
    afternoon.style.display = 'none'
    morning.style.display = 'none'
    }
function startClock(){
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();

	if (h < 10) {
		h = '0' + h
	}
 	if (m < 10) {
 		m = '0' + h
 	}
  if (s < 10) {
  	s = '0' + s
  }

  var time =  h + ":" + m + ":" + s + " ";

 document.getElementById("myClock").innerText = time;
 document.getElementById("myClock").textContent = time;
}
setInterval(startClock, 1000);

startClock();

