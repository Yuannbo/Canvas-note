window.addEventListener("load", eventWindowLoaded, false);
var Debugger = function () {}
Debugger.log = function () {
    try {
        console.log(message);
    }catch (exception){
        return;
    }
}
function eventWindowLoaded() {
    canvasApp();
}


function canvasApp() {


     var theCanvas = document.getElementById("canvasOne");
     var context = theCanvas.getContext("2d");

     Debugger.log("Drawing Canvas");

     function drawScreen() {
         //背景
         context.fillStyle = "#ffffaa";
         context.fillRect(0,0,500,300);

         //文字
         context.fillStyle = "#000000";
         context.font = "100px_sans";
         context.fillText("Hello Canvas", 195, 80);

         //图像
         var helloWorldImage = new Image();
         helloWorldImage.src = "timg.jpg";
         helloWorldImage.onload = function () {
             context.drawImage(helloWorldImage, 160, 130)
         }
     }
     drawScreen()
}
