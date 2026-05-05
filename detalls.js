document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    menuBtn.addEventListener("click", function() {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", function() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
});









//cars data
const carsData = [
    { id: 1, brand: 'BMW', model: 'BMW M4 Competition', year: 2022, price: 65000, type: 'Sedan', speed: '290', engine: '3.0L Twin Turbo', hp: '510', gearbox: 'automatic', color: 'green', img: ['images/2021-BMW-M4-Competition-004-1600.jpg.jpeg'], },
    { id: 2, brand: 'BMW', model: 'BMW X6 M Sport', year: 2024, price: 72000, type: 'SUV', speed: '250', engine: '3.0L Turbo', hp: '340', gearbox: 'automatic', color: 'gray', img: ['images/2024-BMW-X6-M-Competition-002-1080.jpg.jpeg'], },
    { id: 3, brand: 'BMW', model: 'BMW 7 Series', year: 2024, price: 70000, type: 'SUV', speed: '270', engine: '3.0L Turbo', hp: '310', gearbox: 'automatic', color: 'black', img: ['images/2027-BMW-7-Series-005-1080.jpg.jpeg'], },
    { id: 4, brand: 'BMW', model: 'BMW Skytop', year: 2025, price: 58000, type: 'Sports', speed: '280', engine: '2.0L Turbo', hp: '258', gearbox: 'automatic', color: 'blue', img: ['images/2025-BMW-Skytop-003-1600.jpg.jpeg'], },
    { id: 5, brand: 'FERRARI', model: 'Ferrari 456M GT', year: 2001, price: 300000, type: 'Luxury', speed: '180', engine: '3.9L Twin Turbo', hp: '660', gearbox: 'manual', color: 'gray', img: ['images/2001-Ferrari-456M-GT-004-1080.jpg.jpeg'], },
    { id: 6, brand: 'FERRARI', model: 'Ferrari Roma', year: 2023, price: 220000, type: 'GT', speed: '320', engine: '3.9L Twin Turbo', hp: '620', gearbox: 'automatic', color: 'red', img: ['images/2016-Ferrari-488-GTB-008-1080.jpg.jpeg'], },
    { id: 7, brand: 'FERRARI', model: 'Ferrari Portofino M', year: 2021, price: 255000, type: 'Cabrio', speed: '315', engine: '3.9L V8 Turbo', hp: '630', gearbox: 'automatic', color: 'gray', img: ['images/2021-Ferrari-Portofino-M-002-1080.jpg.jpeg'], },
    { id: 8, brand: 'MERCEDES', model: 'Mercedes-Maybach S580', year: 2024, price: 600000, type: 'Luxury', speed: '250', engine: '3.0L V6 Turbo', hp: '435', gearbox: 'automatic', color: 'red', img: ['images/2021-Mercedes-Maybach-S-580-004-1080.jpg.jpeg'], },
    { id: 9, brand: 'MERCEDES', model: 'Mercedes-AMG CLE53', year: 2024, price: 165000, type: 'SUV', speed: '220', engine: '4.0L V8 Biturbo', hp: '585', gearbox: 'automatic', color: 'black', img: ['images/2024-Mercedes-AMG-CLE53-003-1080.jpg.jpeg'], },
    { id: 10, brand: 'MERCEDES', model: 'Mercedes-Benz EQS', year: 2023, price: 108000, type: 'Sedan', speed: '290', engine: '2.0L Turbo AMG', hp: '476', gearbox: 'automatic', color: 'black', img: ['images/2022-Mercedes-Benz-EQS-007-1080.jpg.jpeg'], },
    { id: 14, brand: 'AUDI', model: 'Audi S8 L 60 TFSI', year: 2022, price: 188000, type: 'Sedan', speed: '250', engine: '6.0L W12 Turbo', hp: '585', gearbox: 'automatic', color: 'black', img: ['images/2022-Audi-S8-007-1080.jpg.jpeg'], },
    { id: 15, brand: 'AUDI', model: 'Audi A6 E-Tron', year: 2021, price: 215000, type: 'Sport', speed: '305', engine: '4.0L V8 Biturbo', hp: '630', gearbox: 'automatic', color: 'white', img: ['images/2021-Audi-A6-E-Tron-Concept-007-1080.jpg.jpeg'], },
    { id: 16, brand: 'AUDI', model: 'Audi SQ8 E-Tron Quattro', year: 2024, price: 192000, type: 'SUV', speed: '200', engine: 'Electric Dual', hp: '408', gearbox: 'automatic', color: 'black', img: ['images/2024-Audi-SQ8-E-Tron-Quattro-008-1080.jpg.jpeg'], },
    { id: 17, brand: 'PORSCHE', model: 'Porsche 911 GT3', year: 2024, price: 175000, type: 'Sports', speed: '318', engine: '4.0L Flat-6', hp: '510', gearbox: 'PDK', color: 'white', img: ['images/2004-Porsche-911-GT3-RS-002-1080.jpg.jpeg'], },
    { id: 18, brand: 'PORSCHE', model: 'Porsche Cayenne Turbo', year: 2024, price: 140000, type: 'SUV', speed: '285', engine: '4.0L V8 Biturbo', hp: '650', gearbox: 'automatic', color: 'blue', img: ['images/2022-Porsche-Cayenne-Turbo-GT-009-1080.jpg.jpeg'], },
    { id: 19, brand: 'LAMBORGHINI', model: 'Lamborghini Urus S', year: 2022, price: 250000, type: 'SUV', speed: '306', engine: '4.0L V8 Biturbo', hp: '666', gearbox: 'automatic', color: 'gray', img: ['images/2023-Lamborghini-Urus-S-005-1080.jpg.jpeg'], },
    { id: 20, brand: 'LAMBORGHINI', model: 'Lamborghini Huracán EVO', year: 2023, price: 280000, type: 'Sports', speed: '325', engine: '5.2L V10', hp: '640', gearbox: 'LDF', color: 'yellow', img: ['images/2021-Lamborghini-Huracan-EVO-RWD-001-1080.jpg.jpeg'], },
    { id: 21, brand: 'FORD', model: 'Ford Mustang GT500', year: 2024, price: 178000, type: 'Muscle', speed: '290', engine: '5.2L V8 SC', hp: '760', gearbox: 'manual', color: 'black', img: ['images/2026-Ford-Mustang-GTD-Liquid-Carbon-002-1080.jpg.jpeg'], },
    { id: 22, brand: 'FORD', model: 'Ford Bronco Raptor', year: 2024, price: 68000, type: 'Sedan', speed: '250', engine: '3.0L EcoBoost V6', hp: '418', gearbox: 'automatic', color: 'green', img: ['images/2015-Ford-Taurus-SHO-002-1080.jpg.jpeg'], },
];


