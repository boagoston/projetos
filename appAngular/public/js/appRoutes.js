angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider

			.when('/form', {
				templateUrl: 'views/form.html',
				controller: 'formController'
			});

		$locationProvider.html5Mode(true);

}]);