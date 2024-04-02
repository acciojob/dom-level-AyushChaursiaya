//your JS code here. If required.
// domLevel.js
document.addEventListener("DOMContentLoaded", function() {
    var element = document.getElementById('level');
    var level = 0;
    
    // Traverse through the parent elements until reaching the root html element
    while (element.parentElement) {
        level++;
        element = element.parentElement;
    }
    
    alert("The level of the element is: " + level);
});
