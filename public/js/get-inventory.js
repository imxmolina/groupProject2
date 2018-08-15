$.get("/api/products", function (data) {
    console.log(data);

    $("#product").text(data.product);
    $("#producttype").text(data.producttype);
    $("#distributor").text(data.distributor);
    $("#casequantity").text(data.casequantity);
    $("#bottlequantity").text(data.bottlequantity);
    $("#bottlesize").text(data.bottlesize);
    $("#fullstock").text(data.fullstock);
    $("#currentstock").text(data.currentstock);
    $("#clientid").text(data.clientid);

});