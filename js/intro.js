//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

    $("#box").hide();


    $("#button").click(function(){
        $("#box").toggle();

    });


    $("#name").click(function(){
        $("#box").css("background-color",
        "rgb(61, 46, 177)");

    });


    $("#box").click(function(){
        $(".square").addClass("animate-box");
    
        setTimeout(function(){
            $(".square").removeClass("animate-box");
        },5000);

    });

    $("#reset").click(function(){
        $("#box").hide();
        $("#box").css("background-color",
        "rgb(177, 46, 72)");
        $(".square").removeClass("animate-box");

    });

});