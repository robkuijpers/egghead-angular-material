// Create and prepare the 'users' module (with its controllers and dataservices)

var usersModule = angular.module('users', [ 'ngMaterial' ])

usersModule.controller('UserController', ['userService', '$mdSidenav', '$mdBottomSheet', '$log', UserController ]);

usersModule.service('userService', ['$q', UserService]);
