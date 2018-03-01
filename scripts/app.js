

let playButton = document.getElementById('play');
let coverImg = document.getElementById('cover');

//get audio files from DOM and remove autoplay
let enthusiast = document.getElementById('enthusiast');
enthusiast.autoplay = false;

let teol = document.getElementById('TEOL');
teol.autoplay = false;

function Song(song, title, cover, artist) {
    this.song = song;
    this.title = title;
    this.cover = [cover];
    this.artist = artist;
    this.returnSong = returnSong;
    this.playSong = playSong;
};

// Defining song objects
let song1 = new Song(new Audio(enthusiast), 'Enthusiast', 'http://via.placeholder.com/250x250', 'Tours');

let song2 = new Song(new Audio(teol), 'The Emergence of Love', 'http://via.placeholder.com/250x250', 'Lightblow');

//Store song objects in an array
//let songs = [song1, song2];

//Create a current song variable and set it to the first song
//let currentSong = song1;

function returnSong(Song) {
    this.song.currentTime = 0;
    //this.song.play();
    coverImg.src = this.cover; 
};
function playSong(songs) {
    this.song.play();
}
returnSong();
playButton.addEventListener('click', playSong);