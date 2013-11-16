var items = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
var tellers = {"0":5, "1":5, "2":5, "3":5, "4":5, "5":5, "6":5};
var kleur = "Rood";
        
function rijKlik(kolom){
    
    if(kleur === "Rood"){
    if((tellers[kolom]) >= 0){
        if(items[(tellers[kolom])][kolom] === 0){
            items[(tellers[kolom])][kolom] = 2;
            document.getElementById("rij"+ (tellers[kolom]) + kolom).style.backgroundImage = "url('images/fullrood.png')";
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
            items[(tellers[kolom])][kolom] = 1;
            document.getElementById("rij"+ (tellers[kolom]) + kolom).style.backgroundImage = "url('images/fullgeel.png')";
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
            }
            else{
                winnendekleur = "Geel";
            }
            alert(winnendekleur + " is gewonnen!");
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
            }
            else{
                winnendekleur = "Geel";
            }
            alert(winnendekleur + " is gewonnen!");
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
                            alert("Rood is gewonnen!");
                        }
                    }
                     
                }
            }
            if(items[i][e] === 1){
                if(items[i-1][e+1] === 1){
                    if(items[i-2][e+2] === 1){
                        if(items[i-3][e+3] === 1){
                            alert("Geel is gewonnen!");
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
                            alert("Rood is gewonnen!");
                        }
                    }
                     
                }
            }
            if(items[i][e] === 1){
                if(items[i-1][e-1] === 1){
                    if(items[i-2][e-2] === 1){
                        if(items[i-3][e-3] === 1){
                            alert("Geel is gewonnen!");
                        }
                    }
                     
                }
            }
        }
    }
}
