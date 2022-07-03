$(document).ready(function(){
    
$('.slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 488,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      }
    ]
  }); 

  let hamberger = document.querySelector('.hamberger');
  let times = document.querySelector('.times')
  let mobilenav = document.querySelector('.mobile-nav')

  hamberger.addEventListener('click', function(){
    mobilenav.classList.add('open');
  });

  times.addEventListener('click', function(){
    mobilenav.classList.remove('open')
  });
});