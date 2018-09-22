function initRushMap() {
    rushMap = new google.maps.Map(document.getElementById('rushMap'), {
      center: { lat: 41.8741337, lng: -87.6712806 },
      zoom: 15
    });
  };

  function reserveRushAppt() {
    var waitTime = 30;
  
    $.get("/api/rush", function (data) {  
      var totalWaitTime;
      rush = data;
      totalWaitTime = (waitTime * rush.length);
    
      var userAppt = {
        hospitalName: ("Rush"),
        waitTime: totalWaitTime
      };

      $.post("api/userappt", userAppt)
      
    });
  };
  
  $(document).ready(function () {
    initRushMap();
    
    //on click for reserve appt button
    $("#rush-reserve-appt").click(function (event) {
      event.preventDefault();
      reserveRushAppt()

      var newAppt = {
        patientFirst: localStorage.getItem("patientFirst"),
        patientLast: localStorage.getItem("patientLast"),
        patientInsurance: localStorage.getItem("patientInsurance"),
        reasonForVisit: localStorage.getItem("reasonForVisit"),
      };
  
      $.post("api/rush", newAppt)
      window.location.href = "/user";
    });
  });