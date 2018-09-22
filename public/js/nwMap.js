function initNWMap() {
  rushMap = new google.maps.Map(document.getElementById('nwMap'), {
    center: { lat: 41.8946315, lng: -87.6234987 },
    zoom: 16
  });
};


function reserveNorthwesternAppt() {
  var waitTime = 30;

  $.get("/api/northwestern", function (data) {
    var totalWaitTime;
    northwestern = data;
    totalWaitTime = (waitTime * northwestern.length);

    var userAppt = {
      hospitalName: ("Northwestern Memorial"),
      waitTime: totalWaitTime
    };

    newAppt(userAppt);


  });

  function newAppt(userAppt) {

    $.post("api/userappt", userAppt)
  }
};

$(document).ready(function () {
  initNWMap();

  //on click for reserve appt button
  $("#northwestern-reserve-appt").click(function (event) {
    event.preventDefault();
    reserveNorthwesternAppt()
    window.location.href = "/user";

  });

});