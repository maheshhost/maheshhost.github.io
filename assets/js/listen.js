var speakbtn = document.getElementById('speakbtn').addEventListener('click', textToSpeech, false);
var stop =  document.getElementById('stopbtn').addEventListener('click', stopListening, false);

function textToSpeech() {
  var messageRecord = document.getElementById('data').value;
  if(messageRecord === '') {
    alert("plzz type in the text field");
    document.getElementById('data').focus();
  }else {
    readOutLoud(messageRecord);
    console.log("function textToSpeech is running");
    document.getElementById('stopbtn').classList.remove('stophide');
    document.getElementById('stopbtn').classList.add('stop');
  }
}

function readOutLoud(message) {
  console.log("readOutLoud started running");
  var speech = new SpeechSynthesisUtterance();

  // Set the text and voice attributes.
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

function stopListening() {
  window.speechSynthesis.cancel();
  console.log('cancelled listening');
  document.getElementById('stopbtn').classList.remove('stop');
  document.getElementById('stopbtn').classList.add('stophide');
}

