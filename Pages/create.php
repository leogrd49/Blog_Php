<?php
include 'navbar.php';
?>

<link href="../css/quill.css" rel="stylesheet"/>

<div id="editor">
  <p>Hello World!</p>
</div>



<!-- Modal Publier -->
<div class="modal fade" id="publishModal" tabindex="-1" role="dialog" aria-labelledby="publishModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                <button type="button" class="btn btn-primary" onclick="publishContent()">Publier</button>
            </div>
        </div>
    </div>
</div>

<script src="../js/quill.js"></script>

<script>
  const quill = new Quill("#editor", {
    theme: "snow",
  });

  function publishContent() {
    // Ici vous pouvez ajouter la logique pour publier le contenu
    alert("Contenu publié !");
  }
</script>
