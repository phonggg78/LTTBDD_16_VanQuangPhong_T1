const dolphinScore = [96, 108, 89]
const dolphinScore2 = [97, 112, 101]
const dolphinScore3 = [97, 112, 101]
const koalasScore = [88, 91, 110]
const koalasScore2 = [109, 95, 123]
const koalasScore3 = [109, 95, 106]

function avrScore(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
//1
if (avrScore(dolphinScore) >= 0 && avrScore(dolphinScore) > avrScore(koalasScore))
    console.log("DolphinTeam is winner!");
else if (avrScore(koalasScore) >= 0 && avrScore(koalasScore) > avrScore(dolphinScore))
    console.log("KoalasTeam is winner!");
else if (avrScore(dolphinScore) == aavrScore(koalasScore) && avrScore(dolphinScore) >= 0)
    console.log("The two teams tied!")
else
    console.log("No winning team")
    //2
if (avrScore(dolphinScore2) >= 0 && avrScore(dolphinScore2) > avrScore(koalasScore2))
    console.log("DolphinTeam is winner!");
else if (avrScore(koalasScore2) >= 0 && avrScore(koalasScore2) > avrScore(dolphinScore2))
    console.log("KoalasTeam is winner!");
else if (avrScore(dolphinScore2) == aavrScore(koalasScore2) && avrScore(dolphinScore2) >= 0)
    console.log("The two teams tied!")
else
    console.log("No winning team")
    //3
if (avrScore(dolphinScore3) >= 0 && avrScore(dolphinScore3) > avrScore(koalasScore3))
    console.log("DolphinTeam is winner!");
else if (avrScore(koalasScore3) >= 0 && avrScore(koalasScore3) > avrScore(dolphinScore3))
    console.log("KoalasTeam is winner!");
else if (avrScore(dolphinScore3) == avrScore(koalasScore3) && avrScore(dolphinScore3) >= 0)
    console.log("The two teams tied!")
else
    console.log("No winning team")