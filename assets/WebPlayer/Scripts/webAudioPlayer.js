var playbutton = document.getElementById("play");
var prevbutton = document.getElementById("prev");
var fowardbutton = document.getElementById("foward");
//var display = document.getElementById("Display");
let display1 = document.querySelector('#Display');
let playlist = document.querySelector('#Playlist')

const colors = ['red','pink','orange','yellow','blue'];

var songList = ['assets/MusicLibrary/Music/pink.wav', 'assets/MusicLibrary/Music/jordy.mp3','assets/MusicLibrary/Music/Clout_Cobain.mp3','assets/MusicLibrary/Music/Black_Balloons.mp3','assets/MusicLibrary/Music/Lucid_Dreams.mp3','assets/MusicLibrary/Music/BrunoMars_Finesse.mp3'];
var songTitle = ['Pink', 'Jordy', 'Clout Cobain', 'Black Balloons', 'Lucid Dreams', 'Finesse (Remix)']
var pictureList = ['assets/MusicLibrary/Title-Images/pink.jpeg','assets/MusicLibrary/Title-Images/jordy.jpeg','assets/MusicLibrary/Title-Images/Clout_Cobain.png','assets/MusicLibrary/Title-Images/Black_Balloons.jpg','assets/MusicLibrary/Title-Images/Lucid_Dreams.jpg','assets/MusicLibrary/Title-Images/Finesse_.jpg'];
var songArtist = ['Pink','Jordy','Denzel Curry','Denzel Curry','Juice WRLD','Bruno Mars']
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

function menu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function open1(){

}

function open2(){

}

function open3(){

}







function loaders(){
display();
menu();
}

loaders();
