$(document).ready(function () {


            /* Deck of Cards */
            $(".button-api").click(function (e) {
                var london = "2643743";
                var wroclaw = "3081368";
                var moscow = "524901";
                var chicago = "4887398";
                var paris  = "2988507";
                var berlin = "2950159";
                var toronto = "6167865";
                var melbourne = "2158177";
                var tokyo = "1850147";

                var cities = [london, wroclaw, moscow, chicago, paris, berlin, toronto, melbourne, tokyo];

                /**
                for (i = 0; i < cities; i++) {
                    /* First Card
                    $.ajax({
                        type: "POST",
                        url: "http://api.openweathermap.org/data/2.5/weather?id=" + cities[i] + "&appid=de6d52c2ebb7b1398526329875a49c57&units=metric",
                        dataType: "json",
                        success: function (result, status, xhr) {

                            var name = $("<h2>" +  result["name"] + "</h2>");
                            var description = $("<p>" + result["weather"][0]["description"] + "</p>");
                            var temperature = $("<h3>Temperature: " +  result["main"]["temp"] + "°C</h3>");
                            var humidity = $("<h3>Humidity: " +  result["main"]["humidity"] + "%</h3>");
                            var wind = $("<h3>Wind: " +  result["wind"]["speed"] + "km/h</h3>");
                            var country = $("<h4>" +  result["sys"]["country"] + "</h4>");

                            $(".name1").html(name);
                            $(".description1").html(description);
                            $(".temperature1").html(temperature);
                            $(".humidity1").html(humidity);
                            $(".wind1").html(wind);
                            $(".country1").html(country);
                            $(".icon1").html(icon);

                        },
                        error: function (xhr, status, error) {
                            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                        }
                    });

                }
                */



                	/* First Card*/
                    $.ajax({
                        type: "POST",
                        url: "http://api.openweathermap.org/data/2.5/weather?id=" + london + "&appid=de6d52c2ebb7b1398526329875a49c57&units=metric",
                        dataType: "json",
                        success: function (result, status, xhr) {

                            var name = $("<h2>" +  result["name"] + "</h2>");
                            var description = $("<p>" + result["weather"][0]["description"] + "</p>");
                            var temperature = $("<h3>Temperature: " +  result["main"]["temp"] + "°C</h3>");
                            var humidity = $("<h3>Humidity: " +  result["main"]["humidity"] + "%</h3>");
                            var wind = $("<h3>Wind: " +  result["wind"]["speed"] + "km/h</h3>");
                            var country = $("<h4>" +  result["sys"]["country"] + "</h4>");

                            $(".name1").html(name);
                            $(".description1").html(description);
                            $(".temperature1").html(temperature);
                            $(".humidity1").html(humidity);
                            $(".wind1").html(wind);
                            $(".country1").html(country);
                            $(".icon1").html(icon);

                        },
                        error: function (xhr, status, error) {
                            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                        }
                    });

                    /* Second Card*/
                    $.ajax({
                        type: "POST",
                        url: "http://api.openweathermap.org/data/2.5/weather?id=" + wroclaw + "&appid=de6d52c2ebb7b1398526329875a49c57&units=metric",
                        dataType: "json",
                        success: function (result, status, xhr) {

                            var name = $("<h2>" +  result["name"] + "</h2>");
                            var description = $("<p>" + result["weather"][0]["description"] + "</p>");
                            var temperature = $("<h3>Temperature: " +  result["main"]["temp"] + "°C</h3>");
                            var humidity = $("<h3>Humidity: " +  result["main"]["humidity"] + "%</h3>");
                            var wind = $("<h3>Wind: " +  result["wind"]["speed"] + "km/h</h3>");
                            var country = $("<h4>" +  result["sys"]["country"] + "</h4>");

                            $(".name2").html(name);
                            $(".description2").html(description);
                            $(".temperature2").html(temperature);
                            $(".humidity2").html(humidity);
                            $(".wind2").html(wind);
                            $(".country2").html(country);
                            $(".icon2").html(icon);

                        },
                        error: function (xhr, status, error) {
                            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                        }
                    });

                    /* Third Card*/
                    $.ajax({
                        type: "POST",
                        url: "http://api.openweathermap.org/data/2.5/weather?id=" + moscow + "&appid=de6d52c2ebb7b1398526329875a49c57&units=metric",
                        dataType: "json",
                        success: function (result, status, xhr) {

                            var name = $("<h2>" +  result["name"] + "</h2>");
                            var description = $("<p>" + result["weather"][0]["description"] + "</p>");
                            var temperature = $("<h3>Temperature: " +  result["main"]["temp"] + "°C</h3>");
                            var humidity = $("<h3>Humidity: " +  result["main"]["humidity"] + "%</h3>");
                            var wind = $("<h3>Wind: " +  result["wind"]["speed"] + "km/h</h3>");
                            var country = $("<h4>" +  result["sys"]["country"] + "</h4>");

                            $(".name3").html(name);
                            $(".description3").html(description);
                            $(".temperature3").html(temperature);
                            $(".humidity3").html(humidity);
                            $(".wind3").html(wind);
                            $(".country3").html(country);
                            $(".icon3").html(icon);

                        },
                        error: function (xhr, status, error) {
                            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                        }
                    });

                    /* Fourth Card*/
                    $.ajax({
                        type: "POST",
                        url: "http://api.openweathermap.org/data/2.5/weather?id=" + chicago + "&appid=de6d52c2ebb7b1398526329875a49c57&units=metric",
                        dataType: "json",
                        success: function (result, status, xhr) {

                            var name = $("<h2>" +  result["name"] + "</h2>");
                            var description = $("<p>" + result["weather"][0]["description"] + "</p>");
                            var temperature = $("<h3>Temperature: " +  result["main"]["temp"] + "°C</h3>");
                            var humidity = $("<h3>Humidity: " +  result["main"]["humidity"] + "%</h3>");
                            var wind = $("<h3>Wind: " +  result["wind"]["speed"] + "km/h</h3>");
                            var country = $("<h4>" +  result["sys"]["country"] + "</h4>");

                            $(".name4").html(name);
                            $(".description4").html(description);
                            $(".temperature4").html(temperature);
                            $(".humidity4").html(humidity);
                            $(".wind4").html(wind);
                            $(".country4").html(country);
                            $(".icon4").html(icon);

                        },
                        error: function (xhr, status, error) {
                            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                        }
                    });

                    /* Fifth Card*/
                    $.ajax({
                        type: "POST",
                        url: "http://api.openweathermap.org/data/2.5/weather?id=" + paris + "&appid=de6d52c2ebb7b1398526329875a49c57&units=metric",
                        dataType: "json",
                        success: function (result, status, xhr) {

                            var name = $("<h2>" +  result["name"] + "</h2>");
                            var description = $("<p>" + result["weather"][0]["description"] + "</p>");
                            var temperature = $("<h3>Temperature: " +  result["main"]["temp"] + "°C</h3>");
                            var humidity = $("<h3>Humidity: " +  result["main"]["humidity"] + "%</h3>");
                            var wind = $("<h3>Wind: " +  result["wind"]["speed"] + "km/h</h3>");
                            var country = $("<h4>" +  result["sys"]["country"] + "</h4>");

                            $(".name5").html(name);
                            $(".description5").html(description);
                            $(".temperature5").html(temperature);
                            $(".humidity5").html(humidity);
                            $(".wind5").html(wind);
                            $(".country5").html(country);
                            $(".icon5").html(icon);

                        },
                        error: function (xhr, status, error) {
                            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                        }
                    });

                    /* Sixth Card*/
                    $.ajax({
                        type: "POST",
                        url: "http://api.openweathermap.org/data/2.5/weather?id=" + berlin + "&appid=de6d52c2ebb7b1398526329875a49c57&units=metric",
                        dataType: "json",
                        success: function (result, status, xhr) {

                            var name = $("<h2>" +  result["name"] + "</h2>");
                            var description = $("<p>" + result["weather"][0]["description"] + "</p>");
                            var temperature = $("<h3>Temperature: " +  result["main"]["temp"] + "°C</h3>");
                            var humidity = $("<h3>Humidity: " +  result["main"]["humidity"] + "%</h3>");
                            var wind = $("<h3>Wind: " +  result["wind"]["speed"] + "km/h</h3>");
                            var country = $("<h4>" +  result["sys"]["country"] + "</h4>");

                            $(".name6").html(name);
                            $(".description6").html(description);
                            $(".temperature6").html(temperature);
                            $(".humidity6").html(humidity);
                            $(".wind6").html(wind);
                            $(".country6").html(country);
                            $(".icon6").html(icon);

                        },
                        error: function (xhr, status, error) {
                            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                        }
                    });

                     /* Seventh Card*/
                    $.ajax({
                        type: "POST",
                        url: "http://api.openweathermap.org/data/2.5/weather?id=" + toronto + "&appid=de6d52c2ebb7b1398526329875a49c57&units=metric",
                        dataType: "json",
                        success: function (result, status, xhr) {

                            var name = $("<h2>" +  result["name"] + "</h2>");
                            var description = $("<p>" + result["weather"][0]["description"] + "</p>");
                            var temperature = $("<h3>Temperature: " +  result["main"]["temp"] + "°C</h3>");
                            var humidity = $("<h3>Humidity: " +  result["main"]["humidity"] + "%</h3>");
                            var wind = $("<h3>Wind: " +  result["wind"]["speed"] + "km/h</h3>");
                            var country = $("<h4>" +  result["sys"]["country"] + "</h4>");

                            $(".name7").html(name);
                            $(".description7").html(description);
                            $(".temperature7").html(temperature);
                            $(".humidity7").html(humidity);
                            $(".wind7").html(wind);
                            $(".country7").html(country);
                            $(".icon7").html(icon);

                        },
                        error: function (xhr, status, error) {
                            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                        }
                    });

                     /* Eight Card*/
                    $.ajax({
                        type: "POST",
                        url: "http://api.openweathermap.org/data/2.5/weather?id=" + melbourne + "&appid=de6d52c2ebb7b1398526329875a49c57&units=metric",
                        dataType: "json",
                        success: function (result, status, xhr) {

                            var name = $("<h2>" +  result["name"] + "</h2>");
                            var description = $("<p>" + result["weather"][0]["description"] + "</p>");
                            var temperature = $("<h3>Temperature: " +  result["main"]["temp"] + "°C</h3>");
                            var humidity = $("<h3>Humidity: " +  result["main"]["humidity"] + "%</h3>");
                            var wind = $("<h3>Wind: " +  result["wind"]["speed"] + "km/h</h3>");
                            var country = $("<h4>" +  result["sys"]["country"] + "</h4>");

                            $(".name8").html(name);
                            $(".description8").html(description);
                            $(".temperature8").html(temperature);
                            $(".humidity8").html(humidity);
                            $(".wind8").html(wind);
                            $(".country8").html(country);
                            $(".icon8").html(icon);

                        },
                        error: function (xhr, status, error) {
                            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                        }
                    });

                     /* Nineth Card*/
                    $.ajax({
                        type: "POST",
                        url: "http://api.openweathermap.org/data/2.5/weather?id=" + tokyo + "&appid=de6d52c2ebb7b1398526329875a49c57&units=metric",
                        dataType: "json",
                        success: function (result, status, xhr) {

                            var name = $("<h2>" +  result["name"] + "</h2>");
                            var description = $("<p>" + result["weather"][0]["description"] + "</p>");
                            var temperature = $("<h3>Temperature: " +  result["main"]["temp"] + "°C</h3>");
                            var humidity = $("<h3>Humidity: " +  result["main"]["humidity"] + "%</h3>");
                            var wind = $("<h3>Wind: " +  result["wind"]["speed"] + "km/h</h3>");
                            var country = $("<h4>" +  result["sys"]["country"] + "</h4>");

                            $(".name9").html(name);
                            $(".description9").html(description);
                            $(".temperature9").html(temperature);
                            $(".humidity9").html(humidity);
                            $(".wind9").html(wind);
                            $(".country9").html(country);
                            $(".icon9").html(icon);

                        },
                        error: function (xhr, status, error) {
                            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                        }
                    });
            });

        });