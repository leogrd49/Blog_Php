<?php
    include'session.php';
    include 'navbar-connect.php';
    include 'connect_base.php';
    function auteur($resultat){
        echo '  <a href="lire-auteur.php" class="lien-page-auteur">
                <div class="carte-auteur">
                    <div class="cyan-part">
                        <h3 class="prenom-auteur">'.$resultat['prenom'].'</h3>
                        <h3 class="nom-auteur">'.$resultat['nom'].'</h3>
                        <img src="../img/auteurs/asiatpdp.jpg" alt="" class="img-auteur">
                        <hr class="barre-auteur"/>
                    </div>
                    <div class="white-part">
                        <h3 class="auteur-type">Who is '.$resultat['prenom'].' '.$resultat['nom'].':</h3>
                        <p>Date de naissance : '.$resultat['date_naissance'].'</p>
                        <p>Lieu de naissance : '.$resultat['lieu_naissance'].'</p>
                        <p>Style : '.$resultat['style_ecriture'].'</p>
                        <p> Ses blogs les plus connus : </p>
                        <img src="..\img\blog\food.jpg" alt="" class="pdp-blog">
                        <img src="..\img\blog\it.jpg" alt="" class="pdp-blog">
                    </div>
                </div>
                </a>';
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

        <div class='carte-auteur-container'>
            
            <?php 
            $sql = 'SELECT * FROM auteur';
            $temp = $pdo ->query($sql);
            while($auteur = $temp->fetch()){
                auteur($auteur);
            }
            ?>

        </div>
        
        <div class="fleches">
            <ul>
                <a href="#" class='arrow'><img src="../img/icons/fleche" alt=""></a>
                <a href="#" class='arrow'><img src="../img/icons/fleche2" alt=""></a>
            </ul>
        </div>
    </body>
</html>