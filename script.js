// ============================================
// TOGGLE PASSWORD VISIBILITY
// ============================================
document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        const icon = this.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

// ============================================
// LOGIN FORM
// ============================================
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        
        if (!email || !password) {
            alert('⚠️ Please fill in all fields.');
            return;
        }
        
        alert(`✅ Welcome back, ${email.split('@')[0]}!\n\n(Login functionality coming soon!)`);
        window.location.href = 'index.html';
    });
}

// ============================================
// SIGNUP FORM
// ============================================
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value;
        const confirm = document.getElementById('signupConfirmPassword').value;
        
        if (!name || !email || !password || !confirm) {
            alert('⚠️ Please fill in all fields.');
            return;
        }
        
        if (password.length < 6) {
            alert('⚠️ Password must be at least 6 characters long.');
            return;
        }
        
        if (password !== confirm) {
            alert('⚠️ Passwords do not match!');
            return;
        }
        
        alert(`🎉 Account created successfully!\n\nWelcome, ${name}!`);
        window.location.href = 'login.html';
    });
}