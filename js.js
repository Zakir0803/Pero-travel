let box = document.querySelector('.popup')

let showPopup = ()=>{
    box.classList.toggle('active')
}

let blac = document.querySelector('.excursions_type')

let excursions = ()=>{
    blac.classList.toggle('active')
}

(function($) {
$(function() {
  
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.cards').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});
})(jQuery);