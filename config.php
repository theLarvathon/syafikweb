<?php
// config.php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'syafik');

$conn = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
function QuerySelect(string $quer){
    global $conn;
    $res = mysqli_query($conn,$quer);
    $rows = [];
    while ($row = mysqli_fetch_assoc($res)){
        $rows[] = $row;
    };
    return $rows;
};