import { URL } from 'node:url';
import { JSDOM } from 'jsdom';

const normalizeLink = (link) => {
  const normalizedLink = link.toLowerCase()
    .startsWith('http')
    ? new URL(link).hostname
    : new URL(`http://${link}`).hostname
  return `http://${normalizedLink}`;
};

const normalizedLink = normalizeLink('https://vyachowski.wordpress.com');

const fetchData = async (url) => {
  try {
    return await fetch(url);
  } catch(e) {
    console.log(e);
  }
}

const hasWPAdminPanel = async (link) => {
  const adminPageUrl = new URL('/wp-admin/', link).href;
  const response = await fetchData(adminPageUrl);
  return (response.status === 200);
}

const hasWPScripts = async (link) => {
  const response  = await fetchData(link);
  const html = await response.text();

  const { document } = (new JSDOM(html)).window;
  const scripts = document.querySelectorAll('script');

  const scriptFileNames = Array
    .from(scripts)
    .map(script => script.src)
    .filter(name => name !== '');
  return scriptFileNames.some(name => name.includes('wp-content') || name.includes('wp-includes'));
}

const hasSpecialDisallowRule = async (link) => {
  const robotsPageUrl = new URL('/robots.txt', link).href;
  const response = await fetchData(robotsPageUrl);

  if (response.status === 200) {
    const robotsText = await response.text();
    return robotsText.includes('wp-admin');
  };

  return false;
}

const isWordpress = () => {
  return true;
}

export default isWordpress;
console.log(await hasSpecialDisallowRule(normalizedLink));
