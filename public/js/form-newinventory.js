// MAKE SURE TO ADD THIS SCRIPT TAG TO THE HTML HEADER
// <script src="https://code.jquery.com/jquery.js">

// TEST ALERT
// alert("in the index.html javascript");

$(".submit").on("click", function (event) {
    event.preventDefault();

    // Here we grab the form elements
    var newInventory = {
        product: $("#product").val().trim(),  // HTML FORM ID=product
        product_type: $("#producttype").val().trim(),                  // HTML FORM ID=producttype
        distributor: $("#distributor").val().trim(),   // HTML FORM ID=distributor
        casequantity: $("#casequantity").val().trim(),                  // HTML FORM ID=casequantity
        bottlesize: $("#bottlesize").val().trim(),                  // HTML FORM ID=bottlesize
        pars: $("#fullstock").val().trim(),                  // HTML FORM ID=fullstock
        current_stock: $("#currentstock").val().trim(),                  // HTML FORM ID=currentstock

    };

    console.log(newInventory); // Console the nexClient object to see the data

    // This line is the magic. It"s very similar to the standard ajax function we used.
    // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // depending on if a tables is available or not.

    // POSTING the newClient object to node.js route /api/newClient
    $.post("/api/all", newInventory,
        function (data) {

            console.log("return data from node route: --> " + data.loginemail);
            alert("new client form submitted, thank you.");

            // Clear the form when submitting
            $("#product").val("");
            $("#producttype").val("");
            $("#distributor").val("");
            $("#casequantity").val("");
            $("#bottlequantity").val("");
            $("#bottlesize").val("");
            $("#fullstock").val("");
            $("#currentstock").val("");
            $("#clientid").val("");
        });

});