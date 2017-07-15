var calender = function () {
    var eventApp = angular.module('Event', ['ui.calendar', 'ui.bootstrap']);
    var event_ende;
    var event_start;
    function initCalender(isLoggedIn, CurrenUserName, currentUserId) {
        console.log("init Calender...");
        eventApp.controller('DetailEventController', ['$scope', '$http', '$compile', '$timeout', function ($scope, $http, $compile, $timeout, uiCalendarConfig) {
            var initialLocaleCode = 'de';
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();
            //$scope.eventDetails = {};
            //$scope.eventDetails.customError = "";
            /* remove event */
            $scope.removeEvent = function (eventId) {
                console.log("Trying to remove eventId: " + eventId);
                $('#calendar').fullCalendar('removeEvents', eventId);
                $("#detailEvent").css("display", "none");
                $http.post("Gw2RaidCalender/DeleteEvent", {
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
                console.log(CurrenUserName);
                if (CurrenUserName !== "") {
                    angular.forEach(event.character, function (pvalue, pkey) {
                        for (var item in pvalue.teilnehmer) {
                            if (pvalue.teilnehmer[item] == CurrenUserName) {
                                console.log("User ist bereits angemeldet!");
                                $scope.isRegistered = true;
                                console.log($scope.isRegistered);
                            } else {
                                console.log("User ist noch nicht angemeldet!");
                                $scope.isRegistered = false;
                            }
                        }
                    });
                }
                console.log(event);
                $scope.eventDetails = event;
                console.log($scope.eventDetails);
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
                if (typeof klasse2EventId !== 'undefined') {
                    console.log("user mit der Id:", currentUserId+" will sich anmelden!");
                    console.log("EventId: " + eventId + "\nklasse2EventId: " + klasse2EventId);
                    $.each($scope.eventDetails.character, function (key, value) {
                        if (value.klasse2Event_Id == klasse2EventId) {
                            if ((value.teilnehmerAnz + 1) <= (value.maxTeilnehmer)) {
                                //Added die Einladung zu dem Objekt
                                $scope.eventDetails.character[key].teilnehmerAnz += 1;
                                //Später der currentUser
                                $scope.eventDetails.character[key].teilnehmer.push(CurrenUserName);
                                //User gilt nun als angemeldet
                                $scope.isRegistered = true;
                                $http.post("Gw2RaidCalender/UserAnmelden", {
                                    eventId: eventId,
                                    klasse2EventId: klasse2EventId,
                                    userId: currentUserId
                                }).then(function successCallback(result) {
                                    console.log(result.data);
                                    $scope.radio.class = false;
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
                }
                else {
                    $scope.eventDetails.customError = "Error: Du hast keine Klasse ausgewählt";
                }
            };
            //Vom Event abmelden
            $scope.abmelden = function (eventId, klasse2EventId) {
                console.log("user mit der Id:", currentUserId + " will sich abmelden!");
                console.log("EventId: " + eventId + "\n");
                angular.forEach($scope.eventDetails.character, function (pvalue, pkey) {
                    for (var item in pvalue.teilnehmer) {
                        console.log(pvalue.teilnehmer[item]);
                        if (pvalue.teilnehmer[item] == CurrenUserName) {
                            console.log("User Found!");
                            //Entfernt den Username aus der Teilnehmerliste
                            $scope.eventDetails.character[pkey].teilnehmer[item] = "";
                            //Zählt die TeilnehmerAnzahl um einen nach unten
                            $scope.eventDetails.character[pkey].teilnehmerAnz -= 1;
                            $http.post("Gw2RaidCalender/UserAbmelden", {
                                        eventId: eventId,
                                        klasse2EventId: pvalue.klasse2Event_Id,
                                        userId: currentUserId
                                    }).then(function successCallback(result) {
                                        console.log(result.data);
                                        //User gilt nun als abgemeldet
                                        $scope.isRegistered = false;
                                    }),
                                    function errorCallback(result) {
                                        console.log(result.data);
                                    };
                        } else {
                            console.log("User not Found!");
                        }
                    }
                });
                //$.each($scope.eventDetails.character, function (key, value) {
                //    if (value.klasse2Event_Id == klasse2EventId) {
                //            //Added die Einladung zu dem Objekt
                //            $scope.eventDetails.character[key].teilnehmerAnz -= 1;
                //        //Später der currentUser
                //            $.each(value.teilnehmer, function(key, value){
                //                console.log(value);
                //                if (value == CurrenUserName) {
                //                    $scope.eventDetails.character[key].teilnehmer[key] = "";
                //                }
                //            });
                            //User gilt nun als angemeldet
                        //    $scope.isRegistered = true;
                        //    $http.post("Gw2RaidCalender/UserAnmelden", {
                        //        eventId: eventId,
                        //        klasse2EventId: klasse2EventId,
                        //        userId: currentUserId
                        //    }).then(function successCallback(result) {
                        //        console.log(result.data);
                        //    }),
                        //    function errorCallback(result) {
                        //        console.log(result.data);
                        //    };
                        //}
                //});
            };
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
                                url: "Gw2RaidCalender/GetAllEvents",
                                type: 'GET',
                                success: function (data) {
                                    console.log(data);
                                },
                                error: function () {
                                    alert('Die Events konnten nicht geladen werden! Bitte kontaktieren Sie den Administrator');
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
            $scope.createEvent = [];
            $scope.createEvent.customError = "";
            $http({
                method: 'GET',
                url: "Gw2RaidCalender/GetAllRaids"
            }).then(function successCallback(result) {
                $scope.raids = result.data;
            }, function errorCallback(result) {
            });
            $http({
                method: 'GET',
                url: "Gw2RaidCalender/GetAllEventart"
            }).then(function successCallback(result) {
                $scope.eventart = result.data;
            }, function errorCallback(result) {
            });
            $http({
                method: 'GET',
                url: "Gw2RaidCalender/GetAllClassesWithTyp"
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
                        var title = event.title.Bezeichnung;
                    }
                    else {
                        var title = event.title;
                    }
                    var saveEventObject = { Eventart_Id: event.typ.Eventart_Id, Raid_Id: raidId, Bezeichnung: title, startTag: event_start._d, endeTag: event_ende._d, startUhrzeit: event.von, endeUhrzeit: event.bis };
                    var newJson = [];
                    var maxTeilnehmerGesamt = 0;
                    //Zusammensetzen des benötigten Json zum speichern der Klassen infos
                    $.each(event.class, function (key, value) {
                        maxTeilnehmerGesamt = maxTeilnehmerGesamt + value.maxTeilnehmer;
                        newJson.push({ Klasse_Id: parseInt(key), MaxTeilnehmer: value.maxTeilnehmer });
                    });
                    console.log(event);
                    if (maxTeilnehmerGesamt <= 10) {
                        $http.post("Gw2RaidCalender/SaveEvent", {
                            model: saveEventObject,
                            klassenModel: JSON.stringify(newJson)
                        }).then(function successCallback(result) {
                            $scope.createEvent.customError = "";
                            $('#calendar').fullCalendar('addEventSource', function () {
                                console.log(" addEventSource calender in angular");
                                console.log(result.data);
                                $('#calendar').fullCalendar('renderEvent', result.data, true); // stick? = true

                                $('#calendar').fullCalendar('unselect');
                                //Close the Window and reset the create form
                                $("#createEvent").css("display", "none");
                                $scope.event = {};
                            });
                        }),
                        function errorCallback(result) {
                            $scope.createEvent.customError = "Das Event konnte nicht gespeichert werden!";
                        };
                    }
                    else {
                        $scope.createEvent.customError = "Es können nicht mehr als 10 Leute teilnehmen!"
                    }
                }
            };

            $scope.reset = function () {
                //reset all inputs
                $scope.event = {};
            };

            //$scope.reset();
        }]);
    }
    function init(isLoggedIn, CurrenUserName, currentUserId) {
        initCalender(isLoggedIn, CurrenUserName, currentUserId);
        initCreateEvent();
    }
    return {
        Init: init
    }
}();