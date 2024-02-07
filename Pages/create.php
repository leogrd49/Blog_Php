<?php
include 'navbar.php';
?>

<link
  href="../css/quill.css"
  rel="stylesheet"
/>


<div id="editor">
  <p>Hello World!</p>
</div>

<script src="../js/quill.js"></script>

<script>
  const quill = new Quill("#editor", {
    theme: "snow",
  });
</script>