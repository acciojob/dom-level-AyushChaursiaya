//your JS code here. If required.

document.addEventListner("DOMContentLoaded", function() {
	const element = document.getElementById("level");
	let count = 0;
	while (element.parentElement) {
		count++;
		element = element.parentElement;
	}
	
	alert("The level of the element is: "+ count);
});




// document.addEventListener("DOMContentLoaded", function() {
//     var element = document.getElementById('level');
//     var level = 1;
    
//     // Traverse through the parent elements until reaching the root html element
//     while (element.parentElement) {
//         level++;
//         element = element.parentElement;
//     }
    
//     alert("The level of the element is: " + level);
// });
