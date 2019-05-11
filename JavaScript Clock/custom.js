const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    let now = new Date();

    let seconds = now.getSeconds();
    let secondsDegrees = ((seconds / 60) * 360) +90; //add 90 to tally with current time
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    let mins = now.getMinutes();
    let minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90 ;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    let hour = now.getHours();
    let hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;


    if(seconds = 60){ // to remove snap rotation when reaching 60 seconds
      secondHand.style.transition = `none`;
    }

  }
  setInterval(setDate, 1000);  //1000 miliseconds = 1 second
  setDate();
