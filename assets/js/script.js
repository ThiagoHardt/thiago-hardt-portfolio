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
