const url = "https://www.thesportsdb.com/api/v1/json/2/eventslast.php?id=134862";

var xhttp = new XMLHttpRequest();
xhttp.open('GET', url);
xhttp.setRequestHeader('Accept', 'application/json');
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.response);
	  
      
      const game = data.results[0];

	  
        document.getElementById("game_date").innerHTML = game.dateEvent;

        document.getElementById("away_team").innerHTML = game.strAwayTeam;

        document.getElementById("home_team").innerHTML = game.strHomeTeam;
        document.getElementById("away_score").innerHTML = game.intAwayScore;
        document.getElementById("home_score").innerHTML = game.intHomeScore;
	  
        document.getElementById("game_table").style.display = 'block';
    }
}
xhttp.send();
