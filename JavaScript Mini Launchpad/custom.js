//when pressed the assigned keys, execute a function called playSound
  document.addEventListener('keydown', playSound);

  function playSound(e) {
    //add attribute selector using ES6 template literal
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running

    //perform the transition which stated on the class 'playing'.
    key.classList.add('playing');
    audio.currentTime = 0.5; //rewind to the start (when pressed over & over again)
    audio.play();
  }
  let keys = document.querySelectorAll('.key');
  //loop over every single element & attach event listener
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  function removeTransition(e) {
    //on the console ->TransitionEvent ->propertyName
      if (e.propertyName !== 'transform') return; //skip it if it's not a transform
      e.target.classList.remove('playing'); //remove the transition
    }
