$(function () {
  $("ul").eq("2").find("li").first().css("background-color", "red");
  $("ul").eq("0").find("li").last().css("background-color", "blue");
  $("ul").eq("1").find("li").eq("2").css("background-color", "yellow");
});
