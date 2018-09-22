$(document).ready(function () {
  //materialize js initialize
  $(".sidenav").sidenav();
  $("select").formSelect();
  $(".parallax").parallax();

  //on click for find hospital button with validation
  $("#find-hospitals").on("click", function (event) {
    event.preventDefault();

    function validateInput() {
      var isValid = true;

      $(".validate").each(function () {
        if ($(this).val() === "") {
          isValid = false;
        }
      });

      $(".select").each(function () {
        if ($(this).val() === "") {
          isValid = false;
        }
      });

      return isValid;
    }

    if (validateInput() == true) {
      var userInput = {
        firstName: $("#first_name")
          .val()
          .trim(),
        lastName: $("#last_name")
          .val()
          .trim(),
        zipCode: $("#zip_code")
          .val()
          .trim(),
        reasonForVisit: $("#reasonForVisit").val(),
        insuranceProvider: $("#insurance-provider").val()
      };

      console.log(userInput);
      // localStorage.clear();
      // localStorage.setItem("firstName", userInput.firstName);
      // localStorage.setItem("lastName", userInput.lastName);
      // localStorage.setItem("zipCode", userInput.zipCode);
      // localStorage.setItem("email", userProfile);


      newUser(userInput);

      // AJAX post to update friends API
      function newUser(userInput) {
        $.post("/api/userinfo", userInput).then(
          (window.location.href = "/waitER_MAKE_APPOINTMENT")
        );
      }
    } else {
      alert("Please enter all fields before proceeding");
    }
  });

  //on click for get started button
  $("#get-started").on("click", function (event) {
    event.preventDefault();
    window.location.href = "/user";
  });

  //on click for reserve appt button
  $("#reserve-appt").on("click", function (event) {
    event.preventDefault();
    window.location.href = "/user";
    $loyolaWaitTime = $("#loyola-wait")
  });


  //function to calculate and display hospital wait times based on number of patients in queue
  getHospitalWaitTime();

  function getHospitalWaitTime() {
    var waitTime = 30;
    var $rushWaitTime = $("#rush-wait")
    var $loyolaWaitTime = $("#loyola-wait")
    var $northwesternWaitTime = $("#northwestern-wait")
    var $universityOfChicagoWaitTime = $("#universityOfChicago-wait")
    $.get("/api/rush", function (data) {
      var totalWaitTime;
      rush = data;
      totalWaitTime = (waitTime * rush.length)
      $rushWaitTime.prepend(totalWaitTime)
    });
    $.get("/api/loyolamedicalcenter", function (data) {
      var totalWaitTime;
      loyola = data;
      totalWaitTime = (waitTime * loyola.length)
      $loyolaWaitTime.prepend(totalWaitTime)
    });
    $.get("/api/northwestern", function (data) {
      var totalWaitTime;
      northwestern = data;
      totalWaitTime = (waitTime * northwestern.length)
      $northwesternWaitTime.prepend(totalWaitTime)
    });
    $.get("/api/universityofchicago", function (data) {
      var totalWaitTime;
      chicago = data;
      totalWaitTime = (waitTime * chicago.length)
      $universityOfChicagoWaitTime.prepend(totalWaitTime)
    });
  };

  // $("#nw-map-init").on("click", function (nwMap) {
  //   event.preventDefault();
  //   window.location.href = "/northwestern";
    
    
  // });
  //google maps
  // initLoyolaMap();
  // initNWMap();
  // initRushMap()
  // initUCMap()
  // var rushMap;

  // function initRushMap() {
  //   rushMap = new google.maps.Map(document.getElementById('rushMap'), {
  //     center: { lat: 41.8741337, lng: -87.6712806 },
  //     zoom: 15
  //   });
  // };
  // function initNWMap() {
  //   nwMap = new google.maps.Map(document.getElementById('nwMap'), {
  //     center: { lat: 41.8741337, lng: -87.6712806 },
  //     zoom: 15
  //   });
  // };
  // function initLoyolaMap() {
  //   map = new google.maps.Map(document.getElementById('loyolaMap'), {
  //     center: { lat: 41.8741337, lng: -87.6712806 },
  //     zoom: 15
  //   });
  // };
  // function initUCMap() {
  //   map = new google.maps.Map(document.getElementById('ucMap'), {
  //     center: { lat: 41.8741337, lng: -87.6712806 },
  //     zoom: 15
  //   });
  // };

});
