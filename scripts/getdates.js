/**
 * WDD 131 - Dynamic Web Fundamentals
 * getdates.js
 * * JavaScript code to dynamically display the current year and
 * the last modification date in the footer.
 */

// 1. Dynamic Copyright Year
// Get the current year using the Date object
const currentYear = new Date().getFullYear();

// Set the current year in the span with id="currentyear"
document.getElementById('currentyear').textContent = currentYear;


// 2. Dynamic Last Modified Date
// Get the last modified date string using document.lastModified
const lastModifiedDate = document.lastModified;

// Set the date in the paragraph with id="lastModified"
// The assignment requires the content to be populated in the <p id="lastModified">
document.getElementById('lastModified').textContent = `Last Modification: ${lastModifiedDate}`;