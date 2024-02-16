const firebaseConfig =  {
    apiKey: "AIzaSyCYasxjoaQ3ZZGqC0RZ39voqJLIyshTh5s",
    authDomain: "feel-yourself-heal.firebaseapp.com",
    databaseURL: "https://feel-yourself-heal-default-rtdb.firebaseio.com",
    projectId: "feel-yourself-heal",
    storageBucket: "feel-yourself-heal.appspot.com",
    messagingSenderId: "1071617627465",
    appId: "1:1071617627465:web:38746fbc5e39ba07fbf698",
    measurementId: "G-HW8MF3R2CJ"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var feedback_registration = firebase.database().ref("feedback_registration");

document.getElementById("feedback_registration").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var first_name = getElementVal("first");
  var last_name = getElementVal("last")
  var mobile_number = getElementVal("mobile");
  var dob = getElementVal("dob");
  var email = getElementVal("email");
  var gender = getElementVal("gender");
  var feedback = getElementVal("feedback")
 

  saveMessages(first_name, last_name, mobile_number, dob ,email, gender, feedback);

  //   enable alert
  //document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("feedback_registration").reset();
}

const saveMessages = (first_name, last_name, mobile_number, dob ,email, gender, feedback) => {
  var newRegistration = feedback_registration.push();
  newRegistration.set({
    first_name: first_name,
    last_name:last_name,
    mobile_number:mobile_number,
    dob:dob,
    email:email,
    gender:gender,
    feedback:feedback
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};