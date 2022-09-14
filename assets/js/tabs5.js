$( document ).ready(function() {
    $(".tab-button" ).click(function() {
        var result = $(this).attr("id");

        if (result =="all") {
          $( ".search-result" ).show();
        }

        else {
        result = "." + result;
        $(result).show();
        $( ".search-result" ).not(result).hide();
      }

      $(this).addClass("current-tab");
      $(".tab-button" ).not(this).removeClass("current-tab");

      var number = $( ".search-result:visible" ).length;

      $(".results span").text(number);



      });
});