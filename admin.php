<?php
if(session_status()===PHP_SESSION_NONE){
    session_start();
}
require 'config.php';
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil semua data rating
$sql = "SELECT * FROM ratings ORDER BY id DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Daftar Rating</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background: #f4f4f4;
        }
        .stars {
            color: #ffc107;
            font-size: 20px;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Daftar Rating</h2>
        <a href="rate.php">Kembali ke Form</a>
        
        <?php if ($result->num_rows > 0): ?>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Rating</th>
                        <th>Komentar</th>
                        <th>Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    <?php 
                    $no = 1;
                    while($row = $result->fetch_assoc()): 
                    ?>
                    <tr>
                        <td><?php echo $no++; ?></td>
                        <td><?php echo htmlspecialchars($row['nama']); ?></td>
                        <td class="stars">
                            <?php 
                            for($i = 1; $i <= 5; $i++) {
                                if($i <= $row['rating']) {
                                    echo "★";
                                } else {
                                    echo "☆";
                                }
                            }
                            ?>
                        </td>
                        <td><?php echo htmlspecialchars($row['komentar']); ?></td>
                        <td><?php echo date('d/m/Y H:i', strtotime($row['created_at'])); ?></td>
                    </tr>
                    <?php endwhile; ?>
                </tbody>
            </table>
        <?php else: ?>
            <p>Belum ada rating.</p>
        <?php endif; ?>
        
        <?php $conn->close(); ?>
    </div>
</body>
</html>