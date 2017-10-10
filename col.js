var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedcolor = colors[3];
var colorDisplay= document.getElementById("colorDisplay");

colorDisplay.textContent = pickedcolor;

for(var i =0; i<squares.length; i++)
{

	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
	//grab color of clicked square
	var clickedColor = this.style.background;
	console.log(clickedColor + pickedcolor);
	//compare color to pickedcolor
	if(clickedColor === pickedcolor){
		alert("Correct");
	}
	else
	{
		alert("WRONG!!");
	}

	
	
});
}