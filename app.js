// elements

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");

// Speeach Recognition setup

const SpeechRecognition = 
 window.SpeechRecognition || window.webkitSpeechRecognition;

 const recognition = new SpeechRecognition();

 // sr Start
 recognition.onstart = function(){
     console.log("vr active");
 };

 // sr result
 recognition.onresult = function(event) {
     let current = event.resultIndex;
     let transcript = event.results[current][0].transcript;
     // console.log(transcript);
     readOut(transcript)
 };

 // sr Stop
 recognition.onend = function(){
     console.log("vr deactive");
 };

 // sr continuos
 // recognition.continuous = true;

 startBtn.addEventListener("click", () => {
     recognition.start()
 });

 stopBtn.addEventListener("click", () => {
     recognition.stop();
 });


 // Charles speech 
 function readOut(message){
     const speech = new SpeechSynthesisUtterance();
     // different voices
     // const allVoices = speechSynthesis.getVoices();
     speech.text = message;
     // speech.voice = allVoices[36];
     speech.volume = 1;
     window.speechSynthesis.speak(speech);
     console.log("speaking out");
 }

// example

speakBtn.addEventListener("click", () => {
    readOut("hej, detta är spännande");
});

