/*function parse_data(parsed_json) {
         var location = parsed_json['location']['city'];
        var temp_f = parsed_json['current_observation']['temp_f'];
        var relative_humidity = parsed_json['current_observation']['relative_humidity'];
        var precip_1hr_in = parsed_json['current_observation']['precip_1hr_in'];
        var weather = parsed_json['current_observation']['weather'];
        var icon = parsed_json['current_observation']['icon'];
        
        results = {city:location, temp:temp_f, hum:relative_humidity, precip:precip_1hr_in, icon:icon}

        console.log(results);
        return results;
      } */


function get_weather( ) {
		return results.weath;
	}

function get_temp( ) {
		return results.temp;
   }

function get_icon( ) { //will have to make code to set src
		var image = results.ic;
		var url = "http://icons.wxug.com/i/c/e/";
		var gif = ".gif";
		return url + image + gif;
   }

function get_loc( ) {
		return results.city;
   }

function get_st( ) {
    return results.st;
   }

function get_precip( ) {
		return results.precip;
   }

 function get_humidity( ) {
		return results.hum;
   }