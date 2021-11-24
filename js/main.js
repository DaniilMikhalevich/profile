$(window).on(`load`, function(){
   //vide.js - video background  
    $(`#header`).vide(`./video/video`,{
        bgColor: `#272d1f`
    });
});

myVid=document.getElementById("audio");
myVid.volume=0.7;
myVid=document.getElementById("audio2");
myVid.volume=0.7;
myVid=document.getElementById("audio3");
myVid.volume=0.7;
myVid=document.getElementById("audio4");
myVid.volume=0.6;
myVid=document.getElementById("audio5");
myVid.volume=0.6;
myVid=document.getElementById("audio6");
myVid.volume=0.6;
myVid=document.getElementById("audio7");
myVid.volume=0.5;
myVid=document.getElementById("audio8");
myVid.volume=0.5;
myVid=document.getElementById("audio9");
myVid.volume=0.5;
myVid=document.getElementById("audio10");
myVid.volume=0.5;
myVid=document.getElementById("audio11");
myVid.volume=0.5;
myVid=document.getElementById("audio12");
myVid.volume=0.5;

var a=document.getElementsByTagName("audio");
function other_pause(b){
    for(i=0;i<a.length;i++){
        if(!(i==b)){a[i].pause()};
    }
}
 

