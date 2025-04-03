const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});
loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

// PROSES REGISTRASI
document.getElementById('submitSignUp').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Validasi form jika diperlukan
  const formData = new FormData(document.getElementById('signUpForm'));
  
  // Pindah ke form sign in
  container.classList.remove('active');
  
  // Jika ingin menampilkan pesan sukses:
  alert('Pendaftaran berhasil! Silakan login.');
});

// PROSES LOGIN
document.getElementById('signInForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const errorElement = document.getElementById('login-error');
  
  // Reset error
  errorElement.style.display = 'none';
  
  // Validasi
  if (!username || !password) {
    showError(errorElement, 'Username dan password harus diisi!');
    return;
  }
  
  // Simulasi login berhasil (frontend-only)
  simulateLogin(username, password);
});

function showError(element, message) {
  element.textContent = message;
  element.style.display = 'block';
}

function simulateLogin(username, password) {
  // Simpan data di localStorage (opsional)
  localStorage.setItem('currentUser', JSON.stringify({ username }));
  
  // Redirect ke halaman home setelah delay 500ms (efek loading)
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 500);
}