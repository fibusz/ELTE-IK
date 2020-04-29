var jatekos ="fekete";

function beallitas () {
    var mezok = document.getElementsByClassName("negyzet");
    Array.prototype.forEach.call(mezok, function(mezo) {
		mezo.removeEventListener('click', lepes)
        mezo.removeEventListener('click', mozgas)
        mezo.removeEventListener("mouseover", hatter);
        mezo.removeEventListener("mouseleave", hatter);
		babu_elhelyezes(mezo)
    });
    kivel();
    kinyert();
    document.getElementById("kijon").innerHTML ='A ' + jatekos + ' játékos következik.';
}

function babu_elhelyezes(item) {
    if (item.hasAttribute("babu")) {
        if( item.getAttribute("babu") == "fehér"){
            item.innerHTML = "●";
            item.style.color = "white"
        }
         else if (item.getAttribute("babu") == "fekete") {
            item.innerHTML = "●";
            item.style.color = "black"
        }
        else{
            item.innerHTML="";
        }
    }
    else {
        item.style.cursor = "default";
        item.innerHTML="";
    }
}

function kivel (){
    var mezok = document.getElementsByClassName("negyzet");
    Array.prototype.forEach.call(mezok, function(mezo) {
        if ( mezo.getAttribute("babu") == jatekos) {
            mezo.style.cursor = "pointer";
            mezo.addEventListener("mouseover", hatter, false);
            mezo.addEventListener("mouseleave", hatter, false);
            mezo.addEventListener('click', lepes, false);
        }
    });
}

function lepes() { 
    mezo = this;
    mezo.removeEventListener("mouseover", hatter);
    mezo.removeEventListener("mouseleave", hatter);
    mezo.style.backgroundColor = "lightblue"
    var hova_lephetek = hovaLephetek(mezo);
    Array.prototype.forEach.call(hova_lephetek, function(hova_mezo) {
        hova_mezo.style.cursor = "pointer";
		hova_mezo.honnan = mezo;
        hova_mezo.addEventListener('click', mozgas, false);
        hova_mezo.addEventListener("mouseover", hatter, false);
        hova_mezo.addEventListener("mouseleave", hatter, false);
    });
}

function hatter(){
    if(event.type === "mouseover"){
        this.style.backgroundColor = "lightgreen";
      }else{
        this.style.backgroundColor = "rgb(250, 77, 47)";
      }
}

function hovaLephetek(mezo){
	var lista=[]
	var elore;
	if (mezo.getAttribute("babu") == "fekete"){
		elore = -1;
	}
	else {
		elore = 1;
	}
	var sor = document.querySelectorAll('[sor = "'+  (parseInt(mezo.getAttribute("sor"))+elore) + '"]');
	sor.forEach(function(seged){
		if (parseInt(seged.getAttribute("oszlop")) == parseInt(mezo.getAttribute("oszlop")) - 1
			|| parseInt(seged.getAttribute("oszlop")) == parseInt(mezo.getAttribute("oszlop")) + 1){
			 
			if (seged.hasAttribute("babu") == false || seged.getAttribute("babu") == ""){
				seged.utes = false;
				lista.push(seged)
			}
			else if (seged.getAttribute("babu") != mezo.getAttribute("babu"))
			{
				var kovetkezosor = document.querySelectorAll('[sor = "'+  (parseInt(seged.getAttribute("sor")) + elore) + '"]');
				console.log(kovetkezosor);
				var irany = parseInt(seged.getAttribute("oszlop")) - parseInt(mezo.getAttribute("oszlop"));
				kovetkezosor.forEach(function(seged2){
					if (parseInt(seged2.getAttribute("oszlop")) == parseInt(seged.getAttribute("oszlop")) + irany){
						if (seged2.hasAttribute("babu") == false || seged2.getAttribute("babu") == ""){
							seged2.utes = true;
							seged2.leut = seged;
							lista.push(seged2)
						}
					}
				});
			}
			}
	});
	return lista;
    }

