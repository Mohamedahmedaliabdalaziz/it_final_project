//زرار المنيو
function toggleMenu() {
    let menu = document.getElementById("sidemenu");
    let menubtn = document.getElementById("menubtn");

    if (menu.style.width === "250px") {
        menu.style.width = "0";
        menu.style.padding = "0";
        menubtn.textContent = "☰ Menu";
    } else {
        menu.style.width = "250px";
        menu.style.padding = "20px";
        menubtn.textContent = "✖ Close";
    }
}

//زرار الاستوب بتاع الفديو 
const video = document.getElementById("backvid");
const videoBtn = document.getElementById("videoControl");

videoBtn.onclick = function() {
    if (video.paused) {
        video.play();
        videoBtn.textContent = "Pause Video";
    } else {
        video.pause();
        videoBtn.textContent = "Play Video";
    }
};


const carsData = [
    { id: 1, brand: 'FERRARI', model: 'Ferrari 456M GT', year: 2001, price: 300000, type: 'Luxury', speed: '180', engine: '3.9L Twin Turbo', hp: '660', gearbox: 'manual', color: 'gray', img: ['images/2001-Ferrari-456M-GT-004-1080.jpg.jpeg'], },
    { id: 2, brand: 'FERRARI', model: 'Ferrari 488 GTB', year: 2021, price: 255000, type: 'Cabrio', speed: '315', engine: '3.9L V8 Turbo', hp: '630', gearbox: 'automatic', color: 'gray', img: ['images/2016-Ferrari-488-GTB-008-1080.jpg.jpeg'], },
    { id: 3, brand: 'FERRARI', model: 'Ferrari Roma', year: 2023, price: 220000, type: 'GT', speed: '320', engine: '3.9L Twin Turbo', hp: '620', gearbox: 'automatic', color: 'red', img: ['images/2020-Ferrari-Roma-013-1080.jpg.jpeg'], },
    { id: 4, brand: 'FERRARI', model: 'Ferrari Portofino M', year: 2021, price: 255000, type: 'Cabrio', speed: '315', engine: '3.9L V8 Turbo', hp: '630', gearbox: 'automatic', color: 'gray', img: ['images/2021-Ferrari-Portofino-M-002-1080.jpg.jpeg'], },
    { id: 5, brand: 'FORD', model: 'Ford-Taurus', year: 2024, price: 178000, type: 'Muscle', speed: '290', engine: '5.2L V8 SC', hp: '760', gearbox: 'manual', color: 'black', img: ['images/2015-Ford-Taurus-SHO-002-1080.jpg.jpeg'], },
    { id: 6, brand: 'FORD', model: 'Ford-Mustang-GTD', year: 2024, price: 68000, type: 'Sedan', speed: '250', engine: '3.0L EcoBoost V6', hp: '418', gearbox: 'automatic', color: 'green', img: ['images/2026-Ford-Mustang-GTD-Liquid-Carbon-002-1080.jpg.jpeg'], },
    { id: 7, brand: 'BMW', model: 'BMW M4 Competition', year: 2022, price: 65000, type: 'Sedan', speed: '290', engine: '3.0L Twin Turbo', hp: '510', gearbox: 'automatic', color: 'green', img: ['images/2021-BMW-M4-Competition-004-1600.jpg.jpeg'], },
    { id: 8, brand: 'BMW', model: 'BMW X6 M Sport', year: 2024, price: 72000, type: 'SUV', speed: '250', engine: '3.0L Turbo', hp: '340', gearbox: 'automatic', color: 'gray', img: ['images/2024-BMW-X6-M-Competition-002-1080.jpg.jpeg'], },
    { id: 9, brand: 'BMW', model: 'BMW Skytop', year: 2025, price: 58000, type: 'Sports', speed: '280', engine: '2.0L Turbo', hp: '258', gearbox: 'automatic', color: 'blue', img: ['images/2025-BMW-Skytop-003-1600.jpg.jpeg'], },
    { id: 10, brand: 'BMW', model: 'BMW 7 Series', year: 2024, price: 70000, type: 'SUV', speed: '270', engine: '3.0L Turbo', hp: '310', gearbox: 'automatic', color: 'black', img: ['images/2027-BMW-7-Series-005-1080.jpg.jpeg'], },
    { id: 11, brand: 'MERCEDES', model: 'Mercedes CLE-53 AMG', year: 2024, price: 600000, type: 'Luxury', speed: '250', engine: '3.0L V6 Turbo', hp: '435', gearbox: 'automatic', color: 'red', img: ['images/2024-Mercedes-AMG-CLE53-003-1080.jpg.jpeg'], },
    { id: 12, brand: 'MERCEDES', model: 'Mercedes Benz EQS', year: 2024, price: 165000, type: 'SUV', speed: '220', engine: '4.0L V8 Biturbo', hp: '585', gearbox: 'automatic', color: 'black', img: ['images/2022-Mercedes-Benz-EQS-007-1080.jpg.jpeg'], },
    { id: 13, brand: 'MERCEDES', model: 'Maybach s580', year: 2023, price: 108000, type: 'Sedan', speed: '290', engine: '2.0L Turbo AMG', hp: '476', gearbox: 'automatic', color: 'black', img: ['images/2021-Mercedes-Maybach-S-580-004-1080.jpg.jpeg'], },
    { id: 14, brand: 'LAMBORGHINI', model: 'Lamborghini Huracán EVO', year: 2022, price: 250000, type: 'SUV', speed: '306', engine: '4.0L V8 Biturbo', hp: '666', gearbox: 'automatic', color: 'gray', img: ['images/2021-Lamborghini-Huracan-EVO-RWD-001-1080.jpg.jpeg'], },
    { id: 15, brand: 'LAMBORGHINI', model: 'Lamborghini Urus S', year: 2023, price: 280000, type: 'Sports', speed: '325', engine: '5.2L V10', hp: '640', gearbox: 'LDF', color: 'yellow', img: ['images/2023-Lamborghini-Urus-S-005-1080.jpg.jpeg'], },
    { id: 16, brand: 'PORSCHE', model: 'Porsche 911 GT3 RS', year: 2024, price: 175000, type: 'Sports', speed: '318', engine: '4.0L Flat-6', hp: '510', gearbox: 'PDK', color: 'white', img: ['images/2004-Porsche-911-GT3-RS-002-1080.jpg.jpeg'], },
    { id: 17, brand: 'PORSCHE', model: 'Porsche Cayenne Turbo', year: 2024, price: 140000, type: 'SUV', speed: '285', engine: '4.0L V8 Biturbo', hp: '650', gearbox: 'automatic', color: 'blue', img: ['images/2022-Porsche-Cayenne-Turbo-GT-009-1080.jpg.jpeg'], },
    { id: 18, brand: 'AUDI', model: 'Audi S8 L 60 TFSI', year: 2022, price: 188000, type: 'Sedan', speed: '250', engine: '6.0L W12 Turbo', hp: '585', gearbox: 'automatic', color: 'black', img: ['images/2022-Audi-S8-007-1080.jpg.jpeg'], },
    { id: 19, brand: 'AUDI', model: 'Audi A6 E-Tron', year: 2021, price: 215000, type: 'Sport', speed: '305', engine: '4.0L V8 Biturbo', hp: '630', gearbox: 'automatic', color: 'white', img: ['images/2021-Audi-A6-E-Tron-Concept-007-1080.jpg.jpeg'], },
    { id: 20, brand: 'AUDI', model: 'Audi SQ8 E-Tron Quattro', year: 2024, price: 192000, type: 'SUV', speed: '200', engine: 'Electric Dual', hp: '408', gearbox: 'automatic', color: 'black', img: ['images/2024-Audi-SQ8-E-Tron-Quattro-008-1080.jpg.jpeg'], },
];

