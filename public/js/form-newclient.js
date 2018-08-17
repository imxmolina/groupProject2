// MAKE SURE TO ADD THIS SCRIPT TAG TO THE HTML HEADER
// <script src="https://code.jquery.com/jquery.js">

// TEST ALERT
// alert("in the index.html javascript");

$(".submit").on("click", function (event) {
  event.preventDefault();

  // Here we grab the form elements
  var newClient = {
    clientname: $("#clientname").val().trim(),  // HTML FORM ID=clientname
    pwd: $("#pwd").val().trim(),                  // HTML FORM ID=pwd
    loginemail: $("#loginemail").val().trim()   // HTML FORM ID=loginemail


  };

  console.log(newClient); // Console the nexClient object to see the data


  $.post("/api/clients", newClient,
    function (data) {

      console.log("return data from node route: --> " + data.loginemail);
      alert("new client form submitted, thank you.");

      // Clear the form when submitting
      $("#clientname").val("");
      $("#pwd").val("");
      $("#loginemail").val("");
    });

});