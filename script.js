// JavaScript Document

 function blink() {
  var blinks = document.getElementsByTagName('blink');
  for (var i = blinks.length - 1; i >= 0; i--) {
  var s = blinks[i];
  s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
}
window.setTimeout(blink, 100);
}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", blink, false);
else if (window.addEventListener) window.addEventListener("load", blink, false);
else if (window.attachEvent) window.attachEvent("onload", blink);
else window.onload = blink;



window.onload = function() {
    document.getElementById("my_audio").play();
}



 function blink2() {
  var blinks2 = document.getElementsByTagName('blink2');
  for (var i = blinks2.length - 1; i >= 0; i--) {
  var s = blinks2[i];
  s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
}
window.setTimeout(blink2, 500);
}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", blink2, false);
else if (window.addEventListener) window.addEventListener("load", blink2, false);
else if (window.attachEvent) window.attachEvent("onload", blink2);
else window.onload = blink2;