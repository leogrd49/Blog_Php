<?php
include 'connect_base.php'
?>



<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <table border="1">
        <?php
            $sql = "SELECT * FROM article ;";
            $temp = $pdo->query($sql);
            echo '<tr><td>ID </td><td>Auteur</td><td>Catégorie</td><td>date de publication</td><td>titre</td><td>Description</td><td>titre photo</td><td>Action</td></tr>';
            while ($resultat = $temp ->fetch()){
                echo '<tr>'.'<td>'.$resultat['id_article'].'</td>'
                .'<td>'.$resultat['auteur'].'</td>'
                .'<td>'.$resultat['categorie'].'</td>'
                .'<td>'.$resultat['date_sortie'].'</td>'
                .'<td>'.$resultat['titre'].'</td>'
                .'<td>'.$resultat['description'].'</td>'
                .'<td>'.$resultat['title'].'</td>'
                .'<td><a href="modif.php?id='.$resultat['id_article'].'"> Modifier </a><a href="feed_admin.php?sup='.$resultat['id_article'].'"> suppr </a></td>'.'</tr>';
            }
            
            if (isset($_REQUEST['sup'])){
                $sql2='DELETE FROM article WHERE id_article='.$_REQUEST['sup'];
                $pdo->exec($sql2);
            }

            
        ?>
    </table>
    
            <?php
            
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                header("Location: connexion.php");
                exit();
            }
            ?>
    
</body>
</html>