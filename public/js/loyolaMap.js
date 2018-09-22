function initLoyolaMap() {
  rushMap = new google.maps.Map(document.getElementById('loyolaMap'), {
    center: { lat: 41.8605645, lng: -87.8368233 },
    zoom: 15
  });
};

function reserveLoyolaAppt() {
  var waitTime = 30;

  $.get("/api/loyolamedicalcenter", function (data) {  
    var totalWaitTime;
    loyola = data;
    totalWaitTime = (waitTime * loyola.length);
  
    var userAppt = {
      hospitalName: ("Loyola Medical Center"),
      waitTime: totalWaitTime
    };

    $.post("api/userappt", userAppt);
  });
};

$(document).ready(function () {
  initLoyolaMap();
  
  //on click for reserve appt button
  $("#loyola-reserve-appt").click(function (event) {
    event.preventDefault();
    reserveLoyolaAppt();

    var newAppt = {
      patientFirst: localStorage.getItem("patientFirst"),
      patientLast: localStorage.getItem("patientLast"),
      patientInsurance: localStorage.getItem("patientInsurance"),
      reasonForVisit: localStorage.getItem("reasonForVisit"),
    };

    $.post("api/loyolamedicalcenter", newAppt)
    window.location.href = "/user";
  });
});