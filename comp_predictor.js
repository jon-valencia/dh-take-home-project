// Use jquery getJSON method to parse the JSON file
$.getJSON("input.json", function(json) {
    console.log(json);
    let intelComp = [];
    const totalScoreTeam = [];
    const totalScoreApp = [];
    let weightedScoreApp;
    let score = [];

    for (let i = 0; i < json['team'].length; i++) {
        score[i] = 0;
        totalScoreTeam.push(json['team'][i]['attributes']['intelligence']+
            json['team'][i]['attributes']['strength']+json['team'][i]['attributes']['endurance']+
            json['team'][i]['attributes']['spicyFoodTolerance']);
        for (let j = 0; j < json['applicants'].length; j++) {
            totalScoreApp.push(json['applicants'][j]['attributes']['intelligence']+
            json['applicants'][j]['attributes']['strength']+json['applicants'][j]['attributes']['endurance']+
            json['applicants'][j]['attributes']['spicyFoodTolerance']);
            for (let k = 0; k < 3; k++) {
                score[k] += totalScoreApp[j]/totalScoreTeam[i];
            }
        }
    }
    
    console.log(score);
    console.log((totalScoreApp[0]/totalScoreTeam[0]+totalScoreApp[0]/totalScoreTeam[1]+totalScoreApp[0]/totalScoreTeam[2]));
    console.log((totalScoreApp[1]/totalScoreTeam[0]+totalScoreApp[1]/totalScoreTeam[1]+totalScoreApp[1]/totalScoreTeam[2]));
    console.log((totalScoreApp[2]/totalScoreTeam[0]+totalScoreApp[2]/totalScoreTeam[1]+totalScoreApp[2]/totalScoreTeam[2]));
    console.log(totalScoreTeam);
    console.log(totalScoreApp);
    //console.log(weightedScoreApp);
});