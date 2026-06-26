<?php

echo "<h2>PHP Extension Check</h2>";

echo "PDO: " . (extension_loaded('pdo') ? 'ADA' : 'TIDAK ADA') . "<br>";
echo "pdo_mysql: " . (extension_loaded('pdo_mysql') ? 'ADA' : 'TIDAK ADA') . "<br>";
echo "mysqli: " . (extension_loaded('mysqli') ? 'ADA' : 'TIDAK ADA') . "<br>";