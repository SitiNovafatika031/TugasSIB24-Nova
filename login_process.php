<?php
// Cek apakah form telah disubmit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil nilai yang di-post dari form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Misalkan, kita memiliki data login statis
    $valid_username = "admin";
    $valid_password = "12345";

    // Periksa apakah nilai yang di-post cocok dengan nilai yang valid
    if ($username === $valid_username && $password === $valid_password) {
        // Jika cocok, redirect ke halaman selamat datang
        header("Location: welcome.php");
        exit;
    } else {
        // Jika tidak cocok, tampilkan pesan error
        echo "Username atau password salah.";
    }
}
?>
