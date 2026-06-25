<?php
if(session_status()===PHP_SESSION_NONE){
    session_start();
}
require 'config.php';


// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Cek apakah form disubmit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Ambil dan sanitasi data
    $nama = mysqli_real_escape_string($conn, $_POST['nama']);
    $rating = intval($_POST['rating']);
    $komentar = mysqli_real_escape_string($conn, $_POST['komentar']);
    
    // Validasi data
    $errors = array();
    
    if (empty(trim($nama))) {
        $errors[] = "Nama wajib diisi";
    }
    
    if (empty($rating) || $rating < 1 || $rating > 5) {
        $errors[] = "Rating harus antara 1-5";
    }

  
    // Jika ada error, redirect kembali
    if (!empty($errors)) {
        $error_message = implode(", ", $errors);
        $_SESSION['error'] = $error_message;
        header("Location: rate.php");
        exit();
    }
    
    // Query insert data
    $sql = "INSERT INTO ratings (nama, rating, komentar, created_at) 
            VALUES ('$nama', $rating, '$komentar',NOW())";
    
    if ($conn->query($sql) === TRUE) {
        // Redirect dengan status sukses
        $_SESSION['succes']='Data berhasil di kirim';
        header("Location: rate.php");
        exit();
    } else {
        // Jika terjadi error
        $_SESSION['error']='Data gagal dikirim';
        header("Location: rate.php");
        exit();
    }
}

$conn->close();
?>