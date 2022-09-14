$( document ).ready(function() {

  $("#all").prop("checked", true);

    $(".check" ).click(function() {

        var result = $(this).attr("id");

        if (result =="all") {
          $( ".search-result" ).show();
          $(".check").not("#all").prop("checked", false);
        }

        else {
        $("#all").prop("checked", false);
        $( ".search-result" ).hide();

        $( ".check" ).each(function() {
          if ($(this).is(':checked')) {
            result = $(this).attr("id");
            result = "." + result;
            $(result).show();
          }
        });

       
        
      }

      var number = $( ".search-result:visible" ).length;

      $(".results span").text(number);



      });
});