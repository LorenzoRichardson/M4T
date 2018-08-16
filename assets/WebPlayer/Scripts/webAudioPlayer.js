var playbutton = document.getElementById("play");
var prevbutton = document.getElementById("prev");
var fowardbutton = document.getElementById("foward");
//var display = document.getElementById("Display");
let display1 = document.querySelector('#Display');
let playlist = document.querySelector('#Playlist')

const colors = ['red','pink','orange','yellow','blue'];

var songList = ['assets/MusicLibrary/Music/pink.wav', 'assets/MusicLibrary/Music/jordy.mp3','assets/MusicLibrary/Music/Clout_Cobain.mp3','assets/MusicLibrary/Music/Black_Balloons.mp3','assets/MusicLibrary/Music/Lucid_Dreams.mp3','assets/MusicLibrary/Music/BrunoMars_Finesse.mp3','assets/MusicLibrary/Music/Cold.mp3','assets/MusicLibrary/Music/RipAndTear.mp3','assets/MusicLibrary/Music/YeahRight.mp3','assets/MusicLibrary/Music/Goosebumps.mp3','assets/MusicLibrary/Music/ShapeOfYou.mp3','assets/MusicLibrary/Music/Flashing_Lights.mp3'];
var songTitle = ['Pink', 'Jordy', 'Clout Cobain', 'Black Balloons', 'Lucid Dreams', 'Finesse (Remix)','Rich Brian - Cold','Doom Soundtrack - Rip & Tear','Joji - Yeah Right','Travis Scott - GooseBumps','Ed Sheeran - Shape Of You','Kanye West - Flashing Lights ']
var pictureList = ['assets/MusicLibrary/Title-Images/pink.jpeg','assets/MusicLibrary/Title-Images/jordy.jpeg','assets/MusicLibrary/Title-Images/Clout_Cobain.png','assets/MusicLibrary/Title-Images/Black_Balloons.jpg','assets/MusicLibrary/Title-Images/Lucid_Dreams.jpg','assets/MusicLibrary/Title-Images/Finesse_.jpg','assets/MusicLibrary/Title-Images/c27f3271d72101753459d141983058d3.1000x1000x1.jpg','assets/MusicLibrary/Title-Images/maxresdefault.jpg','assets/MusicLibrary/Title-Images/download (1).jpeg','assets/MusicLibrary/Title-Images/51wf0kkUARL._SS500.jpg','assets/MusicLibrary/Title-Images/download.jpeg','assets/MusicLibrary/Title-Images/220px-Flashinglights.png'];
var songArtist = ['Pink','Jordy','Denzel Curry','Denzel Curry','Juice WRLD','Bruno Mars','Rich Brian','Doom','Joji','Travis Scott','Ed Sheeran','Kanye West']
var position = 0;
var isPlay =false;

Display.addEventListener('click', enlarge);

function display()
{
document.getElementById("Display").innerHTML = `    <div id="song-title">${songTitle[position]}
                                                      <p><div id="song-artist">${songArtist[position]}</div></p>
                                                           </div>
                                                    <img id="Display-img" src=${pictureList[position]}>`;

//document.getElementById("Display").innerHTML = `<img id="Display-img" src="jordy.jpeg">`
// document.getElementById("Display").innerHTML = `<div id="song-title">title</div>`
}

function togglePlay(song){

    if (isPlay){
      audio.pause()
      isPlay = false
      document.getElementById("play-img").src= "assets/WebPlayer/Images/play.png";
    }else{
      isPlay =true;
      document.getElementById("play-img").src = "assets/WebPlayer/Images/pause.png";
      document.getElementById("play-img").style.width = "50px";

      // var fft, // Allow us to analyze the song
      //     numBars = 1024; // The number of bars to use; power of 2 from 16 to 1024
      //     // song; // The p5 sound object
      // // Load our song
      // // var loader = document.querySelector(".loader");
      // // document.getElementById("audiofile").onchange = function(event) {
      // //     if(event.target.files[0]) {
      // //         if(typeof song != "undefined") { // Catch already playing songs
      // //             song.disconnect();
      // //             song.stop();
      // //         }
      //
      //         // Load our new song
      //         // song = audio;
      //         //loader.classList.add("loading");
      //         console.log("Hi");
      //         // setup();
      //         // draw();
      // //     }
      // // }
      //
      // var canvas;
      // function setup() { // Setup p5.js
      //     canvas = createCanvas(450, 100);
      // }
      //
      // function draw() {
      //     background(0);
      //
      //     if(typeof song != "undefined"
      //        && song.isLoaded()
      //        && !song.isPlaying()) { // Do once
      //         loader.classList.remove("loading");
      //
      //         song.play();
      //         song.setVolume(0.5);
      //
      //         fft = new p5.FFT();
      //         fft.waveform(numBars);
      //         fft.smooth(0.85);
      //     }
      //
      //     if(typeof fft != "undefined") {
      //         var spectrum = fft.analyze();
      //         noStroke();
      //         fill("rgb(0, 205, 255)");
      //         for(var i = 0; i < numBars; i++) {
      //             var x = map(i, 0, numBars, 0, width);
      //             var h = -height + map(spectrum[i], -25, 1000, height, -200);
      //             rect(x, height, width / numBars, h);
      //         }
      //     }
      // }

      playsound(song);
    }
}

function playsound(song){
audio = new Audio(song);
 audio.load();
//volumeRet = audio.volume;
 audio.play();
   //volume();
console.log(`${song} play`);
return true;
display();
}

function nextSong(){

  if(position  <  songList.length -1){
  position = position +1;
}else{
  position = 0;
}
}


function prevSong(){
  if (position == 0){
     position = 0;
  }else {
    position = position -1;
  }
}

function enlarge(){


}

playbutton.onclick = function(){
togglePlay(songList[position]);
display()
}

fowardbutton.onclick = function(){
nextSong();
display()
}

prevbutton.onclick =  function(){
prevSong();
display();



}







function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function loaders(){
display();
}

loaders();



var fft, // Allow us to analyze the song
    numBars = 1024, // The number of bars to use; power of 2 from 16 to 1024
    song; // The p5 sound object
// Load our song
var loader = document.querySelector(".loader");
document.getElementById("audiofile").onchange = function(event) {
    if(event.target.files[0]) {
        if(typeof song != "undefined") { // Catch already playing songs
            song.disconnect();
            song.stop();
        }

        // Load our new song
        song = loadSound(URL.createObjectURL(event.target.files[0]));
        loader.classList.add("loading");
        console.log("Hi");
        setup();
        draw();
    }
}

var canvas;
function setup() { // Setup p5.js
    canvas = createCanvas(450, 100);
}

function draw() {
    background(0);

    if(typeof song != "undefined"
       && song.isLoaded()
       && !song.isPlaying()) { // Do once
        loader.classList.remove("loading");

        song.play();
        song.setVolume(0.5);

        fft = new p5.FFT();
        fft.waveform(numBars);
        fft.smooth(0.85);
    }

    if(typeof fft != "undefined") {
        var spectrum = fft.analyze();
        noStroke();
        fill("rgb(0, 205, 255)");
        for(var i = 0; i < numBars; i++) {
            var x = map(i, 0, numBars, 0, width);
            var h = -height + map(spectrum[i], -25, 1000, height, -200);
            rect(x, height, width / numBars, h);
        }
    }
}




// window.addEventListener("keypress", v => {
//   // console.log("my key:",v.key);
//   if (v.key === '(space)'){
//     togglePlay(songList[position]);
//     console.log("Hi");
//   }
// })

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 32){
    togglePlay(songList[position]);
    console.log("Hi");
  }
});
