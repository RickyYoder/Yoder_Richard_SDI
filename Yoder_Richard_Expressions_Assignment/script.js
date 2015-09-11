/**

Richard Yoder
Expressions Assignment
9/10/2015

**/

//declare our variables

var rAdd = document.getElementById('rAdd'), //red add button
gAdd = document.getElementById('gAdd'), //green add button
bAdd = document.getElementById('bAdd'), //blue add button
rSub = document.getElementById('rSub'), //red subtract button
gSub = document.getElementById('gSub'), //green subtract button
bSub = document.getElementById('bSub'), //blue subtract button
result = document.getElementById('result'), //result text input
visual = document.getElementById('visual'), //visual result
reset = document.getElementById('reset'), //reset button

rgb = [0,0,0], //array
resultValue = ""; //empty string to be populated upon result
average = 0; //number

function Result(){
	//calculates our CSS RGB code and a few other things
	result.value = visual.style.background = 'rgb('+rgb.join(',')+')';

	average = Math.round((rgb[0] + rgb[1] + rgb[2]) / 3);
	resultValue = 'rgb('+rgb.join(',')+')';

	console.log("RGB: "+resultValue+"..........Average value: "+average);
}

rAdd.addEventListener('click',function(){
	rgb[0]++;
	if(rgb[0] > 255) rgb[0] = 0;
	
	Result();
});

gAdd.addEventListener('click',function(){
	rgb[1]++;
	if(rgb[1] > 255) rgb[1] = 0;
	
	Result();
});

bAdd.addEventListener('click',function(){
	rgb[2]++;
	if(rgb[2] > 255) rgb[2] = 0;
	
	Result();
});

rSub.addEventListener('click',function(){
	rgb[0]--;
	if(rgb[0] < 0) rgb[0] = 255;
	
	Result();
});

gSub.addEventListener('click',function(){
	rgb[1]--;
	if(rgb[1] < 0) rgb[1] = 255;
	
	Result();
});

bSub.addEventListener('click',function(){
	rgb[2]--;
	if(rgb[2] < 0) rgb[2] = 255;
	
	Result();
});

reset.addEventListener('click',function(){
	rgb = [0,0,0];
	Result();
});

/**

	Tests:

	1,1,1 gave me "RGB: rgb(1,1,1)..........Average value: 1"

	2,2,2 gave me "RGB: rgb(2,2,2)..........Average value: 2"

	255,255,255 gave me "RGB: rgb(255,255,255)..........Average value: 255"

**/