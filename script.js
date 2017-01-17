var nbrCases = prompt("Combien de cases voulez vous ? ");

if (nbrCases < 600 && nbrCases == parseInt(nbrCases)) {
for (var i = 1; i <= nbrCases; i++) {
	if (i%2) {
		document.getElementById('liste').innerHTML += "<li id='zizi'>"+i+"</li>";
	}
	else{ 
	document.getElementById('liste').innerHTML += "<li>"+i+"</li>";
}
		}
}


