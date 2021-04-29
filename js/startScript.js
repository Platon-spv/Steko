window.onresize = function() {
 setTextOverlay () 
console.log("Fire!" );

}


let aaa = document.getElementById("video_preview_el")
setTextOverlay ()
console.log("aaa!" ,aaa );


aaa.onloadedmetadata = function() {
 setTextOverlay () 
console.log("Fire!" );

}


aaa.onloadstart = function() {
 setTextOverlay () 
console.log("Fire!" );

}


function setTextOverlay () {

let video = document.getElementById("video_preview");
let hVideo=video.getBoundingClientRect().height;
let wVideo= video.getBoundingClientRect().width;

let xCoof = 319/596;
let yCoof = 193/336;
let xSizeMinCoef = 333/596;
let ySizeMinCoef = 50/336;

let text = document.getElementsByClassName("video-preview-text")[0];

text.style.minWidth = wVideo*xSizeMinCoef +"px";
text.style.minHeight = hVideo*ySizeMinCoef +"px";

let textRealWidth = text.getBoundingClientRect().width;
let textRealHeight = text.getBoundingClientRect().height;
text.style.top = hVideo*yCoof + 70  - (textRealHeight - hVideo*ySizeMinCoef)/2 + "px";
// text.style.left = document.body.getBoundingClientRect().width/2 - textRealWidth/2 - (textRealWidth - xSizeMinCoef*wVideo)/2  +"px";
text.style.left = document.body.getBoundingClientRect().width/2 - textRealWidth/2  +"px";

console.log(wVideo, hVideo );

}