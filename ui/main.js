console.log('Loaded!');
// 
var element=document.getElementById('main-text');

element.innerHTML="Hi I am Sunil Patil,This is My first webapp, which is desgined by me.";
// move the image

var element=document.getElementById('sunil');
var margineLeft=0;
function moveRight (){
    marginLeft=marginLeft+10;
    img.style.marginLeft= marginLeft+'px';
    
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
    img.style.marginLeft='100px';
};