$(document).ready(function () {
    $('.timepicker').timepicker({
        timeFormat: 'HH:mm',
        interval: 60,
        minTime: '00:00',
        maxTime: '23:00',
        defaultTime: '00:00',
        startTime: '00:00',
        dynamic: true,
        dropdown: true,
        scrollbar: true
    });
    //The Timepicker was on z-index: auto, this is to prevent this
    $("#cvon").closest('div').click(function () {
            $(".ui-timepicker-container.ui-timepicker-standard").css("z-index", "7");
    });
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