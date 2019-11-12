// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2y_vednwy0dEYUqcY27KIZlEmyUQEofM",
  authDomain: "events-dscku.firebaseapp.com",
  databaseURL: "https://events-dscku.firebaseio.com",
  projectId: "events-dscku",
  storageBucket: "",
  messagingSenderId: "845447173046",
  appId: "1:845447173046:web:eaa26d3034651313052717",
  measurementId: "G-VNJM8D0PTP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //Reference for form collection
  let formMessage = firebase.database().ref('REST_APIs');

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
          // title: `Hey...${username} 😍, Lets\' Flutter on Friday 😉`,
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