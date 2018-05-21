$("img").click(function(){
    $.ajax({url: "demo_test.txt"
    , success: function(result){
        alert("Perfect!");
    },error: function(xhr){
        alert("An error occured: " + xhr.status + " " + xhr.statusText);
    }});
});