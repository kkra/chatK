var app = angular.module('myApp', ['firebase','ui.router','ngAnimate']);

app.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
        .state('otro', {
            url: '/otro',
            templateUrl: 'views/otro.html',
            controller: 'otroCtrl'
        });
    $urlRouterProvider.otherwise('/');
});

app.controller('homeCtrl', function($scope, $firebaseArray) {

	var ref = new Firebase("https://kenyk7.firebaseio.com/") ;
	$scope.Messages = $firebaseArray(ref);

	$scope.loadInfo = function(){
		if(localStorage.nombre && localStorage.color){
			$(".logeado").removeClass('hidden');
			$(".no-logeado").slideUp();
			$(".no-loged-title").slideUp();
			$("#nombre").val(localStorage.nombre);
        	$("#color").val(localStorage.color);
			$("#nombreLocal").text(localStorage.nombre).css('color', localStorage.color);
		}
	};

	$("#savedata").submit(function(event) {
		event.preventDefault();
		$("#saveInfo").click();
	});

	$("#saveInfo").click(function() {
		var nombre = $("#nombre").val();
		var color = $("#color").val();
        $("#nombre").val(nombre);
        $("#color").val(color);
        // save in localStarage
        localStorage.nombre = nombre;
        localStorage.color = color;
        var items = ['left', 'right']; 
		var item = items[Math.floor(Math.random()*items.length)];

		if(localStorage.align){
			localStorage.align = localStorage.align;
		}else{
			localStorage.align = item;
		}
		 

	    if(localStorage.nombre && localStorage.color){
	        $(".success-visible").fadeIn();
	        $(".no-logeado").slideUp();
	        $(".no-loged-title").slideUp();
	        // reload info
	        $scope.loadInfo();
		}else{
			alert("Ingrese su Nombre y Color Favorito");
		}
    });

    $(".success-visible").fadeIn();

    setInterval(
    	function(){ 
    		$(".success-visible").fadeOut();
    	},5000);

    $("#updateBtn").click(function() {
    	$(".no-logeado").slideDown();
    });

	$scope.currentime = function(){
		var d = Date.now();
	    return d;
	}
	
	$scope.loadInfo();

	$( "#chat" ).keypress(function( event ) {
		if ( event.which == 13 ) {
		  	$scope.nuevoMsg();
		}
	});
	
	$scope.nuevoMsg = function() {
		var currentime = $scope.currentime();
		if(localStorage.nombre && localStorage.color){
			if($scope.message){
				$scope.Messages.$add({
					message: $scope.message,
					date: currentime,
					username: localStorage.nombre,
					color: localStorage.color,
					align: localStorage.align
				});
				$scope.message = '';
				$scope.deleteMsg();
			}
		}else{
			alert("Ingrese su nombre y color favorito");
		}
	}

	$scope.deleteMsg = function() {
		var t = $scope.Messages.length;
		var registro = $scope.Messages[0];
		$scope.Messages.$remove(registro);
	};
  
});

app.controller('otroCtrl', function($scope, $firebaseArray) {

});