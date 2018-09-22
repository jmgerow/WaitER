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
  
      newAppt(userAppt);
      
      
    });
  
    function newAppt(userAppt) {
        
      $.post("api/userappt", userAppt)
    }
  };
  
  $(document).ready(function () {
    initRushMap();
    
    //on click for reserve appt button
    $("#rush-reserve-appt").click(function (event) {
      event.preventDefault();
      reserveRushAppt()
      window.location.href = "/user";
  
    });
  
  });