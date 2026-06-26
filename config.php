<?php
// config.php
define('DB_HOST', getenv('DB_HOST') ?: '127.0.0.1');
define('DB_USER', getenv('DB_USER') ?: 'root');
define('DB_PASS', getenv('DB_PASS') ?: '');
define('DB_NAME', getenv('DB_NAME') ?: 'syafik');
define('DB_PORT', (int)(getenv('DB_PORT') ?: 3306));

echo "<pre>";
var_dump(getenv('DB_HOST'));
var_dump(getenv('DB_USER'));
var_dump(getenv('DB_NAME'));
var_dump(getenv('DB_PORT'));
exit;
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

function QuerySelect(string $quer) {
    global $conn;
    $res = mysqli_query($conn, $quer);
    $rows = [];
    while ($row = mysqli_fetch_assoc($res)) {
        $rows[] = $row;
    }
    return $rows;
}