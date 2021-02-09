//* Scroll Reveal *//

ScrollReveal().reveal("#navbar", { duration: 1500 });

ScrollReveal().reveal(".jumbotron", {
  delay: 500,
  useDelay: "onload",
  reset: true,
});

ScrollReveal().reveal("#about", {
  delay: 500,
  useDelay: "onload",
  reset: true,
});

ScrollReveal().reveal("#projects", {
  delay: 500,
  useDelay: "onload",
  reset: true,
});

ScrollReveal().reveal("#contact", {
  delay: 500,
  useDelay: "onload",
  reset: true,
});

//* End Scroll Reveal *//

//* Closes Navbar Toggle *//

$(document).on("click", function () {
  $(".collapse").collapse("hide");
});

//* End Closes Navbar Toggle *//

function sendMail(contactForm) {
  let alert = document.querySelector(".alert");
  emailjs
    .send("service_36zv07k", "template_1ce679m", {
      name: contactForm.name.value,
      emailInput: contactForm.emailInput.value,
      messageForm: contactForm.messageForm.value,
    })
    .then(
      function (response) {
        alert.textContent =
          "Email sent successfully. I'll send you a reply as soon as possible.";
        // Clear error after 3 seconds
        setTimeout(clearError, 3000);
        alert.classList.add("show");
      },
      function (error) {
        alert.textContent = "Opps! Something went wrong. Please try again.";
        // Clear error after 3 seconds
        setTimeout(clearError, 5000);
        alert.classList.add("show");
      }
    );
  return false; // To block from loading a new page
}

// Clear error
function clearError() {
  document.querySelector(".alert").remove();
}
