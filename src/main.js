const RESULT_SELECTOR = 'div .rc';
const FAVICON_API = 'https://www.google.com/s2/favicons?domain=';
const FAVICON_SIZE = 14;
const FAVICON_MARGIN = 4;

void function addFavicons() {
  // Get all standard search results
  const results = document.querySelectorAll(RESULT_SELECTOR);

  results.forEach(res => {
    // Get the url and its domain
    const href = res.querySelector('a').getAttribute('href');
    const { hostname } = new URL(href);
    const faviconSrc = FAVICON_API + hostname;

    // Create favicon <img> element
    const el = new Image(FAVICON_SIZE, FAVICON_SIZE);
    el.src = faviconSrc;
    el.style.marginRight = FAVICON_MARGIN + 'px';

    const anchorEl = res.querySelector('cite');
    anchorEl.style.display = 'flex';
    anchorEl.style.alignItems = 'center';

    const actionMenuEl = res.querySelector('.action-menu');
    actionMenuEl && (actionMenuEl.style.marginLeft = FAVICON_SIZE + FAVICON_MARGIN + 'px');
    anchorEl.prepend(el);
  })
}();
