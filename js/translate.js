var API_KEY = "trnsl.1.1.20180130T014109Z.fed18b90a0a5a7ff.e27362700bc274188db353206f3ddf501b87f1b7";
$(document).ready(function(){
    $("#translate").click(function(event){
        var source_text = $("#source_lang").val().replace(/\s/g,"+");
        var target_text = $("#target_lang");
        var query = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" +
        API_KEY + "&lang=en-es&text=" + source_text + "&callback=?"; 
        var source; 
        var jqxhr = $.getJSON(query, function(response){
            source = {translation: response.text}; 
        }).done(function() {
            target_text.text(source.translation);
        });
        
        if(!jqxhr){
            target_text.text("Sorry, try again :(");
        }
        event.preventDefault(); 
    });
    
});