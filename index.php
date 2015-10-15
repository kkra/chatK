<!DOCTYPE html>
<html lang="es-ES" ng-app="myApp">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>ChatK</title>
	<meta name="description" content="Descripción">
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
	<link rel="stylesheet" href="assets/bootstrap/css/theme.min.css">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
	<link href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' rel='stylesheet' type='text/css'>
	<!-- plugins -->
	<!-- styles -->
	<link rel="stylesheet" href="assets/css/main.css" type="text/css">
	<link rel="stylesheet" href="assets/css/animate.min.css" type="text/css">
	<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body >
<section>
	<div class="container" >
		<ui-view></ui-view>
	</div>
</section>
<!-- core -->
<script src="assets/js/jquery-1.11.2.min.js" type="text/javascript"></script>
<script src="assets/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular-animate.min.js"></script>
<!-- plugins -->
<!-- Firebase -->
<script src='https://cdn.firebase.com/js/client/2.1.0/firebase.js'></script>
<!-- script -->
<script src="assets/js/angularfire.min.js"></script>
<script src="assets/js/app.js"></script>
</body>
</html>