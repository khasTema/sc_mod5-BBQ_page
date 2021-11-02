"use strict";

var emailCollectorForm = document.getElementById("Email-Collector");
emailCollectorForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var ourFormData = new FormData(event.target);
  var userFirstName = ourFormData.get("firstName");
  var userMail = ourFormData.get("emailAddress");
  var updatedHtmlContent = "\n        <h2>Congratulations, ".concat(userFirstName, "!</h2>\n\n        <p>You're on your way to becoming a BBQ Master!</p>\n        \n        <p class=\"fine-print\">You will get weekly BBQ tips sent to: <span>").concat(userMail, "</span></p>\n    ");
  var ourMainContent = document.getElementById("Main-Content");
  ourMainContent.innerHTML = updatedHtmlContent;
});