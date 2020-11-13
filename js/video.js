var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
	document.querySelector('#volume').innerHTML = document.querySelector('#volumeSlider').value + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	// console.log("New Speed is" + video.playbackRate);
	video.playbackRate *= 0.9;
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {

	video.currentTime += 5;
	if (video.currentTime < video.duration) {
		console.log(video.duration);
		console.log("Current location " + video.currentTime);
	} else {
		video.currentTime = 0;
		console.log("Going back to beginning");
		video.play();
		console.log(video.duration);
		console.log("Current location " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = 'Unmute';
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = 'Mute';
	}
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	video.volume = document.querySelector('#volumeSlider').value / 100;
	console.log(video.volume);
	document.querySelector('#volume').innerHTML = document.querySelector('#volumeSlider').value + '%';
});

document.querySelector("#old").addEventListener("click", function() {
	video.className = "oldTime";
});

document.querySelector("#original").addEventListener("click", function() {
	video.className = "";
});
