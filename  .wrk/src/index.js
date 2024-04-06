import { URL } from 'node:url';
import { JSDOM } from 'jsdom';

const normalizeLink = (link) => {
  const normalizedLink = link.toLowerCase()
    .startsWith('http')
    ? new URL(link).hostname
    : new URL(`http://${link}`).hostname
  return `http://${normalizedLink}`;
}

const fetchData = async (url) => await fetch(url);

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

const hasWPRobotRules = async (link) => {
  const robotsPageUrl = new URL('/robots.txt', link).href;
  const response = await fetchData(robotsPageUrl);

  if (response.status === 200) {
    const robotsText = await response.text();
    return robotsText.includes('wp-admin');
  }

  return false;
}

const hasWordPress = async (link) => {
    const normalizedLink = normalizeLink(link);

    const results = await Promise.all([hasWPAdminPanel(normalizedLink), hasWPScripts(normalizedLink), hasWPRobotRules(normalizedLink)]);
    const successfulIndicatorsCount = results.filter(result => result === true).length;

    return (successfulIndicatorsCount >= 2);
}

export default hasWordPress;
