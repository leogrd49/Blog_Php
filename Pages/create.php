<?php
include 'navbar.php';
?>

<link
  href="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.0/dist/quill.snow.css"
  rel="stylesheet"
/>

<div id="editor">
  <p>Hello World!</p>
  <p>Some initial <strong>bold</strong> text</p>
  <p><br /></p>
</div>

<script src="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.0/dist/quill.js"></script>

<script>
  const quill = new Quill("#editor", {
    theme: "snow",
  });
</script>