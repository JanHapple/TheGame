var currScene, option;
var dungeonOptions = ["a pile of ruins.", "a dirty sheet.", "the door.", "Azruk."];


// keyboard input
document.onkeydown = checkKey;
function checkKey(k) {
  
    k = k || window.event;

    if(k.keyCode == "38"){
        // up arrow
        window["scene"][currScene](10);
    }else if(k.keyCode == "37"){
        // left arrow
       window["scene"][currScene](-1);
    }else if(k.keyCode == "39"){
        // right arrow
       window["scene"][currScene](+1);
    }else if(k.keyCode == "66"){
        // B key
        alert("bag opened");
    }
}

// scenes
var scene = {
    
    dungeon : function(d){
        
        switch(d){
            case 0:
            // init
                option = 0;
                currScene = "dungeon";
                break;
            case 10:
            // interact
                if(option == 1){
                // take sheet from tunnel entrance
                    dungeonOptions[1] = "tunnel";
                }
                break;
            default:
            // change option
                option += d;
                break;
        }
        
        // cycle
        if(option > (dungeonOptions.length - 1)){
            option -= dungeonOptions.length;
        }else if(option < 0){
            option = dungeonOptions.length - 1;
        }

        // print option
        return document.getElementById("view").innerHTML = dungeonOptions[option];
    }
};