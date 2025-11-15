/* ---------------------------------------------------- */
/* Assignment W03 - Country Page - JavaScript Logic     */
/* ---------------------------------------------------- */

// 1. Populate current year and last modified date in the footer
document.addEventListener('DOMContentLoaded', () => {
    // Current Year
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    // Last Modified Date (uses the document's last modified property)
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});


// 2. Windchill Calculation Function and Display Logic

// Static values for Temperature and Wind Speed (Metric - °C and km/h)
const tempCelsius = 5;       // Static Temperature in °C (matches HTML content)
const speedKMH = 10;        // Static Wind Speed in km/h (matches HTML content)

const windchillElement = document.getElementById('windchill-value');

/**
 * Calculates the wind chill factor using the Metric formula.
 * Formula: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
 * Where T is air temperature in Celsius (°C) and V is wind speed in kilometers per hour (km/h).
 * * @param {number} temp - Air temperature in °C.
 * @param {number} windSpeed - Wind speed in km/h.
 * @returns {number} The calculated windchill factor, rounded to the nearest integer.
 */
function calculateWindChill(temp, windSpeed) {
    // REQUIRED: One line of code returning the result of the windchill calculation
    return Math.round(13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16)));
}

// Function to check conditions and display the result
function displayWindChill() {
    // Conditions for Viable Wind Chill Calculation (Metric)
    // Temperature <= 10 °C AND Wind speed > 4.8 km/h
    if (tempCelsius <= 10 && speedKMH > 4.8) {
        const windChill = calculateWindChill(tempCelsius, speedKMH);
        windchillElement.textContent = `${windChill} °C`;
    } else {
        // REQUIRED: Display "N/A" if conditions are not met
        windchillElement.textContent = "N/A";
    }
}

// Call the function to calculate and display windchill on page load
displayWindChill();