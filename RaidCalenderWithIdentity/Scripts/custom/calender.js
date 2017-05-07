var calender = function () {
    var eventApp = angular.module('Event', ['ui.calendar', 'ui.bootstrap']);
    var event_ende;
    var event_start;
    function initCalender(isLoggedIn, CurrenUserName, currentUserId) {
        console.log("init Calender...");
        //var eventApp = angular.module('event', []);
        //$(document).ready(function () {
        
        //today = new Date();
        //var year = today.getFullYear();
        //var month = today.getMonth() + 1;
        //var day = today.getDate();
        ////Weil die JQuery Funktion die 0 im Datum weglässt
        //if (day < 10) {
        //    day = '0' + day;
        //}
        //if (month < 10) {
        //    month = '0' + month;
        //}
        //var fullDate = year + "-" + month + "-" + day;
        //console.log(fullDate.toString());
        //var initialLocaleCode = 'de';
        //var eventApp = angular.module('addEvent', []);
        //eventApp.controller('AddEventController', ['$scope', '$http', function ($scope, $http) {
        //    console.log("im AddEventController controller");
        //}]);
        //eventApp.controller('DetailEventController', ['$scope', '$http', function ($scope, $http) {
        eventApp.controller('DetailEventController', ['$scope', '$http', '$compile', '$timeout', function ($scope, $http, $compile, $timeout, uiCalendarConfig) {
            //console.log("Im DetailEventController");
            //console.log("HAAAAAALLLLO");
            ////console.log(calEvent);
            //$scope.eventDetails = [];
            ////$scope.eventDetails = calEvent;
            //$scope.eventDetails = "BLABLA";
            //console.log("$scope.eventDetails");
            //console.log($scope.eventDetails);
            //$scope.click = function () {
            //    $scope.eventDetails = "AFTER CLICK";
            //}
            var initialLocaleCode = 'de';
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();
            //$scope.customRule = { isReadOnly: true, isRegistered: false };
            //$scope.changeTo = 'Hungarian';
            /* event source that pulls from google.com */
            //$scope.eventSources = [{
            //    title: 'All Day Event',start: new Date(y, m, 1)
            //}];
            /* event source that contains custom events on the scope */
            //$scope.events = [
            //  {
            //    url: "/Gw2RaidCalender/GetAllEvents",
            //    type: 'GET',
            //    success: function (data) {
            //        console.log(data);
            //    },
            //    error: function () {
            //        alert('there was an error while fetching events!');
            //    }//,
            //    //color: 'yellow',   // a non-ajax option
            //    //textColor: 'black' // a non-ajax option
            //}
            //];
            /* event source that calls a function on every view switch */
            //$scope.eventsF = function (start, end, timezone, callback) {
            //    var s = new Date(start).getTime() / 1000;
            //    var e = new Date(end).getTime() / 1000;
            //    var m = new Date(start).getMonth();
            //    var events = [{ title: 'Feed Me ' + m, start: s + (50000), end: s + (100000), allDay: false, className: ['customFeed'] }];
            //    callback(events);
            //};

            //$scope.calEventsExt = {
            //    color: '#f00',
            //    textColor: 'yellow',
            //    events: [
            //       { type: 'party', title: 'Lunch', start: new Date(y, m, d, 12, 0), end: new Date(y, m, d, 14, 0), allDay: false },
            //       { type: 'party', title: 'Lunch 2', start: new Date(y, m, d, 12, 0), end: new Date(y, m, d, 14, 0), allDay: false },
            //       { type: 'party', title: 'Click for Google', start: new Date(y, m, 28), end: new Date(y, m, 29), url: 'http://google.com/' }
            //    ]
            //};
            /* remove event */
            $scope.removeEvent = function (eventId) {
                console.log("Trying to remove eventId: " + eventId);
                $('#calendar').fullCalendar('removeEvents', eventId);
                $("#detailEvent").css("display", "none");
                $http.post("/Gw2RaidCalender/DeleteEvent", {
                    eventId: eventId
                }).then(function successCallback(result) {
                    console.log(result.data);
                }),
                    function errorCallback(result) {
                        console.log(result.data);
                    };
            }
            //$scope.test = {};
            /* alert on eventClick */
            $scope.EventClick = function (event, jsEvent, view) {
                
                var isRegistered;
                var testi;
                
                angular.forEach(event.character, function (pvalue, pkey) {
                    for (var item in pvalue.teilnehmer) {
                        if (pvalue.teilnehmer[item] == CurrenUserName) {
                            console.log("User ist bereits angemeldet!");
                            isRegistered = true;
                            testi = "WAHR";
                        } else {
                            console.log("User ist noch nicht angemeldet!");
                            isRegistered = false;
                            testi = "FALSCH";
                        }
                    }
                });
                $scope.isRegistered = isRegistered;
                $scope.eventDetails = event;
                console.log($scope.customRule);
                //$scope.eventDetails = event;
                $("#detailEvent").css("display", "block");
            };
            $scope.radio = {};
            
            if (isLoggedIn == 'True') {
                $scope.isReadOnly = false;
            }
            else {
                $scope.isReadOnly = true;
            }
            //Zum Event anmelden
            $scope.anmelden = function (eventId, klasse2EventId) {
                console.log("EventId: " + eventId + "\nklasse2EventId: " + klasse2EventId);
                console.log($scope.eventDetails.character);
                $.each($scope.eventDetails.character, function (key, value) {
                    console.log(value);
                    if (value.klasse2Event_Id == klasse2EventId) {
                        console.log(value);
                        if ((value.teilnehmerAnz + 1) <= (value.maxTeilnehmer)) {
                            //Added die Einladung zu dem Objekt
                            $scope.eventDetails.character[key].teilnehmerAnz += 1;
                            //Später der currentUser
                            $scope.eventDetails.character[key].teilnehmer.push(CurrenUserName);
                            //User gilt nun als angemeldet
                            $scope.isRegistered = true;
                            $http.post("/Gw2RaidCalender/UserAnmelden", {
                                eventId: eventId,
                                klasse2EventId: klasse2EventId,
                                userId: currentUserId
                            }).then(function successCallback(result) {
                                console.log(result.data);
                            }),
                    function errorCallback(result) {
                        console.log(result.data);
                    };
                        }
                        else {
                            alert("Es können nur max." + value.maxTeilnehmer + "x " + value.name + " teilnehmen");
                            return;
                        }
                    }
                });
                
            };
            //$(".btn_anmelden").click(function () {
            //    //    //Sieht nach welcher Character geupdatet werden soll anhand der radio
            //    //    var this_char = $(this).attr("name");
            //    //    //Es dürfen sich nicht mehr als die maximale Anzahl anmelden
            //    //    if ((calEvent.character[this_char].people_in + 1) <= (calEvent.character[this_char].count)) {
            //    //        //Added die Einladung zu dem Objekt
            //    //        calEvent.character[this_char].people_in = calEvent.character[this_char].people_in + 1;
            //    //        //Später der currentUser
            //    //        calEvent.character[this_char].teilnehmer = "Killingspree.1370";
            //    //        //Updatet die Zahl auf der Oberfläche //// vllt kann man hier angular verwenden ????
            //    //        $("#" + this_char + "Count").text("(" + calEvent.character[this_char].people_in + "/" + calEvent.character[this_char].count + ")");
            //    //        //Fügt den Username des aktuellen Users der GUI hinzu
            //    //        $("#" + this_char + "Dropdown").append("<p>" + "Killingspree.1370" + "</p>");
            //    //        //Updatet das Event im calender
            //    //        $('#calendar').fullCalendar('updateEvent', calEvent);
            //    //    }
            //    //    else {
            //    //        alert("Es können nur max." + calEvent.character[this_char].count + "x " + this_char + " teilnehmen");
            //    //    }
            //    //});
            /* alert on Drop */
            $scope.alertOnDrop = function (event, delta, revertFunc, jsEvent, ui, view) {
                console.log('Event Dropped to make dayDelta ' + delta);
            };
            /* alert on Resize */
            $scope.alertOnResize = function (event, delta, revertFunc, jsEvent, ui, view) {
                $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
            };
            /* add and removes an event source of choice */
            //$scope.addRemoveEventSource = function (sources, source) {
            //    var canAdd = 0;
            //    angular.forEach(sources, function (value, key) {
            //        if (sources[key] === source) {
            //            sources.splice(key, 1);
            //            canAdd = 1;
            //        }
            //    });
            //    if (canAdd === 0) {
            //        sources.push(source);
            //    }
            //};
            ;
            /* Change View */
            //$scope.changeView = function (view, calendar) {
            //    uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
            //};
            /* Change View */
            //$scope.renderCalendar = function (calendar) {
            //    $timeout(function () {
            //        if (uiCalendarConfig.calendars[calendar]) {
            //            uiCalendarConfig.calendars[calendar].fullCalendar('render');
            //        }
            //    });
            //};
            /* Render Tooltip */
            $scope.eventRender = function (event, element, view) {
                element.attr({
                    'tooltip': event.title,
                    'tooltip-append-to-body': true
                });
                
                $compile(element)($scope);
            };
            /* config object */
            $scope.uiConfig = {
                calendar: {
                    locale: initialLocaleCode,
                    editable: true,
                    // allow "more" link when too many events
                    eventLimit: true,
                    weekNumbers: true,
                    weekNumbersWithinDays: true,
                    weekNumbersWithinDays: true,
                    selectable: true,
                    selectHelper: false,
                    header: {
                        left: 'title',
                        center: '',
                        right: 'today prev,next'
                    },
                    eventSources: [
                            {
                                url: "/Gw2RaidCalender/GetAllEvents",
                                type: 'GET',
                                success: function (data) {
                                    console.log(data);
                                },
                                error: function () {
                                    alert('there was an error while fetching events!');
                                }
                            }
                    ],
                    select: function (start, end) {
                        $("#createEvent").css("display", "block");
                        //Set global variables to use the times in form save
                        event_start = start;
                        event_ende = end;
                    },
                    eventClick: $scope.EventClick,
                    eventDrop: $scope.alertOnDrop,
                    eventResize: $scope.alertOnResize,
                    eventRender: $scope.eventRender
                }
            };
      }]);
    }
    function initCreateEvent() {
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        //var eventApp = angular.module('addEvent', []);
        eventApp.controller('AddEventController', ['$scope', '$http', function ($scope, $http) {
            console.log("im AddEventController controller");
            $http({
                method: 'GET',
                url: "/Gw2RaidCalender/GetAllRaids"
            }).then(function successCallback(result) {
                $scope.raids = result.data;
            }, function errorCallback(result) {
            });
            $http({
                method: 'GET',
                url: "/Gw2RaidCalender/GetAllEventart"
            }).then(function successCallback(result) {
                $scope.eventart = result.data;
            }, function errorCallback(result) {
            });
            $http({
                method: 'GET',
                url: "/Gw2RaidCalender/GetAllClassesWithTyp"
            }).then(function successCallback(result) {
                console.log(result.data);
                var bersis = [];
                var basics = [];
                var condis = [];
                $.each(result.data, function (index, value) {
                    if (value.Klassenart === "Basic") {
                        basics.push(value);
                    }
                    else if (value.Klassenart === "Condi") {
                        condis.push(value);
                    }
                    else if (value.Klassenart === "Bersi") {
                        bersis.push(value);
                    }
                });
                console.log("condis:");
                console.log(condis);
                $scope.condis = condis;
                console.log("basics:");
                console.log(basics);
                $scope.basics = basics;
                console.log("bersis:");
                console.log(bersis);
                $scope.bersis = bersis;
                $scope.classes = result.data;
                //console.log($scope.classes[1].Klasse_Id);

            }, function errorCallback(result) {
            });

          
            $scope.update = function (event) {
                //$scope.event.class.push($scope.classes[1].Klasse_Id);
                //console.log(event.class);
                if ($scope.eventForm.$valid) {
                    if (event.typ.Bezeichnung == 'Raid') {
                        var raidId = event.title.Raid_Id;
                        event.title = event.title.Bezeichnung;
                    }
                    var saveEventObject = { Eventart_Id: event.typ.Eventart_Id, Raid_Id: raidId, Bezeichnung: event.title, startTag: event_start._d, endeTag: event_ende._d, startUhrzeit: event.von, endeUhrzeit: event.bis };
                    var newJson = [];
                    //Zusammensetzen des benötigten Json zum speichern der Klassen infos
                    $.each(event.class, function (key, value) {
                        console.log(key);
                        console.log(value);
                        newJson.push({ Klasse_Id: parseInt(key), MaxTeilnehmer: value.maxTeilnehmer });
                    });
                    $http.post("/Gw2RaidCalender/SaveEvent", {
                        model: saveEventObject,
                        klassenModel: JSON.stringify(newJson)
                    }).then(function successCallback(result) {
                        console.log(result.data);
                    }),
                    function errorCallback(result) {
                        console.log(result.data);
                    };
                    //Refresh calender events
                    
                    $('#calendar').fullCalendar('addEventSource', function () {
                        console.log(" addEventSource calender in angular");
                        var eventNew = $.extend(true, this.settings, event, { start: event_start._d, end: event_ende._d});
                        console.log(eventNew);
                        $('#calendar').fullCalendar('renderEvent', eventNew, true); // stick? = true

                        $('#calendar').fullCalendar('unselect');
                        //Close the Window and reset the create form
                        $("#createEvent").css("display", "none");

                    });
                    //????
                    //$('#calendar').fullCalendar('refetchEvents');
                    $scope.event = {};
                }
            };

            $scope.reset = function () {
                //reset all inputs
                $scope.event = {};
            };

            $scope.reset();
        }]);
    }
    function initDetailsEvent() {

    }
    function init(isLoggedIn, CurrenUserName, currentUserId) {
        initCalender(isLoggedIn, CurrenUserName, currentUserId);
        initCreateEvent();
    }
    return {
        Init: init
    }
}();