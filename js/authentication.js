// log in sign up
// Open registration modal when register button is clicked
document.getElementById('registerButton').addEventListener('click', function() {
	document.getElementById('registrationModal').style.display = 'block';
  });
  
  // Close registration modal when close button is clicked
  document.querySelectorAll('.close').forEach(function(closeButton) {
	closeButton.addEventListener('click', function() {
	  document.querySelectorAll('.modal').forEach(function(modal) {
		modal.style.display = 'none';
	  });
	});
  });
  
  // Open login modal when login link is clicked
  document.getElementById('loginLink').addEventListener('click', function() {
	document.getElementById('registrationModal').style.display = 'none';
	document.getElementById('loginModal').style.display = 'block';
  });
  
  // Open registration modal when sign up link is clicked
  document.getElementById('signupLink').addEventListener('click', function() {
	document.getElementById('loginModal').style.display = 'none';
	document.getElementById('registrationModal').style.display = 'block';
  });
  


  let logINBtn = document.getElementById('logINBtn');
  let registerButton = document.getElementById('registerButton');
let userIcon=document.getElementById('userIcon')
  
  logINBtn.addEventListener('click', () => {
    console.log("Hello");
    registerButton.style.display = 'none';
    userIcon.style.display='block'
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('registrationModal').style.display = 'none';
  });
  
  
  

  function SpeechRecog() {
    var output = document.getElementById("output");
    var action = document.getElementById("action");
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<small>listening, please speak...</small>";
        // Clear action text after 2 seconds
        setTimeout(function() {
            action.innerHTML = "";
        }, 2000);
    };

    recognition.onspeechend = function() {
        action.innerHTML = "<small>stopped listening, hope you are done...</small>";
        recognition.stop();
        // Clear action text after 2 seconds
        setTimeout(function() {
            action.innerHTML = "";
        }, 2000);
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        output.value = transcript;
    };

    // start recognition
    recognition.start();
}
