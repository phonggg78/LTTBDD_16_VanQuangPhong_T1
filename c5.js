const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
avrDolphinScore1 = calcAverage(44, 23, 71);
avrKoalasScore1 = calcAverage(65, 54, 49);
const checkWinner = (team1, team2) => {
    if (team1 >= 2 * team2)
        console.log("DolphinTeam is winner!");
    else if (team2 >= 2 * team1)
        console.log("KoalasTeam is winner!");
    else
        console.log("No winning team!")
}
console.log("Data1")
checkWinner(avrDolphinScore1, avrKoalasScore1)
avrDolphinScore2 = calcAverage(85, 54, 49);
avrKoalasScore2 = calcAverage(23, 34, 27);
console.log("Data2")
checkWinner(avrDolphinScore2, avrKoalasScore2)