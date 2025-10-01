const firebaseConfig = {
    apiKey: "AIzaSyDQ--Eesako_yLSL1SEyqNIlnD8bAKWMi4",
    authDomain: "chat-c7b61.firebaseapp.com",
    databaseURL: "https://chat-c7b61-default-rtdb.firebaseio.com",
    projectId: "chat-c7b61",
    storageBucket: "chat-c7b61.firebasestorage.app",
    messagingSenderId: "896714060347",
    appId: "1:896714060347:web:320ef2ebc5be79a6d4a21e"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};