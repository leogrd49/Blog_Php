<?php
    include 'session.php';
    include 'connect_base.php';
    if ($_SESSION['log'] == 1){
        include 'navbar.php';
    } else{
        include 'navbar-connect.php';
    }

    
    
    include 'searchbar.php';
    
    function blog($resultat){
        echo '
        <div class="blog-img-container">
            <a href="lire-blog.php?id='.$resultat['id_article'].'"><img src="'.$resultat['lien_image'].'" alt="'.$resultat['title'].'"></a>
            <div class="white-card">
            <h3 class="titre-blog">'.$resultat['titre'].'</h3>
            <h4>'.$resultat['desblog'].'</h4>
            <p class="txt-blog-2"> Auteur :'.$resultat['nom'].''.$resultat['prenom'].'</p>
            </div>
        </div>';
            
    }
    $recherche = '';
    $sqlshearch = 'SELECT * FROM article ORDER BY id_article DESC;';
    $articles = $pdo->query($sqlshearch);
    if (isset($_GET['recherche']) AND !empty($_GET['recherche'])){
        $recherche = htmlspecialchars($_GET['recherche']);
        $sqlarticle = 'SELECT article.*,auteur.prenom,auteur.nom FROM article JOIN auteur ON article.auteur = auteur.id_auteur WHERE titre LIKE "%'.$recherche.'%" ORDER BY id_article DESC;'; 
        $articles = $pdo->query($sqlarticle);
        if ($articles -> rowCount() == 0){
            $sqlpost = 'SELECT article.*,auteur.prenom,auteur.nom FROM article JOIN auteur ON article.auteur = auteur.id_auteur WHERE CONCAT(titre, description) LIKE "%'.$recherche.'%" ORDER BY id_article DESC;' ;
            $articles = $pdo->query($sqlpost); 
        }
    }
?>

<!doctype html>
<html class="no-js" lang="fr"> 
<head>
    <link rel="stylesheet" href="../css/design.css">
</head>
    <body>
        
        <?php if ($recherche == ''){?>
        <div class='carte-blog'>
            <?php
            $sql = 'SELECT article.*,auteur.prenom,auteur.nom FROM article JOIN auteur ON article.auteur = auteur.id_auteur;';
            $temp = $pdo->query($sql);
            while ($article = $temp->fetch()){
                blog($article);
            }
            ?>

        </div>
        <?php } else { ?>
            <div class='carte-blog'>
            <?php if($articles ->rowCount() > 0) {?>
                    <?php while ($recherche = $articles ->fetch()) {?>
                        <?php blog($recherche);?>
                        <?php }?>
                    <?php }else { ?>
                        Aucun résultat pour <?php echo $recherche ?>
                        <?php } ?>
            </div>
        <?php }?>
        <div class="fleches">
            <ul>
                <a href="#" class='arrow'><img src="../img/icons/fleche" alt=""></a>
                <a href="#" class='arrow'><img src="../img/icons/fleche2" alt=""></a>
            </ul>
        </div>
    </body>
</html>