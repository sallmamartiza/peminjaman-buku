document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman saat form dikirim

    // Mengambil input dari form
    const name = document.getElementById('name').value;
    const book = document.getElementById('book').value;
    const duration = parseInt(document.getElementById('duration').value);

    if (isNaN(duration) || duration <= 0) {
        alert('Masukkan durasi peminjaman yang valid!');
        return;
    }

    // Menghitung tanggal pengembalian
    const today = new Date();
    const returnDate = new Date(today);
    returnDate.setDate(today.getDate() + duration);
    const formattedReturnDate = returnDate.toLocaleDateString();

    // Menampilkan hasil detail peminjaman
    document.getElementById('resultName').innerText = name;
    document.getElementById('resultBook').innerText = book;
    document.getElementById('resultDuration').innerText = duration;
    document.getElementById('returnDate').innerText = formattedReturnDate;

    // Menampilkan div hasil
    document.getElementById('result').style.display = 'block';
});

function printPage() {
    window.print(); // Fungsi untuk mencetak halaman
}
