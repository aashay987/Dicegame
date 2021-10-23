var name1;
var name2;
document.querySelector(".int").addEventListener("click", intro);
document.querySelector(".int").addEventListener("keyup", intro);
function intro(){
  name1 = document.getElementById("pl1").value;
  name2 = document.getElementById("pl2").value;
  document.querySelector(".det").style.display = "none";
  document.querySelector(".lan").style.display = "block";
  document.querySelectorAll("h3")[0].innerHTML = name1;
  document.querySelectorAll("h3")[1].innerHTML = name2;
}

var b1 = document.querySelector(".reset");
b1.addEventListener("click",reset);
b1.addEventListener("keyup",reset);

var b = document.querySelector(".sub");
b.addEventListener("click",handleclick);
b.addEventListener("keyup",handleclick);
//var name1 = window.prompt("Enter your Player 1 name: ");
// var name2 = window.prompt("Enter your Player 2 name: ");

function reset()
{
  document.querySelector(".det").style.display = "block";
  document.querySelector(".lan").style.display = "none";
  document.querySelector(".play1").setAttribute("src","images/dice1.png");
  document.querySelector(".play2").setAttribute("src","images/dice1.png");
    document.querySelector("h1").innerHTML = "Welcome Back";
}

function handleclick()
{
  // document.querySelectorAll("h3")[0].innerHTML = name1;
  // document.querySelectorAll("h3")[1].innerHTML = name2;
  var num1 = Math.floor((Math.random() * 6) + 1);
  var num2 = Math.floor((Math.random() * 6) + 1);
  document.querySelector(".play1").setAttribute("src","images/dice"+num1+".png");
  document.querySelector(".play2").setAttribute("src","images/dice"+num2+".png");
  if(num1 > num2)
  {
    document.querySelector("h1").innerHTML = name1 + " Wins"
  }

  else if(num2 > num1)
  {
    document.querySelector("h1").innerHTML = name2 + " Wins"
  }
  else
  {
    document.querySelector("h1").innerHTML = "Draw"
  }
}
