var currScene, option, bagStatus = 0, bagItem;
var bagContent = ["no items"];
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
        if(bagStatus == 1){
            bag(-1);
        }else{
            window["scene"][currScene](-1);
        }
    }else if(k.keyCode == "39"){
    // right arrow
        if(bagStatus == 1){
            bag(1);
        }else{
            window["scene"][currScene](1);
        }
    }else if(k.keyCode == "40"){
    // down arrow
        if(bagStatus == 0){
            bagStatus = 1;
            document.getElementById("bagStatus").innerHTML = "Bag: ";
            document.getElementById("bag").innerHTML = bagContent[0];
        }else if(bagStatus == 1){
            bagStatus = 0;
            document.getElementById("bagStatus").innerHTML = "";
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