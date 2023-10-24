<template>
  <div class="pagination">
    <button
      class="pagination__button pagination__button-current"
    >
      01
    </button>
    <button class="pagination__button">02</button>
    <button class="pagination__button">03</button>
    <button class="pagination__button">
      <img
        class="pagination__button-arrow-right"
        src="./../assets/img/arrow2.svg"
        alt="next"
      />
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    .pagination{
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 51px;

    &__button{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 52px;
      width: 52px;
      border-radius: 26px;
      border: 1px solid #CDA274;
      background-color: #fff;
      color: #292F36;
      font-family: 'Jost';
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      text-transform: capitalize;
      cursor: pointer;
      &-arrow-right{
        transform: scale(0.8);
      }

      &-current{
        border: 1px solid #F4F0EC;
        background-color: #F4F0EC;
      }
    }
  }
</style>
