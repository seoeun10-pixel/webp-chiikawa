console.log("complete");
console.log($(window).width());
console.log($(window).height());

let wWidth = $(window).width();
let wHeight = $(window).height();

console.log(wWidth);
console.log(wHeight);

$(document).on("mousemove", function (event) {
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);

  let imgWidth = $(".character-img").width();
  let imgHeight = $(".character-img").height();

  $(".character-img").css("left", mouseX);
  $(".character-img").css("top", mouseY);
});

$(".pinkfire-img").on("click", function () {
  $(".pinkfire-img").css("top", "60%");
});

$(".bluefire-img").on("click", function () {
  $(".bluefire-img").css("top", "30%");
});

$(".yellowfire-img").on("click", function () {
  $(".yellowfire-img").css("top", "60%");
});

$(document).on("click", function (event) {
  let mouseX = event.pageX;
  let mouseY = event.pageY;
  $(".dust-img").css("transition", "none");
  $(".dust-img").css("left", mouseX - -40);
  $(".dust-img").css("top", mouseY - 10);
  $(".dust-img").css("width", "30px");
  $(".dust-img").css("opacity", "1");
  setTimeout(function () {
    $(".dust-img").css("transition", "0.4s");
    $(".dust-img").css("width", "50px");
    $(".dust-img").css("opacity", "0");
  }, 10);
});

$(".text-img").on("click", function () {
  $(".text-img").css("opacity", "1");
});
