<template>
  <div class="blog-details">
    <div class="container">
    </div>
    <div class="banner blog-details__banner"></div>
    <div class="container">
      <PostComponent />
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import PostComponent from './../components/PostComponent.vue';

  export default {
    components:{
    PostComponent,
    FooterComponent
}
  }
</script>

<style lang="scss" scoped>

</style>