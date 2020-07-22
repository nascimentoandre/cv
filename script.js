const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const languageOptions = document.getElementsByClassName("language-options")[0];
let displayLanguage = document.getElementById("display-language");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

displayLanguage.addEventListener("click", () => {
  languageOptions.classList.toggle("active");
});

document.querySelector("footer p").prepend("© "+new Date().getFullYear()+" ");

var scroll = $(document).scrollTop();
var navHeight = $(".navbar").outerHeight();

$(window).scroll(function() {
  var scrolled = $(document).scrollTop();

  if (scrolled > navHeight) {
    $(".navbar").addClass("animate");
  } else {
    $(".navbar").removeClass("animate");
  }

  if (scrolled > scroll) {
    $(".navbar").removeClass("sticky");
  } else {
    $(".navbar").addClass("sticky");
  }

  scroll = $(document).scrollTop();
});
