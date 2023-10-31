<template>
  <div class="container">
    <div class="not-found">
      <div class="not-found__left">
        <h1 class="not-found__heading">404</h1>
        <p class="not-found__text">
          We are sorry, but the page you requested was not found
        </p>
        <router-link class="not-found__link" to="/"
          >Back To Home <img src="./../assets/img/arrow_right.svg" alt=""
        /></router-link>
      </div>
      <img
        class="not-found__photo"
        src="./../assets/img/background/background404.jpg"
        alt="photo"
      />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: { HeaderComponent },
};
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 569px;
    height: calc(100vh - 200px);
  }
  &__heading {
    color: #cda274;
    font-family: "DM Serif Display";
    font-size: 250px;
    font-weight: 400;
    line-height: 125%;
  }

  &__text {
    color: #292f36;
    font-family: "DM Serif Display";
    font-size: 35px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.35px;
  }
  &__link {
    color: #fff;
    text-align: center;
    font-family: "Jost";
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
    background-color: #292f36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    padding: 26px 54px;
    border-radius: 18px;
    text-decoration: none;
    display: flex;
    align-items: center;
    max-width: fit-content;
    gap: 9px;
    margin-top: 24px;
  }
  &__photo {
    position: absolute;
    right: 0px;
    height: calc(100vh - 200px);
    border-radius: 0px 0px 0px calc((100vh - 200px) / 3);
  }
}
</style>
