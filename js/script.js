// init Isotope
var $grid = $('#portfolio-items').isotope({
    // options
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', '.portfolio-button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
});

const btns = document.querySelectorAll (".portfolio-button");
const portfolioItems = document.querySelectorAll (".portfolio-image-section");


// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener ("click", (e) => {
//     e.preventDefault();
    
//     const filter = e.target.dataset.filter; 
     
//     portfolioItems.forEach((portfolioItem)=> {
//       if (filter=="all") {
//         portfolioItem.style.display ="block"
//       } else {
//         if (portfolioItem.classList.contains(filter)) {
//         portfolioItem.style.display= "block"
//       } else {
//         portfolioItem.style.display= "none"
//       }
//       }
//     })
//   })
// }

btns.forEach(btn => {
  btn.addEventListener ('click', function(){
    btns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

let valueDisplays = document.querySelectorAll(".counter");
let interval = 3000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval( function() {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
