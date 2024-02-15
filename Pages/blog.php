<?php
    include 'connect_base.php';
    include 'navbar.php';
    
    function blog($resultat){
        echo '
        <div class="blog-img-container">
            <a href="#"><img src="'.$resultat['lien_image'].'" alt="'.$resultat['title'].'"></a>
            <a href=""><div class="white-card">
            <h3 class="titre-blog">'.$resultat['titre'].'</h3>
            '.$resultat['description'].'
            <p class="txt-blog-2"> Auteur :'.$resultat['auteur'].'</p>
            </div>
        </div>';
            
    }

?>

<!doctype html>
<html class="no-js" lang="fr"> 
<head>
    <link rel="stylesheet" href="../css/design.css">
</head>
    <body>
        <div class='searchbar'>
            <a href="#"><img src="../img/icons/search.png" alt="" class='nav-img'></a>
                <form action="">
                    <input  class='searchbar-white' type="text" placeholder='Rechercher...'>
                </form>
            <a href=""><img src="../img/icons/sort.png" alt="" class='icon'></a>
            
            <a href="#">
            <div class='bouton-filtre'>
                <img src="..\img\icons\Filter.png" alt="" class='filtre-img'>
                <p>Filrter date</p>
            </div>
            </a>
            
            <a href="#">
                <div class='bouton-filtre'>
                <p>Filtrer A - Z</p>
                <img src="..\img\icons\Filter.png" alt="" class='filtre-img'>
                </div>
            </a>
        </div>

        <div class='carte-blog'>
            <?php
            $sql = 'SELECT * FROM article;';
            $temp = $pdo->query($sql);
            while ($article = $temp->fetch()){
                blog($article);
            }
            ?>
            
            <div class="blog-img-container">
                <a href="#"><img src="../img/blog/img3.jpg" alt=""></a>
                <a href=""><div class="white-card">
                    <h3 class="titre-blog">Titre de l'article</h3>
                    <p class="txt-blog"> Description : dolor sit amet consectetur adipisicing elit. 
                        Cupiditate architecto perferendis, consectetur harum nesciunt quod excepturi ?
                    <p class="txt-blog-2"> Auteur : Lorem ipsum</p></a>
                </div>
            </div>
            <div class='blog-img-container'>
                <a href="#"><img src="../img/blog/img3.jpg" alt=""></a>
                <a href=""><div class='white-card'>
                    <h3 class='titre-blog'>Titre de l'article</h3>
                    <p class='txt-blog'> Description : dolor sit amet consectetur adipisicing elit. 
                        Cupiditate architecto perferendis, consectetur harum nesciunt quod excepturi ?
                    <p class='txt-blog-2'> Auteur : Lorem ipsum</p></a>
                </div>
            </div>
            <div class='blog-img-container'>
                <a href="#"><img src="../img/blog/img3.jpg" alt=""></a>
                <a href=""><div class='white-card'>
                    <h3 class='titre-blog'>Titre de l'article</h3>
                    <p class='txt-blog'> Description : dolor sit amet consectetur adipisicing elit. 
                        Cupiditate architecto perferendis, consectetur harum nesciunt quod excepturi ?
                    <p class='txt-blog-2'> Auteur : Lorem ipsum</p></a>
                </div>
            </div>
            <div class='blog-img-container'>
                <a href="#"><img src="../img/blog/img3.jpg" alt=""></a>
                <a href=""><div class='white-card'>
                    <h3 class='titre-blog'>Titre de l'article</h3>
                    <p class='txt-blog'> Description : dolor sit amet consectetur adipisicing elit. 
                        Cupiditate architecto perferendis, consectetur harum nesciunt quod excepturi ?
                    <p class='txt-blog-2'> Auteur : Lorem ipsum</p></a>
                </div>
            </div>

        </div>
        
        <div class="fleches">
            <ul>
                <a href="#" class='arrow'><img src="../img/icons/fleche" alt=""></a>
                <a href="#" class='arrow'><img src="../img/icons/fleche2" alt=""></a>
            </ul>
        </div>
    </body>
</html>