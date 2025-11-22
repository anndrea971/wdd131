const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;

// script for hamburger menu
const menuToggle = document.querySelector('.temples #hamburger');
const nav = document.querySelector('.temples nav')

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuToggle.textContent = nav.classList.contains('show') ? '✖' : '☰';
});

// array of temple objects from week 4 assignment
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/aba.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/manti.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/payson.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/yigo.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/washington-dc.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/lima.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/mexico-city.jpg"
  },
  {
    templeName: "Jordan River Utah",
    location: "South Jordan, Utah",
    dedicated: "1981, November, 16",
    area: 148236,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/jordan-river-temple-lds-941302-wallpaper.jpg"
  },
  {
    templeName: "Draper Utah",
    location: "Draper, Utah",
    dedicated: "2009, March, 20",
    area: 58300,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/draper-utah/400x250/draper-temple-759310-wallpaper.jpg"
  },
  {
    templeName: "Oquirrh Mountain Utah",
    location: "South Jordan, Utah",
    dedicated: "2009, August, 21",
    area: 60000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oquirrh-mountain-utah/400x400/oquirrh-mountain-temple-lds-766358-wallpaper.jpg"
  },
];

// filter and display temples
function displayTemples(filteredTemples) {

    // card creation
    const container = document.querySelector("#temples-container");
    container.innerHTML = ""; // clears previous cards

    // loop through the array
    filteredTemples.forEach(temple => {
        // card wrapper
        const card = document.createElement("div");
        card.classList.add("temple-card");

        // temple name
        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        // location
        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        // date of dedication
        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        // area
        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area} sq ft`;

        // lazy loading
        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        card.append(name, location, dedicated, area, image);
        container.appendChild(card);
    });
}

displayTemples(temples);

// event listeners
document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    const oldTemples = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year < 1900;
    });
    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
    const newTemples = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year > 2000;
    });
    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
});