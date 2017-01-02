var size = 16;
var boxSize = 20;

$(document).ready(function() {
  makebox();
  $(".newgrid").click(function() {
    $('div').removeClass("hover");
    size = prompt("What size do you want the box to be?");
    if (size > 64) {size = 64};
    boxSize = 320/size;
    makeNew();
  });

  $(".reset").click(function() {
    $(".box").removeClass("hover")

  })
});

function makebox() {
  for (i=1;i<=size*size;i++) {
    $("#container").append("<div class='box'></div>");
  };
  $("#container").width(size*boxSize + "px");
  $(".box").width(boxSize + "");
  $(".box").height(boxSize + "px");
};

function makeNew() {
  $("#container").empty();
  makebox();
};

$(document).on("mouseenter", ".box", function() {
  $(this).addClass("hover");
});
