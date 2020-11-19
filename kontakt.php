<!DOCTYPE html>
<head>
   <?php require_once ('templates/common.php');?>
</head>
<html>
<body>
  <?php  require_once('templates/header.php'); ?>
	<div class="container contact-form">
		<h2>Kontaktní formulář</h2>
		<hr>
		<div class="row">
			<div class="col-md-12">
				<form method="POST" action="kontakt.php">
				<div class="form-group">
					<label>Jméno</label>
					<input type="text" class="form-control name" name="jmeno" placeholder="Např. Karel">
				</div>
				<div class="form-group">
					<label>Email</label>
					<input type="text" class="form-control email" name="email" placeholder="name@example.com">
				</div>
				<div class="form-group">
					<label>Email</label>
					<input type="text" class="form-control predmet" name="predmet" placeholder="Předmět zprávy">
				</div>
				<div class="form-group">
					<label>Zpráva pro příjemce</label>
					<textarea class="form-control message" rows="5" name="zprava" placeholder="Vaše zpráva"></textarea>
				</div>
				<div class="status">
				</div>
				<div class="form-group">
					<button type="submit" name="odeslat" class="btn btn-primary float-right submit">Odeslat</button>
				</div>
				</form>
			</div>
		</div>
	</div>
	<?php  require_once('templates/footer.php'); ?>
</body>
</html>
