const inputs = document.querySelectorAll('.controls input');  //.controls > input
const reset = document.querySelector('.button');


function handleUpdate() {
let suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// KIV
function resetUpdate(){
  let image = document.querySelector('.image');

}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
reset.addEventListener('click',resetUpdate);



/* NOTES:

dataset = object that contains all the data attributes from that specific
element. In this project, sizing is the only data attribute (data-sizing).

'' = for the color as it doesn't have a suffix.

*/
