<?php
    include 'navbar.php'
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
            
            <div class='carte-auteur'>
                <div class='cyan-part'>
                    <h3 class='prenom-auteur'>Alexandre</h3>
                    <h3 class='nom-auteur'>Tsong-li</h3>
                    <img src="../img/auteurs/asiatpdp.jpg" alt="" class='img-auteur'>
                    <hr class='barre-auteur'/>
                </div>
                <div class='white-part'>
                    <h3 class='auteur-type'>lifestyle author :</h3>
                    <p> Ma bite sur un plateau d'argent Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia maiores impedit quidem qui accusamus repudiandae, iusto in ducimus id sint esse illum facere obcaecati voluptatem, vero mollitia perferendis veritatis numquam.</p>
                </div>
            </div>

            <div class='carte-auteur'>
                <div class='cyan-part'>
                    <h3 class='prenom-auteur'>Alexandre</h3>
                    <h3 class='nom-auteur'>Tsong-li</h3>
                    <img src="../img/auteurs/asiatpdp.jpg" alt="" class='img-auteur'>
                    <hr class='barre-auteur'/>
                </div>
                <div class='white-part'>
                    <h3 class='auteur-type'>lifestyle author :</h3>
                    <p> Ma bite sur un plateau d'argent Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia maiores impedit quidem qui accusamus repudiandae, iusto in ducimus id sint esse illum facere obcaecati voluptatem, vero mollitia perferendis veritatis numquam.</p>
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