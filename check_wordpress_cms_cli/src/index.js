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

const hasWPAdminPanel = async () => {
  const adminPageUrl = new URL('/wp-admin/', normalizedLink).href;
  const response = await fetchData(adminPageUrl);
  return (response.status === 200);
}

const hasWPScripts = async () => {
  const response  = await fetchData(normalizedLink);
  const html = await response.text();

  const { document } = (new JSDOM(html)).window;
  const scripts = document.querySelectorAll('script');

  const scriptFileNames = Array
    .from(scripts)
    .map(script => script.src)
    .filter(name => name !== '');
  return scriptFileNames.some(name => name.includes('wp-content'));
}

console.log(await hasWPScripts());
const hasSpecialDisallowRule = () => {

}

// const hasSpecialCookie = () => {

// }
