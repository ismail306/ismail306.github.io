<?php
// Define variables and set to empty values
$name = $email = $message = $success = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $message = test_input($_POST["message"]);

  // Replace with your email address
  $to = "ismail.swe427.com";
  $subject = "New message from " . $name;
  $headers = "From: " . $email . "\r\n" .
             "Reply-To: " . $email . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  // Send the email
  if (mail($to, $subject, $message, $headers)) {
    $success = "Your message has been sent!";
  } else {
    $success = "There was an error sending your message.";
  }
}

// Helper function to sanitize input values
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
