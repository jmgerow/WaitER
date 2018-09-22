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

    $.post("api/userappt", userAppt)

  });
};

$(document).ready(function () {
  initUCMap();

  //on click for reserve appt button
  $("#uc-reserve-appt").click(function (event) {
    event.preventDefault();
    reserveUCAppt()

    var newAppt = {
      patientFirst: localStorage.getItem("patientFirst"),
      patientLast: localStorage.getItem("patientLast"),
      patientInsurance: localStorage.getItem("patientInsurance"),
      reasonForVisit: localStorage.getItem("reasonForVisit"),
    };

    $.post("api/universityofchicago", newAppt)
    window.location.href = "/user";
  });
});
