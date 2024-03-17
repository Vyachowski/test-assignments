import { URL } from 'node:url';

const normalizeLink = (link) => {
  const normalizedLink = link.toLowerCase()
    .startsWith('http')
    ? new URL(link).hostname
    : new URL(`http://${link}`).hostname
  return `http://${normalizedLink}`;
};

const normalizedLink = normalizeLink('https://vyachowski.wordpress.com');

const hasWpAdminPanel = async () => {
  const adminPageUrl = new URL('/wp-admin/', normalizedLink).href;
  const result = await fetch(adminPageUrl);

  return (result.status === 200);
}

console.log(await hasWpAdminPanel());

const hasWpScripts = () => {

}

const hasSpecialDisallowRule = () => {

}

// const hasSpecialCookie = () => {

// }
