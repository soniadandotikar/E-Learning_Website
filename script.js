// Feature 1: Signing up online
function signUp() {
    // Get the username and password from the user.
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Check if the username and password are valid.
    if (username == "" || password == "") {
      alert("Please enter a username and password.");
      return;
    }
    // Create a new user account.
    var user = {
      username: username,
      password: password
    };
    // Save the user account to the database.
    $.ajax({
      url: "/api/users",
      type: "POST",
      data: JSON.stringify(user),
      contentType: "application/json",
      success: function(response) {
        // The user account has been created successfully.
        alert("Your account has been created successfully.");
        window.location.href = "/home";
      },
      error: function(error) {
        // There was an error creating the user account.
        alert("There was an error creating your account. Please try again later.");
      }
    });
  }
  // Feature 2: Facility of uploading documents online
  function uploadDocument() {
    // Get the file from the user.
    var file = document.getElementById("file").files[0];
    // Check if the file is valid.
    if (file == null) {
      alert("Please select a file to upload.");
      return;
    }
    // Upload the file to the server.
    $.ajax({
      url: "/api/documents",
      type: "POST",
      data: file,
      contentType: file.type,
      success: function(response) {
        // The file has been uploaded successfully.
        alert("Your file has been uploaded successfully.");
      },
      error: function(error) {
        // There was an error uploading the file.
        alert("There was an error uploading your file. Please try again later.");
      }
    });
  }
  // Feature 3: Responsive Design
function responsive() {
    // Get the width of the window.
    var width = window.innerWidth;
    // If the width is less than 768 pixels, then make the layout responsive.
    if (width < 768) {
      // Change the layout to be responsive.
      document.getElementById("main").classList.add("responsive");
    } else {
      // Change the layout to be not responsive.
      document.getElementById("main").classList.remove("responsive");
    }
  }
  // Feature 4: Online Assessments
  function takeAssessment() {
    // Get the assessment id from the user.
    var assessmentId = document.getElementById("assessmentId").value;
    // Check if the assessment id is valid.
    if (assessmentId == "") {
      alert("Please enter an assessment id.");
      return;
    }
    // Load the assessment.
    $.ajax({
      url: "/api/assessments/" + assessmentId,
      type: "GET",
      success: function(response) {
        // The assessment has been loaded successfully.
        var assessment = response.data;
        // Show the assessment.
        document.getElementById("assessment").innerHTML = assessment.html;
      },
      error: function(error) {
        // There was an error loading the assessment.
        alert("There was an error loading the assessment. Please try again later.");
      }
    });
  }
  // Feature 5: Future of e-learning
function futureOfELearning() {
    // Get the future of e-learning from the user.
    var futureOfELearning = document.getElementById("futureOfELearning").value;
    // Check if the future of e-learning is valid.
    if (futureOfELearning == "") {
      alert("Please enter a future of e-learning.");
      return;
    }
    // Save the future of e-learning to the database.
    $.ajax({
      url: "/api/future-of-e-learning",
      type: "POST",
      data: {
        futureOfELearning: futureOfELearning
      },
      success: function(response) {
        // The future of e-learning has been saved successfully.
        alert("The future of e-learning has been saved successfully.");
      },
      error: function(error) {
        // There was an error saving the future of e-learning.
        alert("There was an error saving the future of e-learning. Please try again later.");
      }
    });
  }
  // Feature 6: Communication through LMS
  function communicationThroughLMS() {
    // Get the message from the user.
    var message = document.getElementById("message").value;
    // Check if the message is valid.
    if (message == "") {
      alert("Please enter a message.");
      return;
    }
    // Send the message to the LMS.
    $.ajax({
      url: "/api/messages",
      type: "POST",
      data: {
        message: message
      },
      success: function(response) {
        // The message has been sent successfully.
        alert("The message has been sent successfully.");
      },
      error: function(error) {
        // There was an error sending the message.
        alert("There was an error sending the message. Please try again later.");
      }
    });
  }
  // Feature 7: Admin Dashboards
function adminDashboards() {
    // Get the user's role.
    var role = document.getElementById("role").value;
    // Check if the user is an administrator.
    if (role == "administrator") {
      // Show the admin dashboard.
      document.getElementById("admin-dashboard").style.display = "block";
    } else {
      // Hide the admin dashboard.
      document.getElementById("admin-dashboard").style.display = "none";
    }
  }


  
function showCourseDetails(courseId) {
  const courseDetails = document.getElementById(courseId);
  if (courseDetails) {
    courseDetails.classList.toggle('show');
  }
}


function submitAnswers() {
  const questions = document.getElementsByClassName('questions')[0].getElementsByTagName('li');
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const selectedAnswer = questions[i].querySelector('input[type="radio"]:checked');
    if (selectedAnswer) {
      const answerValue = selectedAnswer.value;
      if (answerValue === 'HTML,CSS,and JavaScript' || answerValue === 'Decision Tree' || answerValue === 'Data Deletion' || answerValue === 'Django' || answerValue === 'Software as a Service' || answerValue === 'type(variable)') {
        score++;
      }
    }
  }

  alert('You scored ' + score + ' out of ' + questions.length + ' questions!');
}


function checkAnswer(questionName) {
  const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);

  if (selectedAnswer) {
    const answerValue = selectedAnswer.value;
    let correctAnswer;

    switch (questionName) {
      case 'q1':
        correctAnswer = 'HTML,CSS,and JavaScript';
        break;
      case 'q2':
          correctAnswer = 'Decision Tree';
          break;
      case 'q3':
            correctAnswer = 'Data Deletion';
            break;
      case 'q4':
        correctAnswer = 'Django';
        break;
      case 'q5':
        correctAnswer = 'Software as a Service';
        break;
      case 'q6':
        correctAnswer = 'type(variable)';
        break;  

      default:
        break;
    }

    if (answerValue === correctAnswer) {
      alert('Correct answer!');
    } else {
      alert('Incorrect answer. Try again!');
    }
  } else {
    alert('Please select an answer before submitting.');
  }
}
