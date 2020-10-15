function popupwin(url){
    newwin=window.open("popupwin.html",url,'width=200px,height=200px,top=200,left=200');

    if(newwin){
    window.onfocus=function(){newwin.window.close()}
    }
}
function popuploose(url){
    newwin=window.open("popuploose.html",url,'width=200,height=200,top=200,left=200');

    if(newwin){
    window.onfocus=function(){newwin.window.close()}
    }
}
let x  
function generator() {

     x= Math.floor((Math.random()*13)+1);  
    return x ;  
}


function affichage_img() {
    document.getElementById('divImage').innerHTML=`
    <img src="img/IMG${x}.jpg">
    `;
}

function verif_rep() {
    var y= " ";
    if(x==1){
        y= "one punch man"
    }
    if(x==2){
        y="hunter x hunter"
    }
    if(x==3){
        y="assassination classroom"
    }
    if(x==4){
        y="kuroko no basket"
    }
    if(x==5){
        y="one piece"
    }
    if(x==6){
        y="naruto"
    }
    if(x==7){
        y="ac dc"
    }
    if(x==8){
        y="red hot chilli pepper"
    }
    if(x==9){
        y="league of legends"
    }
    if(x==10){
        y="cs go"
    }
    if(x==11){
        y="overwatch"
    }
    if(x==12){
        y="bts"
    }
    if(x==13){
        y="blackpink"
    }

    var str = document.getElementById("keyword").value;
    document.getElementById("keyword").value="";

    if(y==str){
        popupwin();
    
    }else if(y!==str){
        popuploose();
    }
    generator();
    affichage_img();
}
generator();
affichage_img();

document.getElementById("keyword").addEventListener("keydown",(Event)=>{
    if(Event.code=="Enter"){
        verif_rep();
    }
})

