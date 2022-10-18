// Use jquery getJSON method to parse the JSON file
$.getJSON("input.json", function(json) {
    //console.log(json);
    const totalScoreTeam = [];
    const totalScoreApp = [];
    let weightedScore = [];
    let scoredApplicants = [];

    for (let i = 0; i < json['applicants'].length; i++) {
        weightedScore[i] = 0;
        //add up each applicants' attribute scores together to get a total score for each applicant
        totalScoreApp.push(json['applicants'][i]['attributes']['intelligence']+
            json['applicants'][i]['attributes']['strength']+json['applicants'][i]['attributes']['endurance']+
            json['applicants'][i]['attributes']['spicyFoodTolerance']);
        for (let j = 0; j < json['team'].length; j++) {
            //add up each team member's score together to get a total score for each team member
            totalScoreTeam.push((json['team'][j]['attributes']['intelligence']+
            json['team'][j]['attributes']['strength']+json['team'][j]['attributes']['endurance']+
            json['team'][j]['attributes']['spicyFoodTolerance']));
            //Add the quotient of each applicants' total score, each team members' total score,
            //and the total amount of team members
            weightedScore[i] += ((totalScoreApp[i]/totalScoreTeam[j])/json['team'].length);
        }
    }
    for (let i = 0; i < weightedScore.length; i++) {
        //if the applicant weighted score is greater than 1, then it is a perfect match and made equal to 1
        if (weightedScore[i] > 1) weightedScore[i] = 1;
        //create an array of applicants and their scores
        scoredApplicants[i] = { "name" : `${json['applicants'][i]['name']}`, "score" : weightedScore[i] };
    }
    //convert scoredApplicants array to JSON string and output it in the console
    let output = JSON.stringify(scoredApplicants);
    console.log(output);
});