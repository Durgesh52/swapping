

var a = prompt('Enter the first number: ');
var b = prompt('Enter the second number: ');
function setup(){
  var button = createButton("Swap");
button.mousePressed(Swap);
  }


function draw()
{
}

function swap()
{
  [a,b]=[b,a];
  console.log("value of a after swapping",+a);
  console.log("value of b after swapping",+b);
}