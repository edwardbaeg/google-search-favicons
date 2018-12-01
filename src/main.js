/**
 * Get favicon url
 * @param {HTMLNode} div The search result div
 * @returns {string} The favicon url
 */
const getFaviconURL = (div) => {
  const GOOGLE_SRC = 'https://www.google.com/s2/favicons?domain=';

  const site = div.querySelector('a').getAttribute('href');
  const { hostname } = new URL(site);
  return GOOGLE_SRC + hostname;
};

/**
 * Create favicon img element
 * @param {string} src The favicon url
 * @returns {HTMLNode}
 */
const createFavicon = (src) => {
  const faviconIMG = new Image(16, 16);
  faviconIMG.src = src;
  faviconIMG.style.marginRight = '5px';
  return faviconIMG;
};

/**
 * Adds favicons to all google search results
 */
const addFavicons = (() => {
  document.querySelectorAll('div .rc').forEach(div => {
    const faviconURL = getFaviconURL(div);
    const faviconIMG = createFavicon(faviconURL);
    div.querySelector('a').prepend(faviconIMG);
    div.querySelector('a').style.whiteSpace = 'nowrap';
  });
})();
