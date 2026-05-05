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