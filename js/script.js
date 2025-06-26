// Ambil form luas dan keliling berdasarkan id
const formLuas = document.getElementById('form-luas');
const formKeliling = document.getElementById('form-keliling');

// Buat elemen output dinamis untuk luas
const outputLuas = document.createElement('p');
outputLuas.classList.add('output-hasil');
formLuas.after(outputLuas);  // tempatkan output di bawah form luas

// Buat elemen output dinamis untuk keliling
const outputKeliling = document.createElement('p');
outputKeliling.classList.add('output-hasil');
formKeliling.after(outputKeliling);  // tempatkan output di bawah form keliling

// Event listener untuk form luas segitiga
formLuas.addEventListener('submit', function(e) {
  e.preventDefault();

  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);

  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    outputLuas.textContent = 'Masukkan nilai alas dan tinggi yang valid dan lebih dari 0';
    outputLuas.classList.remove('sukses');
    outputLuas.classList.add('error');
    return;
  }

  const luas = 0.5 * alas * tinggi;
  outputLuas.textContent = `Luas segitiga adalah: ${luas}`;
  outputLuas.classList.remove('error');
  outputLuas.classList.add('sukses');
});

// Event listener untuk form keliling segitiga
formKeliling.addEventListener('submit', function(e) {
  e.preventDefault();

  const sisiA = parseFloat(document.getElementById('sisi-a').value);
  const sisiB = parseFloat(document.getElementById('sisi-b').value);
  const sisiC = parseFloat(document.getElementById('sisi-c').value);

  if (
    isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) ||
    sisiA <= 0 || sisiB <= 0 || sisiC <= 0
  ) {
    outputKeliling.textContent = 'Masukkan nilai sisi yang valid dan lebih dari 0';
    outputKeliling.classList.remove('sukses');
    outputKeliling.classList.add('error');
    return;
  }

  const keliling = sisiA + sisiB + sisiC;
  outputKeliling.textContent = `Keliling segitiga adalah: ${keliling}`;
  outputKeliling.classList.remove('error');
  outputKeliling.classList.add('sukses');
});
