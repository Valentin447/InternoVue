<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#FFF',
      '--swiper-pagination-color': '#000',
    }"
    :zoom="true"
    :navigation="false"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img class="swiper__photo" src="./../assets/img/rooms/Photo23.jpg" />
      </div> 
      </swiper-slide>
      <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </div> </swiper-slide
    >
    
  </swiper>
  
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/zoom';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // import required modules
  import { Zoom, Navigation, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Zoom, Navigation, Pagination],
      };
    },
  };
</script>
<style lang="scss" scoped>

  .swiper {
    --swiper-pagination-bottom: 0px;
    
  width: 100%;
  height: 100%;
  
}

.swiper-slide {
  border-radius: 70px;
  overflow: hidden;
}
.swiper__photo{
  border-radius: 70px;
}
.swiper-zoom-container > img, .swiper-zoom-container > svg, .swiper-zoom-container > canvas{
  max-height: 800px;
}

</style>
