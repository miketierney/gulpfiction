(function (exports) {
    'use strict';

    exports.angular.module('app.projectController', [])
        .controller('projectController', ProjectController);

    function ProjectController($scope, project) {
        $scope.project = project;
    }

}(this));