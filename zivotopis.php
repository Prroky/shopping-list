<!DOCTYPE html>
<html>
<head>
   <?php require_once ('templates/common.php');?>
  <meta charset="utf-8">
  <title>Projekt</title>
</head>
<body>
<?php  require_once('templates/header.php'); ?>
	<!-- About me -->
	<section id="about">
		<div class="container">
			<div class="row">
				<div class="col-md-5">
					<div class="about-img">
						<img src="img/me.jpg" class="img-fluid rounded-top rounded-bottom">
					</div>
				</div>
				<br>
				<div class="col-md-7 about-right">
					<h2><b>Jan Prokop</b></h2>
					<p class="p-first">Jmenuji se Jan Prokop, je mi 22 let a pocházím z Rakovníka. Již 18 let se věnuji hokejbalu a hraju za klub HBC Kladno.</p>
					<p>Vystudoval jsem střední průmyslovou školu Emila Kolbena v Rakovníku a nyní se snažím věnovat tvorbě webových stránek.</p>
					<p>Mezi mé koníčky patří hlavně sport, občasné hraní videoher a také procházky v přírodě. více se dozvíte v mém životopise.</p>
					<a href="dok.pdf" class="btn btn-default download" target="blank">Stáhni si můj životopis</a>
					<ul class="about-link">
						<li><a href=""><i class="fab fa-facebook-f"></i></a></li>
						<li><a href=""><i class="fab fa-instagram"></i></a></li>
						<li><a href=""><i class="fab fa-linkedin"></i></a></li>
						<li><a href=""><i class="fab fa-youtube"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<?php include('templates/footer.php'); ?>
</body>
</html>
