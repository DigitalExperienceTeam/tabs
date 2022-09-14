$( document ).ready(function() {
    $(".tab-button" ).click(function() {
        var tab = $(this).attr("id");
        tab = "#" + tab + "-tab";
        $(tab).show();
        $( ".tabcontent" ).not(tab).hide();
        $(this).addClass("current-tab");
        $(".tab-button" ).not(this).removeClass("current-tab");

      });
});