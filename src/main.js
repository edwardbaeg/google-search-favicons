const FAVICON_SIZE = 16;
const FAVICON_MARGIN = 6;

/**
 * Get favicon url
 * @param {HTMLNode} div The search result div
 * @returns {string} The favicon url
 */
const getFaviconURL = (div) => {
  const href = div.querySelector('a').getAttribute('href');
  const { hostname } = new URL(href);
  return `https://www.google.com/s2/favicons?domain=${hostname}`;
};

/**
 * Create favicon img element
 * @param {string} src The favicon url
 * @returns {HTMLNode}
 */
const createFavicon = (src) => {
  const faviconIMG = new Image(FAVICON_SIZE, FAVICON_SIZE);
  faviconIMG.src = src;
  faviconIMG.style.marginRight = `${FAVICON_MARGIN}px`;
  return faviconIMG;
};

/**
* Check if Google has rolled out native favicons
*  for the user's favicons
*/
const hasNativeFavicons = (el) => {
  const link = el.querySelector('a');
  const target = link.querySelector('img');
  return !!target;
}

/**
 * Add favicons to Google search results
 */
const addFavicons = (() => {
  document.querySelectorAll('div .rc').forEach(div => {
    const test = hasNativeFavicons(div);
    if (test) return;

    const faviconURL = getFaviconURL(div);
    const faviconIMG = createFavicon(faviconURL);

    const anchor = div.querySelector('a h3');
    anchor.prepend(faviconIMG);
    anchor.style.whiteSpace = 'nowrap';
  });
})();
