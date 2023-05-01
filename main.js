var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function save(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if(content == "selfie"){
        speak();
        Webcam.attach(camera);
    }
    setTimeout(function(){
        download();
    }, 5000);
}

function speak(){
    var synthesis = window.speechSynthesis;
    setTimeout(function(){
        img_id = "selfie1";
        takesnapshot();
        speakdata = "Taking your selfie in 5 seconds";
        utterthis = new SpeechSynthesisUtterance(speakdata);
        synthesis.speak(utterthis);
    }, 5000);
    setTimeout(function(){
        img_id = "selfie2";
        takesnapshot();
        speakdata = "Taking your selfie in 5 seconds";
        utterthis = new SpeechSynthesisUtterance(speakdata);
        synthesis.speak(utterthis);
    }, 10000);
    setTimeout(function(){
        img_id = "selfie3";
        takesnapshot();
    }, 15000);
}

Webcam.set({
    width: 360,
    height: 250,
    img_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera")

function takesnapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML = '<img id = "selfie1" src = "'+data_uri+'">';
        }
        if(img_id == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id = "selfie2" src = "'+data_uri+'">';
        }
        if(img_id == "selfie3"){
            document.getElementById("result3").innerHTML = '<img id = "selfie3" src = "'+data_uri+'">';
        }
    });
}

function download(){
    link = document.getElementById("link");
    image = document.getElementById("selfie1").src;
    link.href = image;
    link.click();
    image = document.getElementById("selfie2").src;
    link.href = image;
    link.click();
    image = document.getElementById("selfie3").src;
    link.href = image;
    link.click();
}