$(document).ready(function () {
    
    //var eventApp = angular.module('event', []);
    //eventApp.controller('EventController', ['$scope', function ($scope) {
    //    $scope.master = {};
    //        console.log("im angular controller");
    //    $scope.update = function (event) {
    //        console.log(event);
    //        $scope.master = angular.copy(master);
    //    };

    //    $scope.reset = function () {
    //        $scope.user = angular.copy($scope.master);
    //    };

    //    $scope.reset();
    //}]);
    //http://jonthornton.github.io/jquery-timepicker/
    $('.timepicker').timepicker({
        //Set the scroll position to local time if no value selected.
        'scrollDefault': 'now',
        //timepicker.jquery uses the time portion of PHP's date formatting commands. (http://php.net/manual/en/function.date.php)
        'timeFormat': 'H:i',
        //jquery-timepicker allows entering times via the keyboard. 
        //Setting forceRoundTime to true will round the entered time to the nearest option on the dropdown list.
        'forceRoundTime': true,
        'disableTextInput':true,
        'orientation': 'b',
        //Update the input with the currently highlighted time value when the timepicker loses focus.
        'selectOnBlur':true
    });
    //$('#cvon').timepicker('setTime', new Date());
    //$('#cbis').timepicker('setTime', new Date());
    $(".close").click(function () {
        console.log("click close");
        $(".modal").css("display", "none");
    });
});