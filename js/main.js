$(document).ready(function() {
  // fix the navigation to the top once we start to scroll the page.
  $(function() {
    var hero__header__navigation = $(".nav-default");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 30) {
        hero__header__navigation
          .removeClass("nav-default")
          .addClass("nav-fixed");
      } else {
        hero__header__navigation
          .removeClass("nav-fixed")
          .addClass("nav-default");
      }
    });
  });

  var images = ["hero-1.jpg", "hero-2.jpg", "hero-3.jpg"];
  $(".hero").css({
    "background-image":
      "url(img/" + images[Math.floor(Math.random() * images.length)] + ")"
  });

  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
