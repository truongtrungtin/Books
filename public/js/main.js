$(document).ready(function(){
    
    $("#username").keyup(function(){
        var user = $(this).val();
        $.post("./Ajax/checkUsername", {un:user}, function(data){
            $("#messageUn").html(data);
        });
    });

});