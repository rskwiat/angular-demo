var myApp = angular.module('routerApp', [
  'ngRoute'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl:'partials/home.html'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutController'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
      }).
      otherwise({
        redirectTo: '/'
      });
}]);


myApp.controller('AboutController', ['$scope', function($scope) {
  $scope.greeting = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisl ligula. Aliquam laoreet elit et urna congue iaculis. Curabitur fermentum malesuada maximus. Donec dignissim nibh ipsum, ac luctus leo ullamcorper eget. Nulla ac posuere diam, iaculis vehicula urna. Nam mattis finibus eros quis suscipit. Nunc porta sit amet arcu eget auctor. Fusce tristique tellus vitae nulla imperdiet, quis venenatis neque fringilla. Nam faucibus, nunc vel aliquet suscipit, leo sem pretium tortor, ut consequat ex risus nec lectus. Pellentesque risus felis, interdum quis libero eget, ultricies ultrices sem. In vehicula nibh id odio convallis vestibulum. Aenean ligula nulla, eleifend pellentesque hendrerit sit amet, tristique quis arcu.';
}]);


