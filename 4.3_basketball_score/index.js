const avrage = function (arr) {
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum/arr.length;
}

const teamJohn = [89, 120, 103];
const teamMike = [116, 94, 132];

teamJohnAvg = avrage(teamJohn);
teamMikeAvg = avrage(teamMike);

if (teamJohnAvg > teamMikeAvg) {
  console.log(`Team John wins Total Points: 
        Team John: ${teamJohnAvg}
        Team Mike: ${teamMikeAvg}`);
} else if (teamJohnAvg < teamMikeAvg) {
  console.log(`Team Mike wins Total Points: 
        Team John: ${teamJohnAvg}
        Team Mike: ${teamMikeAvg}`);
} else {
  console.log(`DRAW! Total Points: 
        Team John: ${teamJohnAvg}
        Team Mike: ${teamMikeAvg}`);
}