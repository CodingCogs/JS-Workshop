$(document).ready(function() {

    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'https://www.thesportsdb.com/api/v1/json/2/eventslast.php',
        data: {
            id: 134862
        },

        success: function(data) {

            const game = data.results[0];
            $("#game_date").html(game.dateEvent);

            const homeScore = parseInt(game.intHomeScore);
            const awayScore = parseInt(game.intAwayScore);

            const homeWinner = homeScore > awayScore;
            const tie = homeScore == awayScore;

            $("#home_score").html(homeScore).addClass((homeWinner || tie) ? "winning_score" : "")
            $("#away_score").html(awayScore).addClass((!homeWinner || tie) ? "winning_score" : "");

			getTeamImage(game.idHomeTeam, "#home_img")
			getTeamImage(game.idAwayTeam, "#away_img")

            $("#game_table").show();
        }
    });

});

function getTeamImage(teamId, imageId) {
	
	$.getJSON('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php', {
        l: "NBA"
    }, function(data) {
		let teamData = data.teams.find(team => team.idTeam == teamId);
        $(imageId).attr("src", teamData.strTeamBanner);
	});
}
