
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.line').fadeOut();
    } else {
        $('.line').fadeIn();
    }
});

  // Get a reference to "myhref".
    var myhref_1 = document.getElementById("myhref1");
    var myhref_2 = document.getElementById("myhref2");
    var myhref_3 = document.getElementById("myhref3");
    // Get a reference to "myfield".
    var slide = document.getElementById("slide");
    // Attach an event listener to "myhref", which gets notifier when "myhref" is clicked.
    myhref_1.addEventListener("click", function() {
        // "myhref" is click. So, uncheck "myfield"
        slide.checked = false;
    });
    myhref_2.addEventListener("click", function() {
        // "myhref" is click. So, uncheck "myfield"
        slide.checked = false;
    });
    myhref_3.addEventListener("click", function() {
        // "myhref" is click. So, uncheck "myfield"
        slide.checked = false;
    });


$("html").easeScroll({
    frameRate: 60,
    animationTime: 1200,
    stepSize: 90,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 10,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true
});



 var $togle = $(".toggle");
 var $hamburger = $(".menu-btn");
  $togle.on("click", function(e) {
    $hamburger.toggleClass("menu-btn-active");
    // Do something else, like open/close menu
  });