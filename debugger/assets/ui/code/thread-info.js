/**
 ******************************************************************************
 * Xenia : Xbox 360 Emulator Research Project                                 *
 ******************************************************************************
 * Copyright 2013 Ben Vanik. All rights reserved.                             *
 * Released under the BSD license - see LICENSE in the root for more details. *
 ******************************************************************************
 */

'use strict';

var module = angular.module('xe.ui.code.threadInfo', [
  'ui.bootstrap',
  'xe.log',
  'xe.session'
]);


module.controller('ThreadInfoController', function(
    $rootScope, $scope, $modal, log, thread) {
  $scope.thread = thread;

  $scope.headerSort = {
    column: 'key',
    reverse: false
  };
  $scope.sectionSort = {
    column: 'startAddress',
    reverse: false
  };
  $scope.staticLibrarySort = {
    column: 'name',
    reverse: false
  };
  $scope.importSort = {
    column: 'ordinal',
    reverse: false
  };
  $scope.changeSort = function(sort, column) {
    if (sort.column == column) {
      sort.reverse = !sort.reverse;
    } else {
      sort.column = column;
      sort.reverse = false;
    }
  };

  $scope.close = function() {
    $scope.$close(null);
  };
});
