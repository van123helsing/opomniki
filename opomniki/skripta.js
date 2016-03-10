window.addEventListener('load', function() {
	//stran nalozena
		
	//izvedi prijavo
	var izvediPrijavo = function(event){
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik; //# ker je id
		document.querySelector(".pokrivalo").style.visibility = "hidden"; // . ker je class
	}
	var izvediDodaj = function(event){
		var naziv_opomnika = document.querySelector("#naziv_opomnika").value;
		var cas_opomnika = document.querySelector("#cas_opomnika").value;
		document.querySelector("#naziv_opomnika").innerHTML = naziv_opomnika; //# ker je id
		document.querySelector("#cas_opomnika").innerHTML = cas_opomnika;
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		document.querySelector("#opomniki").innerHTML += " \
		<div class='opomnik> <div class='naziv_opomnika'>" + naziv_opomnika + "</div> <div class='cas_opomnika'>Opmonik čez <span>" + cas_opomnika + "</span>sekund.</div></div>";
	}
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	document.querySelector("#dodajGumb").addEventListener('click', izvediDodaj);
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});