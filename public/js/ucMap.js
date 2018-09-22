function initUCMap() {
  rushMap = new google.maps.Map(document.getElementById('ucMap'), {
    center: { lat: 41.788879, lng: -87.6064662 },
    zoom: 15
  });
};


function reserveUCAppt() {
  var waitTime = 30;

  $.get("/api/universityofchicago", function (data) {
    var totalWaitTime;
    chicago = data;
    totalWaitTime = (waitTime * chicago.length);

    var userAppt = {
      hospitalName: ("University of Chicago Medicine"),
      waitTime: totalWaitTime
    };

    newAppt(userAppt);


  });

  function newAppt(userAppt) {

    $.post("api/userappt", userAppt)
  }
};

$(document).ready(function () {
  initUCMap();

  //on click for reserve appt button
  $("#uc-reserve-appt").click(function (event) {
    event.preventDefault();
    reserveUCAppt()
    window.location.href = "/user";

  });

});