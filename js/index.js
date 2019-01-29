window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

const myFunction = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onload = function() {
  $(".service-card").fadeIn("fast", function() {
    // place a shadow on the card
    $(this).css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2)");
    $(this).hover(function() { // enhance shadow on hover
      $(this).css("box-shadow", "0 8px 16px 0 rgba(0, 0, 0, 0.2)");
      }, 
      function() { // return to default shadow after hover ends
        $(this).css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2)");
      }
    );
  });
};