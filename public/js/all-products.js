



$.get("/api/all/", function (data) {
  console.log(data);
  // for each character that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var allProducts = $("<div>");
    // add a class to this div: 'well'
    allProducts.addClass("all");

    allProducts.addClass("row");

    // add an id to the well to mark which well it is
    allProducts.attr("id", "all-products" + i);
    // append the well to the well section
    $("#all-products").append(allProducts);



    //Appending products to page in their proper order.

    $("#all-products" + i).append("<h3><u><br>Product: <br> <p></p>" + data[i].product + "</br></u></h3>");

    $("#all-products" + i).append("<h3><u><br>Product Type: <br>   <p></p> " + data[i].producttype + "</br</u></h3>");

    $("#all-products" + i).append("<h3><u><br>Distributor: <br>   <p></p> " + data[i].distributor + "</br></u></h3>");

    $("#all-products" + i).append("<h3><u><br>Bottle Size: <br>  <p></p> " + data[i].bottlesize + "</br></u></h3>");

    $("#all-products" + i).append("<h3><u><br>Par: <br>   <p></p>" + data[i].fullstock + "</br></u></h3>");

    $("#all-products" + i).append("<input id=\"input" + data[i].id + "\" productid =\"" + data[i].id + "\" class=\"updater\" placeholder =\"" + data[i].currentstock + "\"type=\"text\"></input>");

    $("#all-products" + i).append("<button> Delete </button>")








  }

});


$(".orderSubmit").on("click", function (event) {
  event.preventDefault();
  // select all of class "all"
  var json = {};
  var products = $(".all");
  for (var i = 0; i < products.length; i++){

    json["" + $("#input"+i).attr("productid")] = $("#input"+i).val(); 
  }
  console.log(json);
  //console.log(products);
  //for however many we get
  var newOrder = {
    product_name: $("#product").val().trim(),
    id: $("#id").val().trim(),

  };

  $.post("/api/all", newOrder,
    function (data) {

      console.log("return data from node route: --> " + data.product);
      alert("new order created, thank you.");

      $("#product").val("");
      $("#id").val("");

    });

})





