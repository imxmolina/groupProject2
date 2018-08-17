
  


  $.get("/api/all/", function(data) {
    console.log(data);
    // for each character that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // create a parent div for the oncoming elements
      var allProducts = $("<div>");
      // add a class to this div: 'well'
      allProducts.addClass("all");
      // add an id to the well to mark which well it is
      allProducts.attr("id", "all-products" + i);
      // append the well to the well section
      $("#all-products").append(allProducts);



      //Appending products to page in their proper order.
    
      $("#all-products" + i).append("<h2>Product: " + data[i].product + "</h2>");

      $("#all-products" + i).append("<h3>Product Type: " + data[i].producttype + "</h4>");

      $("#all-products" + i).append("<h3>Distributor: " + data[i].distributor + "</h4>");

      $("#all-products" + i).append("<h3>Bottle Size: " + data[i].bottlesize + "</h4>");

      $("#all-products" + i).append("<h3>Par: " + data[i].fullstock + "</h4>");

   




    }
  });
