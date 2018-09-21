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

//Volume slider
let volumeSlider = document.getElementById('volumeRange');
volumeSlider.oninput = function() {
    // console.log(volumeSlider.value);
    // console.log(song.volume);
    song.volume = ('0.' + volumeSlider.value);
    if (volumeSlider.value <= 0) {
        volumeDown.innerHTML = ('<i class="fas fa-volume-off"></i>');
    } else {
        volumeDown.innerHTML = ('<i class="fas fa-volume-down"></i>');
    }
};
