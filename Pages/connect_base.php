<?php
$host = '127.0.0.1';
$db = 'blog';
$user = 'root';
$pass = '';
$port = 3306;
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset;port=$port";
$pdo = new PDO($dsn, $user, $pass);
?>