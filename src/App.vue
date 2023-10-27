<template>
  <HeaderComponent />
  <InedxComponent />
  <BlogComponent />
  <BlogDetails />
  <OurProgect />
  <ProjectDtails />
  <FooterComponent />
  
</template>

<script>
import BlogComponent from './components/BlogComponent.vue';
import BlogDetails from './components/BlogDetails.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import InedxComponent from './components/InedxComponent.vue';
import PostComponent from './components/PostComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import OurProgect from './components/OurProgect.vue';
import ProjectDtails from './components/ProjectDtails.vue';

export default {
  components:{
    InedxComponent,
    BlogComponent,
    BlogDetails,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    OurProgect,
    ProjectDtails
}
}
</script>

<style lang="scss">

</style>
