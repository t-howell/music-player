// Functionality from this tutorial: https://www.youtube.com/watch?v=Dm72PS7GZDs
//Music found here: https://freemusicarchive.org/music/charts/this-week
//White noise found here: http://mc2method.org/white-noise/

let songsObj = 
    [{
    "title": "White Noise",
    "coverArt": "contents/images/paint.jpeg",
    "track": "contents/sounds/min-white-Noise-60min.mp3",
    "liked": false
    }, 
    {
    "title": "Ocean Sounds",
    "coverArt": "contents/images/beach.jpeg",
    "track": "contents/sounds/min-ocean-60min.mp3",
    "liked": false
    },
    {
    "title": "Rain",
    "coverArt": "contents/images/rain.jpg",
    "track": "contents/sounds/min-rain-60min.mp3",
    "liked": false
    }];

//Select song name
let songName = document.getElementById('songName');

//get seekbar
let fill = document.getElementById("fill");

//get cover image
let coverImage = document.getElementById("coverImage");

//Set up song variable
let song = new Audio();
let currentSong = 0;

//autoplay
window.onload = playSong;

//playPause on keypress: spacebar
document.addEventListener('keydown', spacebar);

function spacebar(e) {
    // console.log(e.keyCode);
    if (e.keyCode = 32) {
        e.preventDefault();
        playPause();
    } 
};

//load and play current song/change song title/cover art
function playSong() {
    song.currentTime = 0;
    song.loop = false;
    song.src = songsObj[currentSong].track;
    songName.textContent = songsObj[currentSong].title;
    song.volume = 0.5;
    volumeSlider.value = 50;
    coverImage.src = songsObj[currentSong].coverArt;
    //when song ends, play next song
    song.addEventListener('ended', songTransition);
    //loop
    if (songsObj[currentSong].loop == true) {
        currentSong == currentSong;
    }

};

//transition between tracks
function songTransition() {
    next();
    playPause();
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
}

//Volume slider
let volumeSlider = document.getElementById('volumeRange');
volumeSlider.oninput = function() {
    if (volumeSlider.value >= 10) {
    song.volume = ('0.' + volumeSlider.value);
    } else {
        song.volume = ('0.0' + volumeSlider.value);
    }
    // console.log(volumeSlider.value);
    // console.log(song.volume);
    //Switching out volume slider icon when sound is off
    if (volumeSlider.value <= 0) {
        volumeDown.innerHTML = ('<i class="fas fa-volume-off"></i>');
    } else {
        volumeDown.innerHTML = ('<i class="fas fa-volume-down"></i>');
    }
};

//Like
// let like = document.getElementById('like');
// like.addEventListener('click', likeFunction);

// function likeFunction() {
//     console.log('liked');
//     like.classList.toggle("active-icon");
//     // if (like.classList.contains("active-icon")) {
//     //     songsObj[currentSong].liked = true;
//     // } else {
//     //     songsObj[currentSong].liked = false;
//     // } 
//     if (songsObj[currentSong].liked = false) {
//         songsObj[currentSong].liked = true;
//     } else if (songsObj[currentSong].liked = true) {
//         songsObj[currentSong].liked = false;
//     }

// };

// function toggleLike() {
//     if (songsObj[currentSong].liked = true) {
//         like.classList.add("active-icon");
//     } else if (songsObj[currentSong].liked = false) {
//         like.classList.remove("active-icon");
//     }
// ;}

//Shuffle
let shuffle = document.getElementById('random');
shuffle.addEventListener('click', shuffleFunction, false);

function shuffleFunction() {
    // shuffle.classList.toggle("active-icon");
    let randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber <= 0.33) {
        currentSong = 0;
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        currentSong = 1;
    } else if (randomNumber > 0.66) {
        currentSong = 2;
    }
    playSong();
    playPause();
};

//Repeat
let repeatIcon = document.getElementById("repeat");
repeatIcon.addEventListener('click', repeatFunction);

function repeatFunction() {
    // console.log('clicked')
    repeatIcon.classList.toggle("active-icon");

    //Turn loop on or off based on above icon class
    if (repeatIcon.classList.contains("active-icon")) {
        song.loop = true;
    } else {
        song.loop = false;
    }  
};



//Debugging

// document.documentElement.addEventListener("click", function(e) {
//     console.log(e.target);
//   });
