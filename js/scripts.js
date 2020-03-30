$(document).ready(function() {
  
  $("#formOne").submit(function(event) {
    var items = ["#item1", "#item2", "#item3", "#item4", "#item5", "#item6"];
    var  costcosize = items.map(function(item) {
      var input = $(item).val();
      // console.log(item); ====> "#item1"
      // $("#item1").val();

     
      
      return input.toUpperCase();  
      
      

    });

    costcosize.forEach(function(item) {
      $("#list").show().append("<li>" + item + "</li>");
    });

// alert(costcosize);
      
      // $("#list").show().append("<li>" + item + "</li>");
      
      event.preventDefault();



    });
  });