console.log("SIRANA KEMBANG ready");

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const accounts = [
      { email: "admin@sirana.com", password: "admin123", role: "admin" },
      { email: "user@sirana.com", password: "user123", role: "user" }
    ];

    const foundUser = accounts.find(
      acc => acc.email === email && acc.password === password
    );

    if (foundUser) {
      localStorage.setItem("role", foundUser.role);

      if (foundUser.role === "admin") {
        window.location.href = "admin/dashboard.html";
      } else {
        window.location.href = "dashboard.html";
      }
    } else {
      alert("Email atau password salah!");
    }
  });
}


const undanganForm = document.getElementById("undanganForm");

if (undanganForm) {
  undanganForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const kegiatan = document.getElementById("kegiatan").value;
    const tempat = document.getElementById("tempat").value;
    const tanggal = document.getElementById("tanggal").value;
    const waktu = document.getElementById("waktu").value;
    const peserta = document.getElementById("peserta").value;

    // Generate nomor surat otomatis
    const nomorSurat = "00" + Math.floor(Math.random() * 100) + "/SKR/I/2026";

    const template = `
      <div class="kop">
        <h2>PEMERINTAH KABUPATEN CONTOH</h2>
        <h3>DINAS KOMUNIKASI DAN INFORMATIKA</h3>
        <p>Jl. Contoh No. 123 Telp. (031) 123456</p>
        <hr>
      </div>

      <p><strong>Nomor:</strong> ${nomorSurat}<br>
      <strong>Lampiran:</strong> -<br>
      <strong>Perihal:</strong> Undangan ${kegiatan}</p>

      <p>Yth. ${peserta}<br>
      di Tempat</p>

      <p>Dengan hormat,</p>

      <p>
        Sehubungan dengan akan dilaksanakannya <strong>${kegiatan}</strong>,
        kami mengundang Bapak/Ibu untuk hadir pada:
      </p>

      <table>
        <tr><td>Hari/Tanggal</td><td>: ${tanggal}</td></tr>
        <tr><td>Waktu</td><td>: ${waktu}</td></tr>
        <tr><td>Tempat</td><td>: ${tempat}</td></tr>
      </table>

      <p>
        Demikian undangan ini kami sampaikan.
        Atas perhatian dan kehadirannya diucapkan terima kasih.
      </p>

      <br><br>
      <p>Hormat kami,</p>
      <br><br><br>
      <p><strong>Ketua Panitia</strong></p>
    `;

    document.getElementById("templateResult").innerHTML = template;
    document.getElementById("previewSection").classList.remove("hidden");
  });
}
const notulensiForm = document.getElementById("notulensiForm");

if (notulensiForm) {
  notulensiForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const kegiatan = document.getElementById("kegiatan").value;
    const tempat = document.getElementById("tempat").value;
    const peserta = document.getElementById("peserta").value;

    const hasil = `
NOTULENSI RAPAT

Kegiatan : ${kegiatan}
Tempat   : ${tempat}
Peserta  : ${peserta}

Ringkasan:
Rapat membahas agenda utama dan evaluasi kegiatan sebelumnya.
Disepakati tindak lanjut untuk minggu depan.
    `;

    document.getElementById("resultText").innerText = hasil;
    document.getElementById("hasilNotulensi").classList.remove("hidden");
  });
}
