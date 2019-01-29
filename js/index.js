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

function showMore() {
  let htmlCollection = document.getElementsByClassName("more-cards");
  let elements = Array.from(htmlCollection);
  console.log("showMore() called");
  elements.map(element => {
    if (element.style.display != "block") {
      element.style.display = "block";
      document.getElementById("show-more-projects").innerText = "Show Less";
    } else {
      element.style.display = "none";
      document.getElementById("show-more-projects").innerText = "Show More";
    }
  });
}

window.onload = function() {
  $(".service-card").fadeIn("fast", function() {
    let htmlCollection = document.getElementsByClassName("service-card");
    let elements = Array.from(htmlCollection);
    elements.map(element => {
      $(element).hover(function() {
        $(this).css("box-shadow", "0 8px 16px 0 rgba(0, 0, 0, 0.2)");
        }, 
        function() {
          $(this).css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2)");
        }
      );
      
    });
  });
};