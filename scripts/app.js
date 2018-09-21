// Functionality from this tutorial: https://www.youtube.com/watch?v=Dm72PS7GZDs
//Music found here: https://freemusicarchive.org/music/charts/this-week
//White noise found here: http://mc2method.org/white-noise/

let songsObj = 
    [{
    "title": "White Noise",
    "coverArt": "contents/images/paint.jpeg",
    "track": "contents/sounds/min-white-Noise-60min.mp3"
    }, 
    {
    "title": "Ocean Sounds",
    "coverArt": "contents/images/beach.jpeg",
    "track": "contents/sounds/min-ocean-60min.mp3"
    },
    {
    "title": "Rain",
    "coverArt": "contents/images/rain.jpg",
    "track": "contents/sounds/min-rain-60min.mp3"
    }];

//Select song name from index
let songName = document.getElementById('songName');

//get seekbar from index
let fill = document.getElementById("fill");

let song = new Audio();
let currentSong = 0;

//autoplay
window.onload = playSong;

//playPause on keypress: spacebar
document.addEventListener('keypress', spacebar);

function spacebar(e) {
    // console.log(e.keyCode);
    if (e.keyCode = 32) {
        e.preventDefault();
        playPause();
    }
}

//load and play current song/change song title
function playSong() {
    song.currentTime = 0;
    song.src = songsObj[currentSong].track;
    songName.textContent = songsObj[currentSong].title;
    song.volume = 0.5;
    // song.play();
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
    $("#play img").attr("src","contents/images/play.svg");
    $("#coverImage").attr("src", songsObj[currentSong].coverArt);
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
    $("#coverImage").attr("src", songsObj[currentSong].coverArt);
    //background
    //$("#bg img").attr("src", coverArt[currentSong]);
}

//control volume
let volumeSlider = document.getElementById('volumeRange');
volumeSlider.oninput = function() {
    // console.log(volumeSlider.value);
    // console.log(song.volume);
    if (volumeSlider.value <= 0) {
        song.volume = 0.0;
    } else if (volumeSlider.value > 0 && volumeSlider.value <= 10) {
        song.volume = 0.1;
    } else if (volumeSlider.value > 10 && volumeSlider.value <= 20) {
        song.volume = 0.2;
    } else if (volumeSlider.value > 20 && volumeSlider.value <= 30) {
        song.volume = 0.3;
    } else if (volumeSlider.value > 30 && volumeSlider.value <= 40) {
        song.volume = 0.4;
    } else if (volumeSlider.value > 40 && volumeSlider.value <= 50) {
        song.volume = 0.5;
    } else if (volumeSlider.value > 50 && volumeSlider.value <= 60) {
        song.volume = 0.6;
    } else if (volumeSlider.value > 60 && volumeSlider.value <= 70) {
        song.volume = 0.7;
    } else if (volumeSlider.value > 70 && volumeSlider.value <= 80) {
        song.volume = 0.8;
    } else if (volumeSlider.value > 80 && volumeSlider.value <= 90) {
        song.volume = 0.9;
    } else if (volumeSlider.value > 90 && volumeSlider.value <= 100) {
        song.volume = 1.0;
    }
};