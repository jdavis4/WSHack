var base_url = "http://api.wunderground.com/api/8b1c1856ceead734/geolookup/conditions/q/"
var ext = ".json"

$(function($) {
  //Upon submit, submit an ajax request and return JSON object
  $("#target").submit(function() {
      zip = $("#loc").val();
      console.log(zip);

      query_url = base_url + zip + ext;

      var results = $.getJSON(query_url);
      console.log(results);
});

}); // end of document.ready



