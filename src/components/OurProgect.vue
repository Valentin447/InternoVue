<template>
  <div class="banner progect__banner">
    <div class="banner__info">
      <h1 class="banner__info-heading">Our Project</h1>
      <nav class="banner__info-breadсrumbs">
        <a class="banner__info-breadсrumbs-link" href="index.html">Home /</a>
        <a class="banner__info-breadсrumbs-link" href="blog.html"> Project</a>
      </nav>
    </div>
  </div>
  <div class="filter">
    <button v-for="(item, index) in filterButtons" :key="index" @click="select(item.text)" :class="item.classButton">{{ item.text }}</button>
  </div>
  <div class="container">
    <div class="project-cards">
      <div class="project-cards-wrap" v-for="item in projects"
        :key="item.index"
      >
        <ProjectCard :project="item" />
      </div>
    </div>
    <div class="projects-pagination">
      <PaginationComponent />
    </div>
  </div>
</template>

<script>
import PaginationComponent from "./PaginationComponent.vue";
import ProjectCard from "./ProjectCard.vue";
export default {
  data() {
    return {
      filterButtons:[
        {text: "Bathroom", classButton: "filter__button"},
        {text: "Bed Room", classButton: "filter__button filter__button-selected"},
        {text: "Kitchan", classButton: "filter__button"},
        {text: "Living Area", classButton: "filter__button"},
      ],
      projects: [
        {
          photoSrc: require("./../assets/img/rooms/Photo15.jpg"),
          title: "Minimal Bedroom",
          info: "Decor / Artchitecture",
        },
        {
          photoSrc: require("./../assets/img/rooms/Photo17.jpg"),
          title: "Minimal Bedroom",
          info: "Decor / Artchitecture",
        },
        {
          photoSrc: require("./../assets/img/rooms/Photo19.jpg"),
          title: "Classic Minimal Bedroom",
          info: "Decor / Artchitecture",
        },
        {
          photoSrc: require("./../assets/img/rooms/Photo21.jpg"),
          title: "Modern Bedroom",
          info: "Decor / Artchitecture",
        },
        {
          photoSrc: require("./../assets/img/rooms/Photo16.jpg"),
          title: "Minimal Bedroom table",
          info: "Decor / Artchitecture",
        },
        {
          photoSrc: require("./../assets/img/rooms/Photo18.jpg"),
          title: "System Table",
          info: "Decor / Artchitecture",
        },
        {
          photoSrc: require("./../assets/img/rooms/Photo20.jpg"),
          title: "Modern Medroom",
          info: "Decor / Artchitecture",
        },
        {
          photoSrc: require("./../assets/img/rooms/Photo22.jpg"),
          title: "Modern Bedroom",
          info: "Decor / Artchitecture",
        },
      ],
    };
  },
  methods: {
    select(text){
      for (const button of this.filterButtons) {
        button.classButton = "filter__button";
        if(button.text === text){
          if(button.classButton !== "filter__button filter__button-selected"){
            button.classButton = "filter__button filter__button-selected";
            this.projects.reverse();
            const random = Math.floor(Math.random() * this.projects.length);
            const sectionArr = this.projects.splice(0, random);
            this.projects = this.projects.concat(sectionArr);
          }
        }
      }
    },
  },
  components: {
    ProjectCard,
    PaginationComponent,
  },
};
</script>

<style lang="scss" scoped>
.progect__banner {
  background: url("./../assets/img/background/background3.jpg");
}
.project-cards {
  display: flex;
  flex-flow: column wrap;
  height: 3300px;
  gap: 30px;
}
.filter {
  border: 1px solid #CDA274;
  border-radius: 18px;
  width: max-content;
  margin: 200px auto 61px;

  &__button {
    padding: 26px 66px;
    border-radius: 18px;
    color: #292F36;
    text-align: center;
    font-family: 'Jost';
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
    border: none;
    background: #FFF;
    cursor: pointer;
    &-selected{
      background: #CDA274;
      color: #FFF;
    }
  }
}
</style>
