var app = angular.module('Paper', ['paper.filters', 'paper.services', 'paper.directives' ,'facebox'])
.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    $routeProvider.when('/recording', {templateUrl: '/templates/recording.html', controller: 'RecordingCtrl'});
    $routeProvider.when('/marking', {templateUrl: '/templates/marking.html', controller: 'MarkingCtrl'});
    $routeProvider.when('/edit', {templateUrl: '/templates/edit.html', controller: 'PaperCtrl'});
    $routeProvider.when('/report', {templateUrl: '/templates/report.html', controller: 'ReportCtrl'});
    $routeProvider.when('/paper-report', {templateUrl: '/templates/paper-report.html', controller: 'PaperReportCtrl'});
    $routeProvider.otherwise({templateUrl: '/templates/view.html', controller: 'PaperCtrl'});
  }]);