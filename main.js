  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDF6McTuQ37_hrxX7cPZGSl5_R8s2hXUxY",
    authDomain: "contactform-5b411.firebaseapp.com",
    databaseURL: "https://contactform-5b411.firebaseio.com",
    projectId: "contactform-5b411",
    storageBucket: "",
    messagingSenderId: "515219951003"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages')

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm)

// Submit form
function submitForm(e) {
  e.preventDefault()

  //Get values
  var name = getInputVal('name')
  var email = getInputVal('email')
  var phone = getInputVal('phone')
  var message = getInputVal('message')

  // Save message
  saveMessage(name, email, phone, message)

  // Show alert
  document.querySelector('.alert').style.display = 'block'

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none'
  },3000)

  // Clear form
  document.getElementById('contact-form').reset()
}  

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value
}

// Save message to firebase 
function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push()
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  })
}