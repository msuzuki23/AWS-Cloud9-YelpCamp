// function echo(str, times){
//     for(var i=1; i <= times;i++){
//         console.log(str);
//     }
    
// }

// echo("echo!!!", 3);

function average(scores){
    var total = 0;
    scores.forEach(function(score){
        total += score;
    });
    return Math.round(total / scores.length);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));