let activeBrand = "ALL";
let currentPage = 1;
const PER_PAGE = 8;
let filteredCars = [...carsData];

function filterBrand(brand) {
    activeBrand = brand;
    currentPage = 1;

    filteredCars = brand === "ALL" ? [...carsData] :
        carsData.filter(c => c.brand === brand);

    renderCars();
    renderPagination();
}


function renderCars() {
    const grid = document.getElementById("carsGrid");

    const start = (currentPage - 1) * PER_PAGE;
    const paginated = filteredCars.slice(start, start + PER_PAGE);

    grid.innerHTML = paginated.map(c => `
    <div class="car-card">
      <img src="${c.img}">
      <h3>${c.model}</h3>
      <p>Year: ${c.year}</p>
      <p>Type: ${c.type}</p>
      <p>Speed: ${c.speed} km/h</p>
      <p>Price: $${c.price.toLocaleString()}</p>
      <a href="detallis.html?id=${c.id}" class="btn-details">
      Show Details</a>
    </div>
  `).join("");
}


document.addEventListener("DOMContentLoaded", function() {
    var params = new URLSearchParams(window.location.search);
    var carId = parseInt(params.get('id'));

    var car = null;
    for (var i = 0; i < carsData.length; i++) {
        if (carsData[i].id === carId) {
            car = carsData[i];
            break;
        }
    }

    var content = document.getElementById('detailContent');

    if (!car) {
        content.innerHTML = '<div class="error-msg"><p>Car not found.</p><a href="gallary.html">← Back to Gallery</a></div>';
    } else {
        localStorage.setItem('lastViewed', car.id);

        content.innerHTML =
            '<img class="detail-img" src="' + car.img + '" alt="' + car.model + '">' +
            '<h1 class="detail-name" style="color:black;">' + car.model + '</h1>' +
            '<p class="detail-price">$' + car.price.toLocaleString() + '</p>' +
            '<table class="specs-table">' +
            '<caption>Full Specifications</caption>' +
            '<thead>' +
            '<tr><th>Specification</th><th>Details</th></tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr><td>Brand</td><td><span class="spec-badge">' + car.brand + '</span></td></tr>' +
            '<tr><td>Model</td><td>' + car.model + '</td></tr>' +
            '<tr><td>Year</td><td>' + car.year + '</td></tr>' +
            '<tr><td>Type</td><td>' + car.type + '</td></tr>' +
            '<tr><td>Engine</td><td>' + car.engine + '</td></tr>' +
            '<tr><td>Horsepower</td><td>' + car.hp + ' HP</td></tr>' +
            '<tr><td>Top Speed</td><td>' + car.speed + ' km/h</td></tr>' +
            '<tr><td>Gearbox</td><td>' + car.gearbox + '</td></tr>' +
            '<tr><td>Color</td><td>' + car.color + '</td></tr>' +
            '<tr><td>Price</td><td>$' + car.price.toLocaleString() + '</strong></td></tr>' +
            '</tbody>'
        '</table>';
    }
});

renderCars();
renderPagination();