function mozgas () {
	hova = this;
	honnan = this.honnan;
	var lepes = "Innen: sor: " + honnan.getAttribute("sor") + " oszlop: " + honnan.getAttribute("oszlop") +
	" Ide: sor: " + hova.getAttribute("sor") + " oszlop: " + hova.getAttribute("oszlop");
    console.log(lepes);
    hova.setAttribute("babu", honnan.getAttribute("babu"));
    honnan.removeAttribute("babu");
	if (hova.utes == true){
		hova.leut.removeAttribute("babu");
    }
    jatekos_csere();
    mezo.style.backgroundColor = "rgb(250, 77, 47)";
    hova.style.backgroundColor = "rgb(250, 77, 47)";
    beallitas();

}

function jatekos_csere(){
    if (jatekos == "fekete") {
        jatekos= "fehér";
    }
    else {
        jatekos="fekete";
    }
}

function reset(){
var mezok = document.getElementsByClassName('negyzet');
Array.prototype.forEach.call(mezok, function(mezo) {
    if(mezo.getAttribute("sor") == "8" && (mezo.getAttribute("oszlop") == "2" || mezo.getAttribute("oszlop") == "4" || mezo.getAttribute("oszlop") == "6" || mezo.getAttribute("oszlop") == "8"))
    {
        mezo.setAttribute("babu", "fekete");
    }   
    else if (mezo.getAttribute("sor") == "7" && (mezo.getAttribute("oszlop") == "1" || mezo.getAttribute("oszlop") == "3" || mezo.getAttribute("oszlop") == "5" || mezo.getAttribute("oszlop") == "7"))
    {
mezo.setAttribute("babu", "fekete");
    }
    else if (mezo.getAttribute("sor") == "6" && (mezo.getAttribute("oszlop") == "2" || mezo.getAttribute("oszlop") == "4" || mezo.getAttribute("oszlop") == "6" || mezo.getAttribute("oszlop") == "8"))
    {
mezo.setAttribute("babu", "fekete");
    }
    else if (mezo.getAttribute("sor") == "3" && (mezo.getAttribute("oszlop") == "1" || mezo.getAttribute("oszlop") == "3" || mezo.getAttribute("oszlop") == "5" || mezo.getAttribute("oszlop") == "7"))
    {
mezo.setAttribute("babu", "fehér");
    }
     else if (mezo.getAttribute("sor") == "2" && (mezo.getAttribute("oszlop") == "2" || mezo.getAttribute("oszlop") == "4" || mezo.getAttribute("oszlop") == "6" || mezo.getAttribute("oszlop") == "8"))
     {
mezo.setAttribute("babu", "fehér");
    }
     else if (mezo.getAttribute("sor") == "1" && (mezo.getAttribute("oszlop") == "1" || mezo.getAttribute("oszlop") == "3" || mezo.getAttribute("oszlop") == "5" || mezo.getAttribute("oszlop") == "7"))
     {
          mezo.setAttribute("babu", "fehér");
     }
    
    else {
        mezo.removeAttribute("babu");
    }
});
    ki_jon();
    beallitas();
}

function ki_jon(){
    var jatekosjon;
    if (Math.random()>0.5){
        jatekosjon=1;
        jatekos="fekete";
    } else {
        jatekosjon=0;
        jatekos="fehér";
    }
}

function kinyert(){
    var mezok = document.getElementsByClassName("negyzet");
    var feketek_szama=0;
    var feherek_szama=0;
    Array.prototype.forEach.call(mezok, function(mezo) {
        if (mezo.getAttribute("babu") == "fekete") {
            feketek_szama+=1
        }
        else if (mezo.getAttribute("babu") == "fehér"){
            feherek_szama+=1
        }      
    });
    if (feherek_szama > 0 && feketek_szama == 0) {
        document.getElementById("kinyer").innerHTML ='A  fehér játékos nyert!';
        jatek_vege();
    }
    else if (feketek_szama > 0 && feherek_szama == 0){
        document.getElementById("kinyer").innerHTML ='A fekete játékos nyert!';
        jatek_vege();
    }
    else{
        document.getElementById("kinyer").innerHTML ="";
    }
}

function jatek_vege(){
    var mezok = document.getElementsByClassName("negyzet");
    Array.prototype.forEach.call(mezok, function(mezo) {
		mezo.removeEventListener('click', lepes)
        mezo.removeEventListener('click', mozgas)
        mezo.removeEventListener("mouseover", hatter);
        mezo.removeEventListener("mouseleave", hatter);
        mezo.style.cursor = "default";
    });
}
