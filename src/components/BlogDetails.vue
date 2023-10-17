<template>
  <div class="blog-details">
    <div class="container">
    </div>
    <div class="banner blog-details__banner"></div>
    <div class="container">
      <PostComponent />
    </div>
  </div>
</template>

<script>
import PostComponent from './PostComponent.vue';

  export default {
    components:{
      PostComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>