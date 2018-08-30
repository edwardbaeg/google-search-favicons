const GOOG_SRC = 'https://www.google.com/s2/favicons?domain=';

const getFaviconSRC = (site) => {
  const url = new URL(site);
  return GOOG_SRC + url.hostname;
};

const createFavicon = (searchResult) => {
  const resultURL = $(searchResult).find('a:first').attr('href');
  const src = getFaviconSRC(resultURL);
  return $('<img>', {
    src,
    class:'favicon',
    width: '16',
    height: '16'
  });
};

$(document).ready(() => {
  $('div.rc').each(function() {
    const $favicon = createFavicon(this);
    $(this).find('a:first').prepend($favicon);
  });
});
