var count = 0;
var upgradelist = {autoclicker: 0, factory: 0, multiclick: 0, }
var pricelist = {autoclicker:10, multiclick: 5, factory: 20, }


function updateCounter(){
        document.getElementById("counter").innerHTML = Math.round(count);  
}

function conta (){
    count = count + (upgradelist.multiclick+1);
    console.log(document.getElementById("gamble").value);
} 

function upgradeShow(){
   if(count >= pricelist.autoclicker){
       document.getElementById("autoclick").style.visibility = 'visible';
   } 
    else{document.getElementById("autoclick").style.visibility = 'hidden';}
   
    if (count >= pricelist.factory){
        document.getElementById("factory").style.visibility = 'visible';
    }
    else {document.getElementById("factory").style.visibility = 'hidden';}
    
    if (count >= pricelist.multiclick){
        document.getElementById("multiclick").style.visibility = 'visible';
    }
    else {
        document.getElementById("multiclick").style.visibility = 'hidden';
    }
}

function autoClick() {
    count = count - pricelist.autoclicker;
    pricelist.autoclicker = pricelist.autoclicker * (1.1*(upgradelist.autoclicker));
    upgradelist.autoclicker++;
    document.getElementById("nAutoClicker").innerHTML = "Autoclicker:" + upgradelist.autoclicker;
    document.getElementById("autoclick").innerHTML = "Autoclicker:" + Math.round(pricelist.autoclicker);
} 

function factoryUp(){
    count = count - pricelist.factory; 
    pricelist.factory = pricelist.factory * (1.1*(upgradelist.factory+1));
    upgradelist.factory++;
    document.getElementById("nFactory").innerHTML = "Factory:" + upgradelist.factory;
    document.getElementById("factory").innerHTML = "Factory:" + Math.round(pricelist.factory); 
}

function multiClick(){
    count = count - pricelist.multiclick;
    pricelist.multiclick = pricelist.multiclick * (1.1*(upgradelist.multiclick+1));
    upgradelist.multiclick++;
    document.getElementById("nMulticlick").innerHTML = "Multiclick:" + upgradelist.multiclick;
    document.getElementById("multiclick").innerHTML = "Multiclick:" + Math.round(pricelist.multiclick);
}

function upgrade() {
    count = count + (upgradelist.autoclicker*0.1);
    count = count + (upgradelist.factory*5);
}    

function gamble(){
    if(count >= document.getElementById("gamble").value){
    count = count - document.getElementById("gamble").value;
    if(Math.floor((Math.random()*10)+1) % 2 === 0){
        count = count + (document.getElementById("gamble").value * 2);
        console.log("win");
    }
    else console.log("lose");
    }
    else console.log("no money")
}


setInterval(upgradeShow, 1);
setInterval(updateCounter, 1);
setInterval(upgrade, 1000);


