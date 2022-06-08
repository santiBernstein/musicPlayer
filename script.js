const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// music
const songs = [
    {
        name: 'uno',
        displayName: 'Demo 1',
        artist: 'Jamiro',
    },
    {
        name: 'dos',
        displayName: 'Demo 2',
        artist: 'Jamiro',
    },
    {
        name: 'tres',
        displayName: 'Demo 3',
        artist: 'Jamiro',
    },
    {
        name: 'cuatro',
        displayName: 'Demo 4',
        artist: 'Jamiro',
    },
];

// check if playing
let isPlaying = false;

// play
function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// pause
function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play'); 
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// play or pause event listener
playBtn.addEventListener('click', ()=> (isPlaying ? pauseSong() : playSong() ) );

// update DOM
function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`
}

// current song
let songIndex = 0;

// prev song
function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
}


// next song
function nextSong(){
    songIndex++;
    if(songIndex > songs.length -1){
        songIndex = 0; 
    }
    loadSong(songs[songIndex]);
    playSong();
}

// on load - select first song
loadSong(songs[songIndex]);

// event listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
