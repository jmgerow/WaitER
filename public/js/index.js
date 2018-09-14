$(document).ready(function () {

  //materialize js initialize
  $(".sidenav").sidenav();
  $("select").formSelect();
  $(".parallax").parallax();

  //on click for find hospital button with validation
  $("#find-hospitals").on("click", function(event) {
    event.preventDefault();
    function validateInput() {
      var isValid = true;

      $(".validate").each(function() {
        if ($(this).val() === "") {
          isValid = false;
        }
      });

      $(".select").each(function() {
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
        email: $("#email")
          .val()
          .trim(),
        password: $("#password")
          .val()
          .trim(),
        reasonForVisit: $("#reasonForVisit").val(),
        insuranceProvider: $("#insurance-provider").val()
      };

      console.log(userInput);
      newUser(userInput);
      // AJAX post to update friends API
      function newUser(userInput) {
        $.post("/api/userinfo", userInput);
        // .then(getAuthors);
      }
    } else {
      alert("Please enter all fields before proceeding");
    }
  });
});
