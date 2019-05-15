const inputs = document.querySelectorAll('.controls input');  //.controls > input

function handleUpdate() {
let suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


/* NOTES:

dataset = object that contains all the data attributes from that specific
element. In this project, sizing is the only data attribute (data-sizing).

*/
