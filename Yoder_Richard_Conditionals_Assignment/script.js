//declaraing our variables
var form = document.forms['calc'],
	width = form.width, //the width input
	height = form.height, //the height input
	tooBig = false, //a boolean telling us whether or not the dimensions provided are too big (we'll make up a limit as to how big dimensions can be)
	maxWidth = 400, //our maximum width limit
	maxHeight = 400, //our maximum height limit
	result = document.getElementById('result'), //our visual result output
	resultTxt = document.getElementById('result-txt'); //our textual result output

form.addEventListener('submit',function(event){
	//we don't actually want the form to submit
	event.preventDefault();
	event.stopPropagation();

	if(!width.value) throwError("Error. Please enter a width.");
	else if(!height.value) throwError("Error. Please enter a height.");
	else if(isNaN(width.value)) throwError("Error. Width is not a number.");
	else if(isNaN(height.value)) throwError("Error. Height is not a number.");

	tooBig = (width.value > maxWidth || height.value > maxHeight) ? throwError("Dimensions are too big. Must be 400x400 or less.") : calculate();
},false);

function calculate(){
	var w = parseInt(width.value), //our width
		h = parseInt(height.value); //our height

	result.style.width = width.value+"px"; //visualize the width
	result.style.height = height.value+"px"; //visualize the height

	resultTxt.innerHTML = "AREA: "+w*h+" UNITS SQUARED <br/> PERIMETER: "+(w+w+h+h)+" UNITS"; //return the output to the user
}

function throwError(msg){
	//just alert the user of the error
	alert(msg);
	return;
}