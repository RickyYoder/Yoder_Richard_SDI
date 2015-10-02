//declare variables

var form = document.forms['calc'], //the form
	numbers = form.numbers, //our numbers input
	roundOutput = form.roundOutput, //a checkbox to determine whether or not to round our output to the nearest whole number
	result = document.getElementById('result'), //our result to be displayed
	list = []; //our list of numbers

function avg(round){ //our function that calculates the average
	var nums = numbers.value.split(" "); //creates an array from our number input value
	for(var x = 0; x < nums.length; x++){
		if(isNaN(Number(nums[x]))) nums[x] = 0; //if the value isn't a number, just set it to 0
		else nums[x] = Number(nums[x]); //otherwise, make it a number
	}

	list = nums;

	var Avg = 0,
		count = list.length,
		val = 0;

	for(var x = 0; x < count; x++){
		val += list[x]; //calculate sum
	}

	Avg = val/count; //divide sum of values by number of values to get average

	if(round) Avg = Math.round(Avg); //round average only if supposed to

	result.innerText = 'The average value from your set of numbers is '+Avg; //display result to user
	
	return Avg;
}

form.addEventListener('submit',function(event){ //when the form is submitted
	event.preventDefault();
	event.stopPropagation();
	//^^just to keep the form from submitting^^

	avg(roundOutput.checked); //calculate the average

	return 0;
});