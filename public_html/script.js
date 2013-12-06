var items = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
var tellers = {"0":5, "1":5, "2":5, "3":5, "4":5, "5":5, "6":5};
var kleur = "Rood";
var scoreRoodValue = 0;
var scoreGeelValue = 0;


window.onload = function() {
   scoreRoodValue =0;
   scoreGeelValue=0;
   document.getElementById("scoreRood").innerHTML="Rood: " + scoreRoodValue;
   document.getElementById("scoreGeel").innerHTML="Geel: " + scoreGeelValue;
} 

function score(){
   document.getElementById("scoreRood").innerHTML="Rood: " + scoreRoodValue;
   document.getElementById("scoreGeel").innerHTML="Geel: " + scoreGeelValue;
}

function leegBord(){
    var tellerKolom = 0;
    
    while(tellerKolom<=5){
        var tellerRij = 0;
        while(tellerRij<=6){
            document.getElementById("rij"+ tellerKolom +""+tellerRij).style.backgroundImage = "url('images/fillempty.png')";
            tellerRij++;
        }
        tellerKolom++;
        
    }
    items = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
    tellers = {"0":5, "1":5, "2":5, "3":5, "4":5, "5":5, "6":5};
    
}

function rijKlik(kolom){
    playSound();
    if(kleur === "Rood"){
    if((tellers[kolom]) >= 0){
        if(items[(tellers[kolom])][kolom] === 0){
            document.getElementById("rij"+ (tellers[kolom]) + kolom).style.backgroundImage = "url('images/fullrood.png')";
            items[(tellers[kolom])][kolom] = 2;
            (tellers[kolom])--;
            kleurVerandering("Geel");     
            verticaal();
            horizontaal();
            diagonaal1();
            diagonaal2();
        }
    }
}else{
        if((tellers[kolom]) >= 0){
        if(items[(tellers[kolom])][kolom] === 0){
            document.getElementById("rij"+ (tellers[kolom]) + kolom).style.backgroundImage = "url('images/fullgeel.png')";
            items[(tellers[kolom])][kolom] = 1;
            (tellers[kolom])--;
            kleurVerandering("Rood");
            verticaal();
            horizontaal();
            diagonaal1();
            diagonaal2();
        }
    }
}

}

function kleurVerandering(kleur1){
    document.getElementById("table1").className = "leegbord" + kleur1;
    kleur = kleur1;
}

function verticaal(){
   gewonnenKleur ="";
           
   for(var i=5; i>=0;i--){
       gewonnenKleur += "\n";
       for(var e=0; e<=6; e++){
           if(gewonnenKleur.indexOf("RRRR") !== -1 || gewonnenKleur.indexOf("GGGG") !== -1){
            var winnendekleur;
            
            if(gewonnenKleur.indexOf("RRRR") !== -1){
                winnendekleur = "Rood";
                scoreRoodValue++;
            }
            else{
                winnendekleur = "Geel";
                scoreGeelValue++;
            }
            playWinSound();
            setTimeout(func, 400);
            function func() {
                alert(winnendekleur + " is gewonnen!");
                leegBord();
            }
            score();
            return false;
        }
        else
        {
           if(items[i][e] === 2){
               gewonnenKleur +="R";
           }
           else{
               if(items[i][e] === 1){
                   gewonnenKleur +="G";
               }
               else{
                   gewonnenKleur +="L";
               }
           }
       }
   }
}
}

function horizontaal(){
   gewonnenKleur ="";
           
   for(var i=0; i<=5;i++){
       gewonnenKleur += "\n";
       for(var e=5; e>=0; e--){
           if(gewonnenKleur.indexOf("RRRR") !== -1 || gewonnenKleur.indexOf("GGGG") !== -1){
            var winnendekleur;
            
            if(gewonnenKleur.indexOf("RRRR") !== -1){
                winnendekleur = "Rood";
                scoreRoodValue++;
            }
            else{
                winnendekleur = "Geel";
                scoreGeelValue++;
            }
            
            playWinSound();
            setTimeout(func, 400);
            function func() {
                alert(winnendekleur + " is gewonnen!");
                leegBord();
            }
            score();
            
            return false;
        }
        else
        {
           if(items[e][i] === 2){
               gewonnenKleur +="R";
           }
           else{
               if(items[e][i] === 1){
                   gewonnenKleur +="G";
               }
               else{
                   gewonnenKleur +="L";
               }
           }
       }
   }
}
}

function diagonaal1(){
    for(var i=5;i>=3;i--){
        for(var e=0;e<=3;e++){
            if(items[i][e] === 2){
                if(items[i-1][e+1] === 2){
                    if(items[i-2][e+2] === 2){
                        if(items[i-3][e+3] === 2){
                            scoreRoodValue++;
                            playWinSound();
                            setTimeout(func, 400);
                            function func() {
                                alert("Rood is gewonnen!");
                                leegBord();
                            }
                            score();
                        }
                    }
                     
                }
            }
            if(items[i][e] === 1){
                if(items[i-1][e+1] === 1){
                    if(items[i-2][e+2] === 1){
                        if(items[i-3][e+3] === 1){
                            scoreGeelValue++;
                            playWinSound();
                            setTimeout(func, 400);
                            function func() {
                                alert("Geel is gewonnen!");
                                leegBord();
                            }
                            score();
                        }
                    }
                     
                }
            }
        }
    }
}

function diagonaal2(){
    for(var i=5;i>=3;i--){
        for(var e=4;e<=6;e++){
            if(items[i][e] === 2){
                if(items[i-1][e-1] === 2){
                    if(items[i-2][e-2] === 2){
                        if(items[i-3][e-3] === 2){
                            scoreRoodValue++;
                            playWinSound();
                            setTimeout(func, 400);
                            function func() {
                                alert("Rood is gewonnen!");
                                leegBord();
                            }
                            score();
                        }
                    }
                     
                }
            }
            if(items[i][e] === 1){
                if(items[i-1][e-1] === 1){
                    if(items[i-2][e-2] === 1){
                        if(items[i-3][e-3] === 1){
                            scoreGeelValue++;
                            playWinSound();
                            setTimeout(func, 400);
                            function func() {
                                alert("Geel is gewonnen!");
                                leegBord();
                            }
                            score();
                        }
                    }
                     
                }
            }
        }
    }
}

function playSound() {

var Sound = new Audio('images/coinsound.mp3');
Sound.play();
    
}

function playWinSound() {

var Sound = new Audio('images/winningsound.wav');
Sound.play();
    
}
