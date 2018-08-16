
var rightside = document.getElementById("rightside");

var SideNav3 = document.getElementById("submitit");

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
    document.getElementById("SideNav3").classList.toggle("show");
}
//
// window.onclick = function(event) {
//   if (!event.target.matches('.libraries')) {
//
//     var openUp = document.getElementsByClassName("navigation");
//     var i;
//     for (i = 0; i < openUp.length; i++) {
//       var openUp2 = openUp[i];
//       if (openUp2.classList.contains('show')) {
//         openUp2.classList.remove('show');
//       }
//     }
//   }
// }

// SideNav3.onclick = function() {
//   document.getElementById("rightside").innerHTML = "<h1>Libraries</h1>";
//   window.open('index2.html', '_self');
//
//
// }
//








loaders = function(){
  menu();
  open3();
}

loaders()
