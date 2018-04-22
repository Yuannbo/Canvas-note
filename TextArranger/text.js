window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
    canvasApp();
}

function canvasApp() {

    var theCanvas = document.getElementById("theCanvas");
    var context = theCanvas.getContext("2d");

    //设置一些控件的默认值
    var texttitle = 'Canvas! 空白的卷心菜花';
    var message = "your text";
    var fillOrStroke = "fill";
    var fontSize = "50";
    var fontFace = "serif";
    var fontWeight = "normal";
    var fontStyle = "normal";
    var textFillColor = "#000000";
    var textFillColor2 = "#FF0000";
    var textBaseline = "middle";
    var textAlign = "center";
    var textAlpha = 1;
    var shadowX = 0;
    var shadowY = 0;
    var shadowBlur = 0;
    var shadowColor = '#707070';
    var fillType = 'colorFill';
    



    function EventListener() {
        var formElement = document.getElementById("textBox");
        formElement.addEventListener('keyup',textBoxChange, false);

        formElement = document.getElementById("fillOrStroke");
        formElement.addEventListener('change',fillOrStrokeChanged, false);

        formElement = document.getElementById("fontStyle");
        formElement.addEventListener('change',fontStyleChanged, false);

        formElement = document.getElementById("textFont");
        formElement.addEventListener('change',textFontChanged, false);

        formElement = document.getElementById("textSize");
        formElement.addEventListener('change',textSizeChanged, false);

        formElement = document.getElementById("textFillColor");
        formElement.addEventListener('change',textFillColorChange, false);
        formElement = document.getElementById("textFillColor2");
        formElement.addEventListener('change',textFillColor2Changed, false);

        formElement = document.getElementById("fontWeight");
        formElement.addEventListener('change',fontWeightChanged, false);

        formElement = document.getElementById("textBaseline");
        formElement.addEventListener('change',textBaselineChanged, false);

        formElement = document.getElementById("textAlign");
        formElement.addEventListener('change',textAlignChanged, false);

        formElement = document.getElementById("textAlpha");
        formElement.addEventListener('change',textAlphaChanged, false);

        formElement = document.getElementById("shadowX");
        formElement.addEventListener('change',shadowXChanged, false);
        formElement = document.getElementById("shadowY");
        formElement.addEventListener('change',shadowYChanged, false);
        formElement = document.getElementById("shadowBlur");
        formElement.addEventListener('change',shadowBlurChanged, false);
        formElement = document.getElementById("shadowColor");
        formElement.addEventListener('change',shadowColorChanged, false);

        formElement = document.getElementById("fillType");
        formElement.addEventListener('change',fillTypeChanged, false);
    }


    function textBoxChange(e) {
        var target = e.target;
        message = target.value;
        drawScreen();
    }

    // function textPos(message) {
    //     var metrics = context.measureText(message);
    //     var textWidth = metrics.width;
    //     var xPosition = (theCanvas.width/2) - (textWidth/2);
    //     var yPosition = (theCanvas.height/2);
    //     return {x:xPosition ,y:yPosition};
    // }

     function fillOrStrokeChanged(e) {
        var target = e.target;
        fillOrStroke = target.value;
        drawScreen();
     }

     function textSizeChanged(e) {
         var target = e.target;
         fontSize = target.value;
         drawScreen();
     }
     function textFontChanged(e) {
         var target = e.target;
         fontFace = target.value;
         drawScreen();
     }
     function textFillColorChange(e) {
         var target = e.target;
         textFillColor = "#" + target.value;
         drawScreen();
     }
     function fontWeightChanged(e) {
         var target = e.target;
         fontWeight = target.value;
         drawScreen();

     }
     function fontStyleChanged(e) {
         var target = e.target;
         fontStyle = target.value;
         drawScreen();
     }
     
     function textBaselineChanged(e){
         var target = e.target;
         textBaseline = target.value;
         drawScreen();
     }
     function textAlignChanged(e) {
         var target = e.target;
         textAlign = target.value;
         drawScreen();
     }
     function shadowXChanged(e) {
         var target = e.target;
         shadowX = target.value;
         drawScreen();
     }
     function shadowYChanged(e) {
         var target = e.target;
         shadowY = target.value;
         drawScreen();

     }
     function shadowBlurChanged(e) {
         var target = e.target;
         shadowBlur = target.value;
         drawScreen();
     }
     function shadowColorChanged(e) {
         var target = e.target;
         shadowColor = target.value;
         drawScreen();
     }
     function textAlphaChanged(e) {
        var target = e.target;
        textAlpha = target.value;
        drawScreen();
     }
     function textFillColor2Changed(e) {
         var target = e.target;
         textFillColor2 = '#' + target.value;
         drawScreen();
     }
     function fillTypeChanged(e) {
         var target = e.target;
         fillType = target.value;
         drawScreen();
     }
     function canvasWidthChanged(e) {
         var target = e.target;
         theCanvas.width = target.value;
         drawScreen();
     }
     function canvasHeightChanged(e) {
         var target = e.target;
         theCanvas.height = target.value;
         drawScreen();
     }

     function createImageDataPressed(e) {
         var imageDataDisplay = document.getElementById('imageDataDisplay');
         imageDataDisplay.value = theCanvas.toDataURL();
         window.open(imageDataDisplay.value,"canvasImage","left=0,top=0,width="
         + theCanvas.width + ",height="+theCanvas.height +
         ",too;bar=0,resizable=0");
     }

    drawScreen();
    EventListener();

    function drawScreen() {

        context.clearRect(0,0,500,450);

        context.globalAlpha = 1;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.shadowBlur = 0;
        context.shadowColor = '#707070';
        context.strokeStyle = '#000000';
        context.lineWidth = 5;
        context.strokeRect(0,0,theCanvas.width,theCanvas.height);

        context.globalAlpha = textAlpha;
        context.shadowOffsetX = shadowX;
        context.shadowOffsetY = shadowY;
        context.shadowBlur = shadowBlur;
        context.shadowColor = '#' + shadowColor;
        context.textBaseline = textBaseline;
        context.textAlign = textAlign;
        context.font = fontWeight + " " + fontStyle + " " + fontSize+"px "+fontFace;

        var x = theCanvas.width/2;
        var y = theCanvas.height/2;

        var metrics = context.measureText(message);
        var textWidth = metrics.width;

        var tempColor;
        if (fillType === 'colorFill'){
            tempColor = textFillColor;
        }else if (fillType === "linearGradient"){
            var gradient = context.createLinearGradient(x,y,textWidth,y);
            gradient.addColorStop(0,textFillColor);
            gradient.addColorStop(.6,textFillColor2);
            tempColor = gradient;
        }else if(fillType === 'radialGradient'){
            gradient = context.createRadialGradient(x,y,fontSize,x+textWidth,y,1);
            gradient.addColorStop(0,textFillColor);
            gradient.addColorStop(.6,textFillColor2);
            tempColor = gradient;
            console.log(tempColor);
        }else {
            tempColor = textFillColor;
        }



        switch (fillOrStroke){
            case "fill":
                context.fillStyle = textFillColor;
                context.fillText(message,x,y);
                break;
            case "stroke":
                context.strokeStyle = textFillColor;
                context.strokeText(message,x,y);
                break;
            case "both":
                context.fillStyle = textFillColor;
                context.fillText(message,x,y);
                context.strokeStyle = textFillColor;
                context.strokeText(message,x,y);
                break;
        }
    }
}