<template>
  <div class="container">
    <header class="header">
      <router-link class="logo" to="/"><img
          class="logo__img"
          src="./../assets/img/Logo.png"
          alt="logo"
        />Interno</router-link>
      <nav class="header__nav">
        <router-link
          class="header__nav-link"
          v-for="link in linkArr"
          :key="link.id"
          :to="link.url"
          >{{ link.name }}</router-link
        >
      </nav>
    </header>
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
