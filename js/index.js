document.querySelector('#lastmod').textContent = document.lastModified;

const d = new Date();

const currentYear = d.getFullYear();

document.querySelector('#currentYear').textContent = currentYear;