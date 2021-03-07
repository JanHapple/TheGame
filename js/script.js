var currScene, option, bagStatus, bagItem = 0;
var bagContent = ["item1", "item2", "item3"];
var dungeonOptions = ["a pile of ruins.", "a dirty sheet.", "the door.", "Azruk."];


// keyboard input
document.onkeydown = checkKey;
function checkKey(k) {
  
    k = k || window.event;

    if(k.keyCode == "38"){
    // up arrow - interact
        window["scene"][currScene](10);
    }else if(k.keyCode == "37"){
    // left arrow
        if(bagStatus == true){
            bag(-1);
        }else{
            window["scene"][currScene](-1);
        }
    }else if(k.keyCode == "39"){
    // right arrow
        if(bagStatus == true){
            bag(1);
        }else{
            window["scene"][currScene](1);
        }
    }else if(k.keyCode == "40"){
    // down arrow - bag control
        if(bagStatus == false || bagStatus == undefined){
            bagStatus = true;
            document.getElementById("bagLabel").innerHTML = "Bag: ";
            document.getElementById("bag").innerHTML = bagContent[0];
        }else if(bagStatus == true){
            bagStatus = false;
            document.getElementById("bagLabel").innerHTML = "";
            document.getElementById("bag").innerHTML = "";
        }
    }
}


// bag
function bag(c){
   
    bagItem += c;

    // cycle
    if(bagItem > (bagContent.length - 1)){
        bagItem -= bagContent.length;
    }else if(bagItem < 0){
        bagItem = bagContent.length - 1;
    }

    // print option
    return document.getElementById("bag").innerHTML = bagContent[bagItem];
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
                    dungeonOptions[1] = "a tunnel.";
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