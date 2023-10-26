$( document ).ready(function() 
{
    $( "a" ).click(function( event ) 
    {
      alert( "The link will take you to jquery.com" );
    });
});



$(document).ready(function()
{
  $("#bt1").click(function()
  {
    $("#para1").hide();
  });
});




$(document).ready(function(){
  $("#btn2").click(function(){
    $("#test1").hide();
  });
});






  $(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  });
 



    $(document).ready(function(){
      $("#btn3").click(function(){
        $("#test2").hide();
      });
    });




$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});






$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