function compareCars() {
    const car1 = document.getElementById('car1').value;
    const car2 = document.getElementById('car2').value;
    const c1 = carsData.find(car => car.id === parseInt(car1));
    const c2 = carsData.find(car => car.id === parseInt(car2));

    let winner = c1.speed > c2.speed ? c1.model : c2.model;


    if (c1 === c2) {
        alert('Please select two different cars to compare.');
        return;
    }

    document.getElementById('compareresult').innerHTML = `
        <h2 id="compare-heading">Comparison Result</h2>
         <div style="display:flex; justify-content:space-around; margin-bottom:20px;" id="carimages">
   
    <div id="tablecontainer">
        <table border="1" id="comparetable">
            <tr>
                <th>Feature</th>
                <th>${c1.model}</th>
                <th>${c2.model}</th>
            </tr>
            <tr>
                <td>Car Image</td>
                <td><img src="${c1.img[0]}" width="150" class="carimg-table"></td>
                <td><img src="${c2.img[0]}" width="150" class="carimg-table"></td>
            </tr>
            <tr>
                <td>Brand</td>
                <td>${c1.brand}</td>
                <td>${c2.brand}</td>
            </tr>
            <tr>
                <td>Year</td>
                <td>${c1.year}</td>
                <td>${c2.year}</td>
            </tr>
            <tr>
                <td>Price</td>
                <td>$${c1.price.toLocaleString()}</td>
                <td>$${c2.price.toLocaleString()}</td>
            </tr>
            <tr>
                <td>Type</td>
                <td>${c1.type}</td>
                <td>${c2.type}</td>
            </tr>
            <tr>
                <td>Speed</td>
                <td>${c1.speed} km/h</td>
                <td>${c2.speed} km/h</td>
            </tr>
            <tr>
                <td>Engine</td>
                <td>${c1.engine}</td>
                <td>${c2.engine}</td>
            </tr>
            <tr>
                <td>Horsepower</td>
                <td>${c1.hp} hp</td>
                <td>${c2.hp} hp</td>
            </tr>
            <tr>
                <td>Gearbox</td>
                <td>${c1.gearbox}</td>
                <td>${c2.gearbox}</td>
            </tr>
            <tr>
                <td>Color</td>
                <td>${c1.color}</td>
                <td>${c2.color}</td>
            </tr>
        </table>
    </div>
    `;
}



