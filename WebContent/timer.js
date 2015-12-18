angular.module('time', [])
.directive('time', ['$interval', 'dateFilter', function($interval, dateFilter) {

  return {
	  restrict: 'E', // A: Attribute, E: Element, C: Class, possono essere combinati 'AEC'
	  link: function (scope, element, attrs) {
	    var timeoutId;

	    scope.format = 'd/M/yy HH:mm:ss';

	    function updateTime() {
	      element.text(dateFilter(new Date(), scope.format));
	    }

	    element.on('$destroy', function() {
	      $interval.cancel(timeoutId);
	    });

	    // start the UI update process; save the timeoutId for canceling
	    timeoutId = $interval(function() {
	      updateTime(); // update DOM
	    }, 1000);
	  }
  };
}]);