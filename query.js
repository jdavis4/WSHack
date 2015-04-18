var base_url = "http://api.wunderground.com/api/8b1c1856ceead734/geolookup/conditions/q/"
var ext = ".json"

$(function($) {
  //Upon submit, submit an ajax request and return JSON object
  $("#target").submit(function() {
      zip = $("#loc").val();
      console.log(zip);

      query_url = base_url + zip + ext;
      console.log(query_url);
      var results = $.getJSON(query_url);
      console.log(results);

      var info = JSON.stringify(results);
      console.log(info);
      console.log(info.response)
      info = JSON.parse(results);
      //console.log(info);

      document.getElementById('info').innerHTML = results.city +", "+ results.state +" "+ results.zip;
      document.getElementById('display').innerHTML = info;
});

}); // end of document.ready



