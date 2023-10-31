<template>
  <div class="container">
    <footer class="footer">
      <div class="footer__colum1">
        <a class="logo footer__logo" href="index.html"
          ><img
            class="logo__img"
            src="./../assets/img/Logo.png"
            alt="logo"
          />Interno</a
        >
        <p class="footer__text">
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <div class="footer__colum1-social-networks">
          <a href="#"><img src="./../assets/img/twit.png" alt="twitter" /></a>
          <a href="#"><img src="./../assets/img/in.png" alt="in" /></a>
        </div>
      </div>
      <section class="footer__pages">
        <h5 class="footer__heading">Pages</h5>
        <nav class="footer__nav">
          <router-link
          class="footer__text"
          v-for="link in linkArr"
          :key="link.id"
          :to="link.url"
          >{{ link.name }}</router-link
        >
        </nav>
      </section>
      <section class="footer__contact">
        <h5 class="footer__heading">Contact</h5>
        <p class="footer__text">
          55 East Birchwood Ave. Brooklyn, New York 11201
        </p>
        <p class="footer__text">contact@interno.com</p>
        <p class="footer__text">(123) 456 - 7890</p>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkArr: [
        {
          id: 0,
          name: "Home",
          url: "/",
        },
        {
          id: 1,
          name: "Project",
          url: "/project",
        },
        {
          id: 2,
          name: "Blog",
          url: "/blog",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
