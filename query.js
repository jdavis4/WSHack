var base_url = "http://api.wunderground.com/api/8b1c1856ceead734/geolookup/conditions/q/"
var ext = ".json";
//var results;

$(function($) {
  //Upon submit, submit an ajax request and return JSON object
  $("#zip").submit(function() {
      zip = $("#loc").val();
      console.log(zip);

      query_url = base_url + zip + ext;

      $.getJSON(query_url,parse_data);
  
});

}); // end of document.ready

function parse_data(parsed_json) {
        var location = parsed_json['location']['city'];
        var temp_f = parsed_json['current_observation']['temp_f'];
        var relative_humidity = parsed_json['current_observation']['relative_humidity'];
        var precip_1hr_in = parsed_json['current_observation']['precip_1hr_in'];
        var weather = parsed_json['current_observation']['weather'];
        var icon = parsed_json['current_observation']['icon'];
        var state = parsed_json['location']['state'];
        
        results = {city:location, temp:temp_f, hum:relative_humidity, precip:precip_1hr_in, weath:weather, ic:icon, st:state}

        console.log(results);
       // console.log("typeof results in parse_data " + typeof(results))
       // console.log("typeof city in parse_data" + typeof(results.city));
        document.getElementById("loc").placeholder = results.city; 
        
        displayResults(results);
      }

function displayResults(){
    var display = document.querySelector("#display");
    
        //removes elements from page when button is clicked
        while (display.hasChildNodes()) {
            display.removeChild(display.firstChild);
        }
    
    //   var weatherResult = results;
    //    console.log("Printed from displayResults function");
    //    console.log(resultsDisp);

        var weather = document.createElement("h4");
        weather.appendChild(document.createTextNode(results.weath));
        display.appendChild(weather);
    }