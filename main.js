prediction_1 = ""
prediction_2 = ""

Webcam.set({
  width:350,
  height:300,
  image_format:'png',
  png_quality:90
});
camera = document.getElementById("camera");
webcam.attach('#camera');
function take_snapshot() {
  Webcam.snap(function (data_uri){
  document.getElementById("result").innerHTML = '<img id = "captured_image" src ="'+data_uri+'"/>';
})};
console.log('ml5 version:', ml5.version);
classifier = ml5.image.Classifier('https://teachablemachine.withgoogle.com/models/aPl-NL-RT/model.json', modelLoaded);
function modelLoaded() {
  console.log('model loaded!');
}
function speak() {
  var synth = Window.speechSynthesis;
  speech_data_1 = "La primera prediccion es "+prediction_1;
  speech_data_2 = "La segunda prediccion es "+prediction_2;
}
function modelLoaded() {
    console.log('modelLoaded!');
}
function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
      console.error(error);
    }
    else {
      console.log(results);
      document.getElementById("result_emotion_name").innerHTML = results[0].label;
      document.getElementById("result_emotion_name2").innerHTML = results[1].label;
      prediction_1 = results[0].label;
      prediction_2 = results[1].label;
      speak();
    }
    if (results[0].label == "Paz") {
      document.getElementById("update_emoji").innerHTML = "&#x270C;";
    }
    
    if (results[0].label == "Bien") {
      document.getElementById("update_emoji").innerHTML = "&#128077;";
    }

    if (results[0].label == "Hola") {
      document.getElementById("update_emoji").innerHTML = "&#9995;";
    }
}