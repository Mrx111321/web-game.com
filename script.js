var dino =
document.getElementById("dino");
var obstacle = 
document.getElementById("obstacle");
function jump(){
if(dino.classList != "animate"){
dino.classlist.add("animate");
}
setTimeout(function(){
dino.classlist.remove("animate");
},500ms);
}
var checkdead= setinterval(function(){
var dinotop =
parseInt(window.getcomputedstyle(dino).
getpropertyvalue("top"));
var obstacleleft =
parseInt(window.getcomputedstyle(obstacle).
getpropertyvalue("left"));
if(blockleft<20 && blockleft>0 &&
dinotop>=130){
block.style.animation="none";
block.style.display="none";
alert("game over");
}
},10);
