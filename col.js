var numSquares = 6;
var colors = [];
var pickedcolor;

var squares = document.querySelectorAll(".square");
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init()
{
	
  setUpModeButtons();
  setUpSquares();
  reset();

}

function setUpModeButtons()
{ 
	//mode buttons event listener
		for(var i=0;i<modeButtons.length;i++)
	{
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent==="Easy")
			 {
			 	numSquares = 3;
			 }
			 else
			 {
			 	numSquares = 6;
			 }
	        reset();

	   });
	}
}

function setUpSquares()
{
	for(var i =0; i<squares.length; i++)
{

	
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
	//grab color of clicked square
	var clickedColor = this.style.background;
	//console.log(clickedColor + pickedcolor);
	//compare color to pickedcolor
	if(clickedColor === pickedcolor){
		messageDisplay.textContent="Correct";
		changeColors(pickedcolor);
		h1.style.background = clickedColor;
		resetButton.textContent = "Play Again?";

	}
	else
	{
		// alert("WRONG!!");
		this.style.background= "#232323";
		messageDisplay.textContent="Try Again";
	}

	
	
});
}
}


function reset()
{
   //generate all new colors
colors = generateRandomColors(numSquares);
//pick a new random color from array
pickedcolor = pickColor();
//change colorDisplay to match picked Color
colorDisplay.textContent = pickedcolor;
//change colors of squares
for(var i =0; i<squares.length; i++)
{

	    	if(colors[i])
    	{
    		 squares[i].style.display = "block";
    		 squares[i].style.background = colors[i];
    	}
    	else
    	{
    		squares[i].style.display = "none";
    	}
}
//changing h1 backgroung color to black again
h1.style.background = "steelblue";
//reset back the text of button to new colors
resetButton.textContent = "New Colors";
messageDisplay.textContent="";

}



resetButton.addEventListener("click",function(){
 reset();
 });


function changeColors(color){
	//loop through all squares
	for(var i =0; i<squares.length; i++)
	{
	//change each color to match given color
	squares[i].style.background = color;
	

	}
}

function pickColor()
{
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];	
}

function generateRandomColors(num)
{
  //make an array
  var arr = []
  //repeat num times
  for(var i=0; i <num; i++){
  	//get random color and push into arr
  	arr.push(randomColor());
  }
  //return that array
  return arr;

}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a green from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";

}


