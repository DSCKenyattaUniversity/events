// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD5mQxiGQ9RQwfYTKgLUzaCIChAZPem40",
  authDomain: "dscku-register.firebaseapp.com",
  databaseURL: "https://dscku-register.firebaseio.com",
  projectId: "dscku-register",
  storageBucket: "dscku-register.appspot.com",
  messagingSenderId: "715362670942",
  appId: "1:715362670942:web:ee3accb3802a2bbfca57cf",
  measurementId: "G-LRBN2JFR5Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //Reference for form collection
  let formMessage = firebase.database().ref('INFO_SESSION');

  //listen for submit event//
  document
    .getElementById('addform')
    .addEventListener('submit', formSubmit);
  
  //Submit form
  function formSubmit(e) {
      e.preventDefault();
      // Get Values from the DOM
      let username = document.querySelector('#username').value;
      let email = document.querySelector('#email').value;
      let phone = document.querySelector('#phone').value;
      let course = document.querySelector('#course').value;
      let year = document.querySelector('#year').value;
    
      
      //send message values
      sendMessage(username, email, phone, course, year);
    
      //Show Alert Message
      // document.querySelector('.alert').style.display = 'block';
      Swal.fire({
          title: `See you soon 😉${username} 😍`,
          type: 'success',
          // style:'font-size: 1.6rem !important;',
          customClass: {
            popup: 'format-pre'
          }
      })
      document.querySelector('#registerModal').style.display = 'none';
    
      //Hide Alert Message After Seven Seconds(6)
    //   setTimeout(function() {
    //     document.querySelector('.alert').style.display = 'none';
    //   }, 7000);
    
      //Form Reset After Submission
      document.getElementById('addform').reset();
    }
    
    //Send Message to Firebase
    function sendMessage(username, email, phone, course, year) {
      let newFormMessage = formMessage.push();
      newFormMessage.set({
        username: username,
        email: email,
        phone: phone,
        course: course,
        year: year
      });
    }