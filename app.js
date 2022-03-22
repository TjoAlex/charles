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
     transcript = transcript.toLowerCase();
     console.log(`my words: ${transcript}`);

     if(transcript.includes("hej charles")){
         readOut("hej");
     }
     if(transcript.includes("öppna youtube")){
         readOut("öppnar youtube för dig nu");
         window.open("https://www.youtube.com/");
     }
     if(transcript.includes("öppna google")){
        readOut("öppnar google nu");
        window.open("https://www.google.se/");
    }
    // google search 

    if(transcript.includes("sök")){
        readOut("här är dina resultat");
        let input = transcript.split("");
        input.splice(0, 11);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.google.se/search?q=${input}`)
    }

    if(transcript.includes("öppna mail")){
        readOut("öppnar din mail");
        window.open("https://outlook.live.com/mail/0/");
    }
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
     // speech.voice = allVoices[0];
     speech.volume = 1;
     window.speechSynthesis.speak(speech);
     console.log("speaking out");
 }

// example

speakBtn.addEventListener("click", () => {
    readOut("hej, detta är spännande");
});

