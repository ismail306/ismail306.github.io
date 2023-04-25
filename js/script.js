
const emailjsKey = 'QrJS6SO3fIXZTYTSM';
const templateId = 'template_5287dhw';

// Replace YOUR_PUBLIC_KEY with your actual MailJS public key
const publicKey = "QrJS6SO3fIXZTYTSM";

// Function to send email using MailJS
function sendEmail(name, email, message) {
  emailjs.send("service_uein8be", "mtemplate_5287dhw", {
    name: name,
    email: email,
    message: message,
  }, publicKey)
  .then(function(response) {
    console.log("Email sent successfully!", response);
    // Add your success message or redirect to a thank you page here
  }, function(error) {
    console.error("Error sending email:", error);
    // Add your error message or redirect to an error page here
  });
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send the email using MailJS
  sendEmail(name, email, message);
}

// Add event listener to the form submit button
document.getElementById("contact-form").addEventListener("submit", handleFormSubmit);
