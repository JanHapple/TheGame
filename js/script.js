var option;

function dungeon(d){
    var options = ["a pile of ruins.", "a dirty sheet.", "the door.", "azruk."];
    
    if(d == 0){
        option = 0;
    }else{
        option += d;
    }

    if(option > (options.length - 1)){
        option -= options.length;
    }else if(option < 0){
        option = options.length - 1;
    }

    return document.getElementById("view").innerHTML = options[option];
}
