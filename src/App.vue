<template>
  <HeaderComponent />
  <!-- <IndexComponent />
  <BlogComponent />
  <BlogDetails />
  <OurProgect />
  <ProjectDetails />
  <FooterComponent /> -->
  <router-view />
</template>

<script>
import BlogComponent from './pages/Blog.vue';
import BlogDetails from './pages/BlogDetails.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import IndexComponent from './pages/Index.vue';
import PostComponent from './components/PostComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import OurProgect from './pages/OurProgect.vue';
import ProjectDetails from './pages/ProjectDetails.vue';

export default {
  components:{
    IndexComponent,
    BlogComponent,
    BlogDetails,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    OurProgect,
    ProjectDetails
}
}
</script>

<style lang="scss">

</style>
