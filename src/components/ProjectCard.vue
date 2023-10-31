<template>
  <div @click="like(arg, event)" class="project-card">
    <svg :class="classStar"
      width="36"
      height="35"
      viewBox="0 0 36 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_993_156)">
        <path
          d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
          fill="#FFA928"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_993_156"
          x="0.186424"
          y="0.431396"
          width="35.6271"
          height="34.3619"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_993_156"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_993_156"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    <img
      class="project-card__photo"
      :src="project.photoSrc"
      alt="photo"
    />
    <div class="project-card__info">
      <div class="project-card__info-left">
        <h5 class="project-card__info-heading">{{ project.title }}</h5>
        <span class="project-card__info-text">{{ project.info }}</span>
      </div>
      <router-link class="project-card__info-button" to="/project-details"><img
          class="project-card__info-button-arrow"
          src="./../assets/img/arrow2.svg"
          alt="arrow"
        /></router-link>


    </div>
  </div>
</template>

<script>
export default {
  props:["project"],
  data() {
    return {
      classStar: "project-card__star project-card__star-hidden",
    }
  },
  methods:{
    like(){
      let hidden = false;
      const classes = this.classStar.split(" ");
      for (const currentClass of classes) {
        if(currentClass === "project-card__star-hidden"){
          hidden = true;
          this.classStar = "project-card__star";
        }
      }
      if(!hidden){
        this.classStar = "project-card__star project-card__star-hidden"
      }
    },
  },
};


</script>

<style lang="scss" scoped>
  .project-card{
    position: relative;
    width: 585px;
    &__star{
      position: absolute;
      right: 0;
      top: 3px;
      &-hidden{
        display: none;
      }
    }
    &__info{
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      &-heading{
        color:  #292F36;
        font-family: 'DM Serif Display';
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.5px;
      }
      &-text{
        color: #4D5053;
        font-family: 'Jost';
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
      }
      &-button{
        height: 70px;
        width: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 35px;
        border: none;
        background: #F4F0EC;
        cursor: pointer;
      }
    }
  }

</style>
