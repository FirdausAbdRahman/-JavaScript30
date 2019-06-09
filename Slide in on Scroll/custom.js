function debounce(func, wait = 20, immediate = true) { //20 milisecond
  /*
  debounce = limits the rate at which a function can fire. To improve performance.
  */
  var timeout;

  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
      };
     var callNow = immediate && !timeout;
     clearTimeout(timeout);
     timeout = setTimeout(later, wait);
     if (callNow) func.apply(context, args);
      };
    };

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {

  sliderImages.forEach(sliderImage => {
    // half way through the image
    /*
    scrollY = returns the number of pixels that the document is currently scrolled
    vertically from the top of the window.
    scrollY + innerHeight = return number of pixels at the bottom of the viewport.
    */
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;


    // bottom of the image
    /*
    offsetTop = returns the top position of the image (in pixels) from the top
    of the actual window.
    offsetTop + height = return the bottom position of the image
    */
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    //make sure that we're not scrolling all the way past the image.
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
