var video;


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay=false;
	video.loop=false;
	video.load();

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var volume = document.getElementById("slider").value;
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
	document.getElementById("volume").innerHTML=volume+"%";

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=  0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *=  1.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	video.loop = true;
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {   
		video.muted = true;
		document.getElementById("mute").innerText = 'Unmute';
	}
	else{
		video.muted = false;
		console.log(unmute);
		document.getElementById("mute").innerText = 'Mute';
	}
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log( video.volume);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

