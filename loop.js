//?vize final geçme ortalama örneği

let again ="";
do{
let avg = 0

const midterm = Number(prompt("your midterm grade"))
const final = Number(prompt("your final grade"))
avg = midterm * 0.4+final *0.6
console.log(`Your score is ${avg}`);
const again = prompt("Do you want to continue(e/E)?")
} while ( again==="e" || again === "E")
console.log("see you later.Bye");