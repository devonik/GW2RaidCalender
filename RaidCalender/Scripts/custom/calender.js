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
    //$('.timepicker').timepicker({
    //    timeFormat: 'HH:mm',
    //    interval: 60,
    //    minTime: '00:00',
    //    maxTime: '23:00',
    //    defaultTime: '00:00',
    //    startTime: '00:00',
    //    dynamic: true,
    //    dropdown: true,
    //    scrollbar: true
    //});
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
    $('#cvon').timepicker('setTime', new Date());
    $('#cbis').timepicker('setTime', new Date());
    //The Timepicker was on z-index: auto (doesnt show), this is to prevent this
    //$("#cvon").closest('div').click(function () {
    //        $(".ui-timepicker-wrapper").css("z-index", "7");
    //});
    ////The Timepicker was on z-index: auto (doesnt show), this is to prevent this
    //$("#cbis").closest('div').click(function () {
    //    $(".ui-timepicker-container.ui-timepicker-standard").css("z-index", "7");
    //});
    $(".close").click(function () {
        console.log("click close");
        $("#createEvent").css("display", "none");
        $("#detailEvent").css("display", "none");
    });
    $(".send").click(function () {
        
    },5000);
    //$(window).click(function (event) {
    //    console.log("window click");
    //    if ($("createEvent").css("display", "block")) {
    //        $("createEvent").css("display", "none");
    //    }
    //    if ($("detailEvent").css("display", "block")) {
    //        $("detailEvent").css("display", "none");
    //    }
    //});
});