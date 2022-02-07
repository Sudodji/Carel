jQuery(document).ready(function() {
    var scroll_btn = $('#scroll-button');  
    $(window).scroll(function() {     
      if ($(window).scrollTop() > 300) {
        document.getElementById("scroll-button").style.display = "inline-block";
       } else {
        document.getElementById("scroll-button").style.display = "none";
       }
     });
     scroll_btn.on('click', function(e) {
       e.preventDefault();
       $('html, body').animate({scrollTop:0}, 1);
     });
  });
  