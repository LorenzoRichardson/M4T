var playbutton = document.getElementById("play");
var prevbutton = document.getElementById("prev");
var fowardbutton = document.getElementById("foward");
//var display = document.getElementById("Display");

var songList = ['pink.wav', 'jordy.mp3']
var position = 0;
var isPlay =false;


function display()
{
document.getElementById("Display").innerHTML = ` ${songList[position]}`;

}

function togglePlay(song){
    if (isPlay){
      audio.pause()
      isPlay = false
      document.getElementById("play-img").src= "play.png";
    }else{
      isPlay =true;
      document.getElementById("play-img").src = "pause.png";
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

function loaders(){
display();
}

loaders();
