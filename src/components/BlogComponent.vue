<template>
  <div class="container">
  </div>
  <div class="banner blog__banner">
    <div class="banner__info">
      <h1 class="banner__info-heading">Articles & News</h1>
      <nav class="banner__info-breadсrumbs">
        <a class="banner__info-breadсrumbs-link" href="index.html">Home /</a>
        <a class="banner__info-breadсrumbs-link" href="blog.html"> Blog</a>
      </nav>
    </div>
  </div>
  <div class="container">
    <section class="latest-post">
      <h2 class="latest-post__heading">Latest Post</h2>
      <figure class="latest-post__post">
        <img
          class="latest-post__post-photo"
          src="./../assets/img/rooms/Photo9.jpg"
          alt="room"
        />
        <figcaption class="latest-post__post-content">
          <h4 class="latest-post__post-heading">
            Low Cost Latest Invented Interior Designing Ideas
          </h4>
          <p class="latest-post__post-text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.
          </p>
          <p class="latest-post__post-text">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classica.
          </p>
          <div class="latest-post__post-footer">
            <time class="latest-post__post-footer-date" datetime="2022-12-26"
              >26 December,2022</time
            >
            <button class="latest-post__post-footer-button">
              <img
                class="latest-post__post-footer-button-arrow"
                src="./../assets/img/arrow2.svg"
                alt="next"
              />
            </button>
          </div>
        </figcaption>
      </figure>
    </section>
    <section id="app" class="articles blog__articles">
      <h2 class="articles__heading blog__articles-heading">Articles & News</h2>
      <ul class="articles__list">
        <li v-for="post in posts" :key="post.index" class="post-link">
          <div class="post-link__label">{{ post.label }}</div>
          <img class="post-link__photo" :src="post.photoSrc" alt="photo" />
          <h5 class="post-link__heading">
            {{ post.heading }}
          </h5>
          <div class="post-link__bottom">
            <time class="post-link__bottom-time">{{ post.time }}</time>
            <button class="post-link__bottom-button">
              <img
                class="post-link__bottom-button-arrow"
                src="./../assets/img/arrow2.svg"
                alt="arrow"
              />
            </button>
          </div>
        </li>
      </ul>
      

      <PaginationComponent />

    </section>
  </div>
</template>

<script>
import PaginationComponent from './PaginationComponent.vue';


export default {
    data() {
        return {
            posts: [
                {
                    label: "Kitchan Design",
                    photoSrc: require("@/assets/img/rooms/Photo7.jpg"),
                    heading: "Let's Get Solution For Building Construction Work",
                    time: "26 December,2022",
                },
                {
                    label: "Living Design",
                    photoSrc: require("@/assets/img/rooms/Photo7.jpg"),
                    heading: "Low Cost Latest Invented Interior Designing Ideas.",
                    time: "22 December,2022",
                },
                {
                    label: "Interior Design",
                    photoSrc: require("@/assets/img/rooms/Photo8.jpg"),
                    heading: "Best For Any Office & Business Interior Solution",
                    time: "25 December,2022",
                },
                {
                    label: "Kitchan Design",
                    photoSrc: require("@/assets/img/rooms/Photo10.jpg"),
                    heading: "Let's Get Solution For Building Construction Work",
                    time: "26 December,2022",
                },
                {
                    label: "Living Design",
                    photoSrc: require("@/assets/img/rooms/Photo11.jpg"),
                    heading: "Low Cost Latest Invented Interior Designing Ideas.",
                    time: "22 December,2022",
                },
                {
                    label: "Interior Design",
                    photoSrc: require("@/assets/img/rooms/Photo12.jpg"),
                    heading: "Best For Any Office & Business Interior Solution",
                    time: "25 December,2022",
                },
            ],
        };
    },
    components: { PaginationComponent }
};
</script>

<style lang="scss" scoped></style>
