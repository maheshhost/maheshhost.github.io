var result = document.getElementById('results');
var recordbtn = document.getElementById('recordbtn').addEventListener('click', speechToText, false);
window.webkitSpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition

function stopSpeech() {
	document.getElementById('stopbtn').classList.remove('stop');
	document.getElementById('stopbtn').classList.add('stophide');
	console.log("speechRecognizer Stopped");
}

function speechToText() {
	if('webkitSpeechRecognition' in window) {
		var finalTranscripts = '';
		var speechRecognizer = new webkitSpeechRecognition();

		speechRecognizer.continuous = true;
		speechRecognizer.interimResults = false;
		// speechRecognizer.lang = 'en-US';
		speechRecognizer.lang = 'hi-In';
		speechRecognizer.maxAlternatives = 2;
		speechRecognizer.start();
		
		document.getElementById('stopbtn').classList.remove('stophide');
		document.getElementById('stopbtn').classList.add('stop');

		speechRecognizer.onresult = function(event) {
			var interimTranscripts = '';
			console.log('function speechRecognizer is running');
			for(var i = event.resultIndex; i < event.results.length; ++i) {
				var transcript = event.results[i][0].transcript;
				transcript.replace("\n", "<br>");
				if(event.results[i].isFinal) {
					finalTranscripts += transcript;
				}else {
					interimTranscripts += transcript;
				}
			}
			document.getElementById('results').innerHTML = finalTranscripts + "<span class='interim'>"+interimTranscripts+"</span>";
		}

		document.getElementById('stopbtn').onclick = function() {
			speechRecognizer.stop();
			stopSpeech();
		}

		speechRecognizer.onerror = function(event) {
			document.getElementById('results').innerHTML = "Error Occurred";
			speechRecognizer.stop();
		}
		
	}else {
		document.getElementById('results').innerHTML = "Your browser is not supported. If google chrome or firefox. Please upgrade";
	}
}

