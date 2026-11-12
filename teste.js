
let nota1 = 7;
let nota2 = 6;

let media = (nota1 + nota2) / 2;

function checkPassOrFail(marks) {
    if (marks >= 7) {
        return "Pass";
    } else if (marks <= 4) {
        return "Recovery";
    } else {
        return "Fail";
    }
}

console.log("Média:", media);
console.log(`Resultado: ${checkPassOrFail(media)}`);
