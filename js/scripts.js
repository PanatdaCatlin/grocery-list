$(document).ready(function(){
  var resultList = []
  $("#groceryName").submit(function(event) {
    var grocery = $("input#grocery").val();
    var quantity = $("input#quantity").val();

    resultList.push(grocery);
    resultList.sort();
    var toUpper = resultList.map(function(item) {
      return item.toUpperCase();
    });
    console.log(resultList);
        event.preventDefault();
    $('.output').text(toUpper).show();



  });

});
