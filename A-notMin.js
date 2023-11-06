const fs = require('fs');
let fileContent = fs.readFileSync('A-input.txt', 'utf8');

let lines = fileContent.trim().split('\n');
let n = +lines[0].trim().split(' ')[0];
let m = +lines[0].trim().split(' ')[1];
let array = lines[1].trim().split(' ').map((elem) => +elem);

let requests = [];
for(let i = 2; i < lines.length; i++) {
    requests.push(lines[i].trim().split(' ').map((elem) => +elem));
}

// console.log(requests);

// function notMin(n, m, array, requests) {
    let result = [];
    for(let i = 0; i < m; i++){
        let l = requests[i][0];
        let r = requests[i][1];
        let section = array.slice(l, r + 1);
 
        let sum = section.reduce((sum, el) => sum + el, 0);
        let flag;
        let min = Math.min(...section);
        // console.log(min);

        (sum / section.length === section[0]) ? flag = true : flag = false;
        
        if (flag) {
            result.push('NOT FOUND');
        } else {
            result.push(Math.max(...section));
        }
    }
    // console.log(result.join('\n'));
    // return result;
// }

// let result = notMin(n, m, array, requests);
// console.log(result.join('\n'));


fs.writeFileSync("A-output.txt", result.join('\n'));