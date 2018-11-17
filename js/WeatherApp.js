if("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
  });
} else {
  loadWeather("Kolkata, IN","");
}

$(document).ready(function () {
    setInterval(getWeather,10000);
});

function loadWeather(location, woeid) {
  $.simpleWeather({
      location: location,
      woeid: woeid,
      unit: 'c',
      success: function (Weather) {
        city = Weather.city;
        temp = Weather.temp+'&deg;';
        wcode = '<img class="Weathericon" src="images/weathericon/'+ weather.code +'.svg">';
        wind = '<p>' + Weather.wind.speed + '</p><p>' + Weather.unit.speed + '</p>';

        humidity = Weather.humidity + ' %';

        $(".location").text(city);
        $(".temperature").html(temp);
        $(".climate_bg").html(wcode);
        $(".windspeed").html(wind);
        $(".humidity").text(humidity);
      },

      error: function (error) {
        $(".error").html('<p>' + error + '</p>');

      }
  });

}
