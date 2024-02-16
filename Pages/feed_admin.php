<?php
include 'connect_base.php';
include 'navbar.php';
include 'session.php';
if ($_SESSION['log'] != '1') {
    header('"Location: login.php"');
    exit();
  }
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <title>Document</title>
</head>

<body>
    <table class="table_feed" border="1">
        <tr>
            <th>ID</th>
            <th>Auteur</th>
            <th>Catégorie</th>
            <th>Date de publication</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Titre photo</th>
            <th>Action</th>
        </tr>

        <?php
            $sql = "SELECT * FROM article ;";
            $temp = $pdo->query($sql);
            echo '<tr><td>ID </td><td>Auteur</td><td>Catégorie</td><td>date de publication</td><td>titre</td><td>Description</td><td>titre photo</td><td>Action</td></tr>';
            while ($resultat = $temp ->fetch()){
                echo '<tr>'.'<td>'.$resultat['id_article'].'</td>'
                .'<td>'.$resultat['auteur'].'</td>'
                .'<td>'.$resultat['id_categorie'].'</td>'
                .'<td>'.$resultat['date_sortie'].'</td>'
                .'<td>'.$resultat['titre'].'</td>'
                .'<td>'.$resultat['description'].'</td>'
                .'<td>'.$resultat['title'].'</td>'
                .'<td><a classe="action-table" href="modif.php?id=' . $resultat['id_article'] . '"><i class="fas fa-edit fa-2x" style="color: #55dbcb"></i></a> <a classe="action-table" href="feed_admin.php?sup=' . $resultat['id_article'] . '"><i class="fas fa-trash-alt fa-2x" style="color: #55dbcb"></i></a></td>' . '</tr>';
            }

        if (isset($_REQUEST['sup'])) {
            $sql2 = 'DELETE FROM article WHERE id_article=' . $_REQUEST['sup'];
            $pdo->exec($sql2);
        }
    
        ?>
    </table>

    <?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        header("Location: feed_admin.php");
        exit();
    }
    ?>
</body>
</html>
