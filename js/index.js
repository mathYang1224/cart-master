$(function () {
  $('#car').fullpage({
    sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
    verticalCentered: false,
    navigation: true,
    
    afterLoad: function (link, index) {
      $('.section').eq(index - 1).addClass('now');
    },
    
    afterRender: function () {
      $('.more').on('click', function () {
        $.fn.fullpage.moveSectionDown();
      });
      $('.screen04 .cart').on('transitionend', function () {
        $('.screen04 .address').show().find('img:last').fadeIn(1000);
        $('.screen04 .text').addClass('show');
      });
      $('.screen08').on('mousemove', function (e) {
        $(this).find('.hand').css({
          left: e.clientX-450,
          top: e.clientY-300
        });
      }).find('.again').on('click', function () {
        $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
        $('.content [style]').removeAttr('style');
        /*跳回第一页*/
        $.fn.fullpage.moveTo(1);
      })
    },
    
    onLeave: function (index, nextIndex, direction) {
      $currentSection = $('.section ').eq(index - 1);
      if (index == 2 && nextIndex == 3) {
        $currentSection.addClass('leaved');
      } else if (index == 3 && nextIndex == 4) {
        $currentSection.addClass('leaved');
      } else if (index == 5 && nextIndex == 6) {
        $currentSection.addClass('leaved');
        $('.screen06 .box').addClass('show');
      }
    },
    scrollingSpeed: 1000
  });
});
