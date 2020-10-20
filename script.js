mybutton = document.getElementById("MyBTN");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() 
{
  if (document.body.scrollTop > 100000 || document.documentElement.scrollTop > 1250) {
    MyBTN.style.display = "block";
  } else {
    MyBTN.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Pre-Load And Iframe Delay
setTimeout(function(){
  $('#loader-bg').fadeToggle("fast");
  }, 250);
  function load() {
  setTimeout(function(){
    document.querySelector('#embeded').style.display = 'block';
  }, 1500);
  }

