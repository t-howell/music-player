// Functionality from this tutorial: https://www.youtube.com/watch?v=Dm72PS7GZDs
//Music found here: https://freemusicarchive.org/music/charts/this-week
//White noise found here: http://mc2method.org/white-noise/

//songs array
let songs = ["contents/sounds/white-Noise-60min.mp3", "contents/sounds/ocean-60min.mp3", "contents/sounds/rain-10min.mp3"];

//Covers array
let coverArt = ["contents/images/boat.jpg", "contents/images/lupins.jpeg", "contents/images/aster-flower.jpeg"];

//Select song name h1 from index
let songName = document.getElementById('songName');
//song title array
let songTitle = ["White Noise", "Ocean Sounds", "Rain"];
//get seekbar from index
let fill = document.getElementById("fill");

let song = new Audio();
let currentSong = 0;

//autoplay
window.onload = playSong;

//load and paly current song/change song title
function playSong() {
    song.src = songs[currentSong];
    songName.textContent = songTitle[currentSong];
    song.play();
}
//play button
function playPause() {
    if(song.paused){
        song.play();
        $("#play img").attr("src", "contents/images/pause.svg");
    } else {
        song.pause();
        $("#play img").attr("src", "contents/images/play.svg");
    }
}
//seeker function
song.addEventListener('timeupdate', function(){
    let position = song.currentTime / song.duration;

    fill.style.width = position * 100 + '%';
});

//next button
function next() {
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src","contents/images/pause.svg");
    $("#coverImage").attr("src", coverArt[currentSong]);
    //background
    //$("#bg img").attr("src", coverArt[currentSong]);
}


//prev button
function prev() {
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    $("#play img").attr('src',"contents/images/pause.svg");
    $("#coverImage").attr("src", coverArt[currentSong]);
    //background
    //$("#bg img").attr("src", coverArt[currentSong]);
}
