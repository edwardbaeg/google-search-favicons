const ICON_SRC = "https://www.google.com/s2/favicons?domain=";
// var $favicon = $('<img>', {id:'icon', src: ICON_SRC, width: "16", height: "16"}).css("image-rendering", "auto");

function getDomain(string) {
  var url = new URL(string);
  return url.hostname;
}

$(document).ready(function() {
  // var $text = $("<div></div>").text("Test").css({"color": "red", "display": "inline-block", "position": "relative"});
  // $("h3.r").prepend($favicon);
  $("h3.r").each(function() {
    var url = $(this).find("a").attr("href");
    var site = ICON_SRC + getDomain(url);
    var $favicon = $('<img>', {id:'icon', src: site, width: "16", height: "16"}).css("image-rendering", "auto");
    $(this).prepend($favicon);
  });
});