let countElement = document.getElementById("count-ele");
let spanElement = document.getElementById("span-ele");
let count = 0;


function increment(){
  count += 1;
  countElement.textContent = count;
}
function reset(){
  count = 0;
  countElement.textContent = count;
  spanElement.textContent = "";
}

function save(){
  let str = count + " - ";
  spanElement.textContent += str;
}