// ===== Tab switching =====
function switchTab(tab) {
    const tabs = document.querySelectorAll('.tab-btn');
    const loginPanel = document.getElementById('loginPanel');
    const regPanel = document.getElementById('registerPanel');
    const switchText = document.getElementById('switchText');
    const errorMsg = document.getElementById('errorMsg');

    errorMsg.classList.remove('show');

    if (tab === 'login') {
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
        loginPanel.classList.add('active');
        regPanel.classList.remove('active');
        switchText.innerHTML = 'مش عندك حساب؟ <a href="#" onclick="switchTab(\'register\'); return false;">سجّل دلوقتي</a>';
    } else {
        tabs[1].classList.add('active');
        tabs[0].classList.remove('active');
        regPanel.classList.add('active');
        loginPanel.classList.remove('active');
        switchText.innerHTML = 'عندك حساب؟ <a href="#" onclick="switchTab(\'login\'); return false;">سجّل دخولك</a>';
    }
}

// ===== Toggle password visibility =====
function togglePass(inputId, btn) {
    const input = document.getElementById(inputId);
    const isPass = input.type === 'password';
    input.type = isPass ? 'text' : 'password';

    btn.innerHTML = isPass ?
        `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
         <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94
                  M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19
                  m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
         <line x1="1" y1="1" x2="23" y2="23"/>
       </svg>` :
        `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
         <circle cx="12" cy="12" r="3"/>
       </svg>`;
}

// ===== Show success overlay =====
function showSuccess() {
    document.getElementById('successOverlay').classList.add('show');
}

// ===== Login handler =====
function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const errorMsg = document.getElementById('errorMsg');
    const btn = document.querySelector('#loginPanel .btn-submit');

    errorMsg.classList.remove('show');

    if (!email || !password) {
        errorMsg.textContent = 'please Enter your email and password.';
        errorMsg.classList.add('show');
        return;
    }

    btn.classList.add('loading');


    window.location.href = 'index.html';

}

// ===== Register handler =====
function handleRegister() {
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const errorMsg = document.getElementById('errorMsg');
    const btn = document.querySelector('#registerPanel .btn-submit');

    errorMsg.classList.remove('show');

    if (!name || !email || !phone || !password) {
        errorMsg.textContent = 'Please fill in all fields to create an account.';
        errorMsg.classList.add('show');
        return;
    }

    btn.classList.add('loading');

    window.location.href = 'index.html';
}

// ===== Google social login =====
function handleSocial() {
    alert(' Google login coming soon!');
}

// ===== Enter key support =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const active = document.querySelector('.panel.active');
        if (active.id === 'loginPanel') handleLogin();
        else handleRegister();
    }
});