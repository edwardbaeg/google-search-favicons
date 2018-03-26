const GOOG_SRC = 'https://www.google.com/s2/favicons?domain=';

function getFaviconSRC(site) {
  var url = new URL(site);
  return GOOG_SRC + url.hostname;
}

function createFavicon(searchResult) {
  var resultURL = $(searchResult).find('a:first').attr('href');
  var src = getFaviconSRC(resultURL);
  return $('<img>', {
      class:'favicon',
      src: src,
      width: '16',
      height: '16'
    });
}

$(document).ready(function() {
  $("div.rc > h3").each(function() {
    var $favicon = createFavicon(this);
    $(this).prepend($favicon);
  });
});
