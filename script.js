var currScene, option, bagStatus, bagItem = 0;
var bagContent = ["stone", "item1", "item2", "item3"];
var dungeonOptions = ["a pile of ruins.", "a dirty sheet.", "the door.", "Azruk."];
var dungeon2Options = ["a skeleton.", "the tunnel.", "a spoon.", "a key."];

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
                document.getElementById("location").innerHTML = "Dungeon";
                break;
            case 10:
            // interact
                if(option == 1){
                    if(dungeonOptions[1] == "a dirty sheet."){
                    // take sheet from tunnel entrance
                        dungeonOptions[1] = "a tunnel.";
                    }else if(dungeonOptions[1] == "a tunnel."){
                    // move to dungeon2
                        option = 0;
                        currScene = "dungeon2";
                        document.getElementById("location").innerHTML = "Dungeon 2";
                        return document.getElementById("view").innerHTML = dungeon2Options[option];
                    }
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
    },

    dungeon2 : function(d){
        
        switch(d){
            case 0:
            // init
                option = 0;
                currScene = "dungeon2";
                document.getElementById("location").innerHTML = "Dungeon 2";
                break;
            case 10:
            // interact
                if(option == 1){
                    if(dungeon2Options[1] == "the tunnel."){
                    // move back to dungeon1
                        option = 0;
                        currScene = "dungeon";
                        document.getElementById("location").innerHTML = "Dungeon";
                        return document.getElementById("view").innerHTML = dungeonOptions[option];
                    }
                }
                break;
            default:
            // change option
                option += d;
                break;
        }
        
        // cycle
        if(option > (dungeon2Options.length - 1)){
            option -= dungeon2Options.length;
        }else if(option < 0){
            option = dungeon2Options.length - 1;
        }

        // print option
        return document.getElementById("view").innerHTML = dungeon2Options[option];
    },
};