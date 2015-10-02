var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);


artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;

    if ( $routeParams.itemId > 0 ) {
    	// si no me encuentro en el primero elemento
    	// el boton prevItem me manda al elemento anterior.
    	$scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
    	// si me encuentro en el último elemento de la array
    	// o sea, $routeParams.itemId = 0, entonces me manda
    	// al último elemento de la array.
    	$scope.prevItem = $scope.artists.length - 1;
    };

    if ( $routeParams.itemId < ($scope.artists.length - 1) ) {
    	// si no estamos en el último elemento avanzamos 
    	// al siguiente elemento.
    	$scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
    	// si nos encontramos en el último elemento 
    	// vamos hasta el elemente [0] de la array.
    	$scope.nextItem = 0;
    };

  });
}]);




	


