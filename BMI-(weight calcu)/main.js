var weight, height, measure, bmi, error ;



function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "You should enter some values first";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Your BMI is " + bmi + " which means " + "You need to gain some weight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = '<span style="color: red;">' + measure + '</span>';
		measure = "Your BMI is " + bmi + " which means " + "You are Healthy";
		measure += "\nNote: The BMI does not apply to athletes.";	
		measure = '<span style="color: red;">' + measure + '</span>';
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is " + bmi + " which means " + "You need to lose some weight.";
		measure += "\nNote: The BMI does not apply to athletes.";
		measure = '<span style="color: red;">' + measure + '</span>';
	} else if (bmi >= 30) {
		measure = "Your BMI is " + bmi + " but " + "Recognition is the first stage of solving the problem. You need to lose a lot of weight.";
		measure += "\nNote: The BMI does not apply to athletes.";
		measure = '<span style="color: red;">' + measure + '</span>';
		// Change the text color to red
	
	}
	  

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
	document.getElementById("results").innerHTML = "No ; Always be positive";
	}
	
}
document.body.addEventListener("pointermove", (e)=>{
	const { currentTarget: el, clientX: x, clientY: y } = e;
	const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
	el.style.setProperty('--posX',  x-l-w/2);
	el.style.setProperty('--posY',  y-t-h/2);
  })