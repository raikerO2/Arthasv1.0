$(document).ready(function(){
	console.log("DOM Loaded");

	//Vars Storing #video id and #button id
	var arthasVideo = document.getElementById("arthasVideo"),
	pauseButton = document.querySelector("#arthasText button");

	//Adds the event click for #button id
	pauseButton.addEventListener("click", function(){

		//If the video is playing, text modify Pause
		//Executes Play
		if(arthasVideo.paused){
			arthasVideo.play();
			pauseButton.innerHTML = "Pause";

		//Else the video is paused, text modify Play
		//Executes Pause
		}else{
			arthasVideo.pause();
			pauseButton.innerHTML = "Play";

		}
	},false);

});