var playbutton = document.getElementById("play");
var prevbutton = document.getElementById("prev");
var fowardbutton = document.getElementById("foward");
//var display = document.getElementById("Display");

var songList = ['assets/MusicLibrary/Music/pink.wav', 'assets/MusicLibrary/Music/jordy.mp3','assets/MusicLibrary/Music/Clout_Cobain.mp3','assets/MusicLibrary/Music/Black_Balloons.mp3','assets/MusicLibrary/Music/Lucid_Dreams.mp3','assets/MusicLibrary/Music/BrunoMars_Finesse.mp3','assets/MusicLibrary/Music/Cold.mp3','assets/MusicLibrary/Music/RipAndTear.mp3','assets/MusicLibrary/Music/YeahRight.mp3','assets/MusicLibrary/Music/Goosebumps.mp3','assets/MusicLibrary/Music/ShapeOfYou.mp3','assets/MusicLibrary/Music/Flashing_Lights.mp3'];
var songTitle = ['Pink', 'Jordy', 'Clout Cobain', 'Black Balloons', 'Lucid Dreams', 'Finesse (Remix)','Rich Brian - Cold','Doom Soundtrack - Rip & Tear','Joji - Yeah Right','Travis Scott - GooseBumps','Ed Sheeran - Shape Of You','Kanye West - Flashing Lights ']
var pictureList = ['assets/MusicLibrary/Title-Images/pink.jpeg','assets/MusicLibrary/Title-Images/jordy.jpeg','assets/MusicLibrary/Title-Images/Clout_Cobain.png','assets/MusicLibrary/Title-Images/Black_Balloons.jpg','assets/MusicLibrary/Title-Images/Lucid_Dreams.jpg','assets/MusicLibrary/Title-Images/Finesse_.jpg','assets/MusicLibrary/Title-Images/c27f3271d72101753459d141983058d3.1000x1000x1.jpg','assets/MusicLibrary/Title-Images/maxresdefault.jpg','https://ssle.ulximg.com/image/750x750/cover/1503707157_45eb9dfd951c445dad8362ca03ba1019.jpg/e8c34a0c568019676915c86bdc84209e/1503707157_1b6332c59b63ee85e7ee19157c68d91f.jpeg','assets/MusicLibrary/Title-Images/51wf0kkUARL._SS500.jpg','assets/MusicLibrary/Title-Images/download.jpeg','assets/MusicLibrary/Title-Images/220px-Flashinglights.png'];
var songArtist = ['Pink','Jordy','Denzel Curry','Denzel Curry','Juice WRLD','Bruno Mars','Rich Brian','Doom','Joji','Travis Scott','Ed Sheeran','Kanye West']
var position = 0;
var isPlay =false;


var yellow = document.getElementById("box1");
var yellowGreen = document.getElementById("box2");
var pink = document.getElementById("box3");
var orange = document.getElementById("box4");
var blue = document.getElementById("box5");
var grey = document.getElementById("box6");

var box7= document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var box10 = document.getElementById("box10");
var box11 = document.getElementById("box11");
var box12 = document.getElementById("box12");





function display()
{
document.getElementById("Display").innerHTML = `    <div id="song-title">${songTitle[position]}
                                                      <p><div id="song-artist">${songArtist[position]}</div></p>
                                                           </div>
                                                    <img id="Display-img" src=${pictureList[position]}>`;

//document.getElementById("Display").innerHTML = `<img id="Display-img" src="jordy.jpeg">`
// document.getElementById("Display").innerHTML = `<div id="song-title">title</div>`
}

function togglePlay(song,specify){
    if (isPlay){
      audio.pause()
      isPlay = false
      document.getElementById(specify).src= "assets/WebPlayer/Images/play.png";
    }else{
      isPlay =true;
      document.getElementById(specify).src = "assets/WebPlayer/Images/pause.png";
      document.getElementById(specify).style.width = "50px";
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

playbutton.onclick = function(){
togglePlay(songList[position],"play-img");
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

function loaders(){
display();
}

loaders();



var rightside = document.getElementById("rightside");
var playlist = document.getElementById("playlist");
var songs = document.getElementById("songs");



// playlist.onclick = function(){
//
//
//
// }



yellow.onclick = function(){
  position =3
  togglePlay(songList[position],"play-img");
  display()


}


yellowGreen.onclick = function(){
  position =6
  togglePlay(songList[position],"play-img");
  display()
}

pink.onclick = function(){
  position =7
  togglePlay(songList[position],"play-img");
  display()
}

orange.onclick = function(){
  position =8
  togglePlay(songList[position],"play-img");
  display()
}

blue.onclick = function(){
  position =1
  togglePlay(songList[position],"play-img");
  display()
}

grey.onclick = function(){
  position =0
  togglePlay(songList[position],"play-img");
  display()
}


box7.onclick = function(){
  position =2
  togglePlay(songList[position],"play-img");
  display()
}

box8.onclick = function(){
  position =11
  togglePlay(songList[position],"play-img");
  display()
}

box9.onclick = function(){
  position =9
  togglePlay(songList[position],"play-img");
  display()
}

box10.onclick = function(){
  position =5
  togglePlay(songList[position],"play-img");
  display()
}

box11.onclick = function(){
  position =4
  togglePlay(songList[position],"play-img");
  display()
}

box12.onclick = function(){
  position =10
  togglePlay(songList[position],"play-img");
  display()
}

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 32){
    togglePlay(songList[position]);
    console.log("Hi");
  }
});
