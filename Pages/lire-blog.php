<?php 
    include 'connect_base.php';
    include 'navbar-connect.php';
    include 'session.php';
?>
<!doctype html>
<html class="no-js" lang="fr"> 
<head>
    <link rel="stylesheet" href="../css/design.css">
</head>
    <body>
        <?php 
        $sql = 'SELECT article.*, auteur.prenom, auteur.nom AS autnom, categorie.nom AS catnom
        FROM article
        JOIN auteur ON article.auteur = auteur.id_auteur
        JOIN categorie ON article.id_categorie = categorie.id_categorie
        WHERE '.$_REQUEST['id'].' = article.id_article;';
        $temp = $pdo->query($sql);
        $article = $temp->fetch();
        ?>
        <div class='lire-blog-container'>
            <div class='lire-blog-entete'>
                <h3 class='titre-lire-blog'><?php echo $article['titre'] ?></h3>
            </div>
            <div class='lire-blog-paper'>
                <img src="<?php echo $article['lien_image'] ?>" alt="<?php echo $article['title'] ?>">
                <h4>Présentation du blog :</h4>
                <div>
                    <p> <!-- description du blog  -->
                    Categorie : <?php echo $article['catnom']?>
                    </p>
                    <p> <!-- description du blog  -->
                    Nom auteur : <?php echo $article['autnom'], $article['prenom'] ?>
                    </p>
                    <p> <!-- description du blog  -->
                    <?php echo $article['desblog']?>
                    </p>
                </div>
                <div>
                    <p class='text-lire-blog'>
                        <?php echo $article['description'] ?>
                    </p>
                </div>
            </div>
        </div>
    </body>
</html>