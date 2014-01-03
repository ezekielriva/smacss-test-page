app.behavior.swiper = {
  $obj: $('[data-behavior*=swiper]'),

  init:function() {
    this.$obj.each(function(i, el) {
      var swiper = $(el).swiper({
        mode:'horizontal',
        loop: true,
        autoplay: 3000,
        loopAdditionalSlides: 2
      });

      $(el).find('.arrow-left').on('click', function() {
        swiper.swipePrev();
      });

      $(el).find('.arrow-right').on('click', function() {
        swiper.swipeNext();
      });

    });
  }
};
