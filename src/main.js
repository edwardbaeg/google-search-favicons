/**
 * Get favicon url
 * @param {string} site The site url
 * @returns {string} The favicon url
 */
const getFaviconSRC = (site) => {
  const GOOG_SRC = 'https://www.google.com/s2/favicons?domain=';
  const url = new URL(site);
  return GOOG_SRC + url.hostname;
};

/**
 * Create favicon img element
 * @param {HTMLNode} searchResult The result link
 * @returns {HTMLNode}
 */
const createFavicon = (searchResult) => {
  const resultURL = searchResult.querySelector('a').getAttribute('href');
  const faviconSrc = getFaviconSRC(resultURL);
  const IMG = new Image(16, 16);
  IMG.src = faviconSrc;
  IMG.classList.add('favicon');
  return IMG;
};

const addFavicons = (() => {
  document.querySelectorAll('div .rc').forEach(div => {
    const faviconIMG = createFavicon(div);
    div.querySelector('a').prepend(faviconIMG);
  });
})();
