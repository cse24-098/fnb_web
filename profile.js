// ============================================
// PROFILE - FORM SUBMISSION
// ============================================
const profileForm = document.getElementById('profileForm');
if (profileForm) {
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        
        // Simple success message
        alert(`✅ Profile updated successfully!\n\nName: ${firstName} ${lastName}\nEmail: ${document.getElementById('email').value}`);
        
        // Show a temporary success feedback
        const btn = this.querySelector('.save-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Saved!';
        btn.style.background = '#28a745';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 2000);
    });
}

// ============================================
// PROFILE - CHANGE PHOTO
// ============================================
document.querySelector('.change-photo-btn')?.addEventListener('click', function() {
    // Simulate a file picker
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.querySelector('.profile-avatar img').src = event.target.result;
                alert('📸 Profile photo updated successfully!');
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
});

// ============================================
// PROFILE - SECURITY BUTTONS
// ============================================
document.getElementById('changePasswordBtn')?.addEventListener('click', function() {
    alert('🔑 Change Password\n\nEnter your current password and a new password to continue.');
});

document.getElementById('twoFactorBtn')?.addEventListener('click', function() {
    const enabled = this.textContent.trim() === 'Enable';
    if (enabled) {
        this.textContent = 'Disable';
        this.style.background = '#dc3545';
        alert('🔐 Two-Factor Authentication enabled!\n\nYour account is now more secure.');
    } else {
        this.textContent = 'Enable';
        this.style.background = '';
        alert('🔓 Two-Factor Authentication disabled.');
    }
});

document.getElementById('activityBtn')?.addEventListener('click', function() {
    alert(`🕒 Recent Login Activity\n\n📍 Gaborone, Botswana - Today, 9:30 AM\n📍 Gaborone, Botswana - Yesterday, 6:45 PM\n📍 Gaborone, Botswana - 3 days ago, 8:12 AM`);
});

// ============================================
// PROFILE - DEACTIVATE ACCOUNT
// ============================================
document.getElementById('deactivateBtn')?.addEventListener('click', function() {
    const confirm = window.confirm(
        '⚠️ WARNING: Deactivate Account\n\n' +
        'Are you sure you want to deactivate your account?\n' +
        'This action cannot be undone.\n\n' +
        'You will lose access to all your data and transactions.'
    );
    
    if (confirm) {
        const password = prompt('Please enter your password to confirm:');
        if (password) {
            alert('⚠️ Account deactivated. You will be redirected to the homepage.');
            window.location.href = 'index.html';
        } else {
            alert('Deactivation cancelled.');
        }
    }
});

console.log('👤 Profile page loaded successfully!');