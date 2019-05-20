const inputs = document.querySelectorAll('.controls input');  //.controls > input
const reset = document.querySelector('.reset');


function handleUpdate() {
let suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Honestly, I'm not sure why this works !
function resetUpdate(){
return document.documentElement.style = "filter";
}

inputs.forEach(input =>input.addEventListener('change', handleUpdate));
reset.addEventListener('click',resetUpdate);



/* NOTES:

dataset = object that contains all the data attributes from that specific
element. In this project, sizing is the only data attribute (data-sizing).

'' = for the saturate as it doesn't have a suffix.

*/
