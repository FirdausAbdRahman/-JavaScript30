const inputs = document.querySelectorAll('.controls input');  //.controls > input
const reset = document.querySelector('.btn');


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

/* HTML


<h2>Update CSS Variables with <span class='highlight'>JS</span></h2>

<class class="section">

  <span class="image">
  <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500">
  </span>

  <span class="controls">
    <ul>
      <li>
        <label for="blur">Blur:</label>
        <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
      </li>
      <li>
        <label for="brightness">Brightness:</label>
        <input id="brightness" type="range" name="brightness" min="0" max="200" value="10" data-sizing="%">
      </li>
      <li>
        <label for="contrast">Contrast:</label>
        <input id="contrast" type="range" name="contrast" min="0" max="200" value="10" data-sizing="%">
      </li>
      <li>
        <label for="grayscale">Grayscale:</label>
        <input id="grayscale" type="range" name="grayscale" min="0" max="200" value="10" data-sizing="%">
      </li>
      <li>
        <label for="hue-rotate">Hue-rotate:</label>
        <input id="hue-rotate" type="range" name="hue-rotate" min="0" max="180" value="10" data-sizing="deg">
      </li>
      <li>
        <label for="invert">Invert:</label>
        <input id="invert" type="range" name="invert" min="0" max="200" value="10" data-sizing="%">
      </li>
      <li>
        <label for="opacity">Opacity:</label>
        <input id="opacity" type="range" name="opacity" min="0" max="200" value="10" data-sizing="%">
      </li>
      <li>
        <label for="saturate">Saturate:</label>
        <input id="saturate" type="range" name="saturate" min="0" max="25" value="10" >
      </li>
      <li>
        <label for="sepia">Sepia:</label>
        <input id="sepia" type="range" name="sepia" min="0" max="200" value="10" data-sizing="%">
      </li>
      <li>
        <label for="base">Base Color</label>
        <input id="base" type="color" name="base" value="#ffc600">
      </li>
      <li>
        <button class="button" type="button" name="button">Reset</button>
      </li>
    </ul>
  </span>

</section>
*/
