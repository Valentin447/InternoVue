<template>
  <div class="main-wrap">
    <main v-for="(post, index) in this.postsVisible" :key="index" class="post">
      <h1 class="post__heading">{{ post.title }}</h1>
      <figure>
        <img class="post__main-photo" :src="post.mainFoto" alt="room" />
        <div class="post__info">
          <time>26 December,2022</time>
          <ul class="post__tags">
            <li class="post__tags-item">Interior</li>
            <li class="post__tags-item">Home</li>
            <li class="post__tags-item">Decore</li>
          </ul>
        </div>
        <figcaption>
          <p class="post__text-default">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injecthumour, or
            randomised words which don't look even slightly believable.
          </p>
          <br />
          <p class="post__text-default">
            Embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as
            necessary.
          </p>
        </figcaption>
      </figure>
      <div class="post__quotes">
        <p class="post__quotes-marks">“</p>
        <p class="post__quotes-text">
          The details are not the details. They make the design.
        </p>
      </div>
      <div class="post__content">
        <h2 class="post__content-heading">Design sprints are great</h2>
        <p class="post__text-default">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered.
        </p>
        <ol class="post__text-default post__content-list">
          <li class="post__content-list-item">
            <span class="post__content-list-item-count">1</span>
            <p>
              Contrary to popular belief.There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered.
            </p>
          </li>
          <li class="post__content-list-item">
            <span class="post__content-list-item-count">2</span>
            <p>
              Contrary to popular belief.There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered.
            </p>
          </li>
          <li class="post__content-list-item">
            <span class="post__content-list-item-count">3</span>
            <p>
              Contrary to popular belief.There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered.
            </p>
          </li>
        </ol>
        <img class="post__photo2" src="./../assets/img/rooms/Photo14.jpg" alt="room" />
        <p class="post__text-default">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered.
        </p>
      </div>
    </main>
    <aside class="tags">
      <h5 class="tags__heading">Tags</h5>
      <ul class="tags__list">
        <li
          @click="search(tag)"
          v-for="(tag, index) in this.tags"
          :key="tag.index"
        >
          <button class="tags__list-button">{{ tag }}</button>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      tags: [
        "Kitchen",
        "Bedroom",
        "Building",
        "Architecture",
        "Kitchen Planning",
        "Bedrooms",
      ],
      postsVisible: [
        {
          title: "Let's Get Solution for Building Construction Work",
          mainFoto: require("@/assets/img/rooms/Photo13.jpg"),
          date: "26 December,2022",
          tagsPost: ["Kitchen", "Home", "Decore"],
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          heding2: "Design sprints are great",
          text3:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          listContent: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          photo2: require("@/assets/img/rooms/Photo14.jpg"),
          text4:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
      ],
      postsList: [
        {
          title: "Let's Get Solution for Building Construction Work",
          mainFoto: require("@/assets/img/rooms/Photo13.jpg"),
          date: "26 December,2022",
          tagsPost: ["Kitchen", "Home", "Decore"],
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          heding2: "Design sprints are great",
          text3:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          listContent: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          photo2: require("@/assets/img/rooms/Photo14.jpg"),
          text4:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          title: "Aliquam eu sem vitae turpmaximus.posuere in",
          mainFoto: require("@/assets/img/rooms/Photo21.jpg"),
          date: "26 December,2022",
          tagsPost: ["Bedroom", "Home", "Decore"],
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          heding2: "Design sprints are great",
          text3:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          listContent: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          photo2: require("@/assets/img/rooms/Photo14.jpg"),
          text4:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          title: "Ipsum available, but the majority have suffered",
          mainFoto: require("@/assets/img/rooms/Photo22.jpg"),
          date: "26 December,2022",
          tagsPost: ["Building", "Home", "Decore"],
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          heding2: "Design sprints are great",
          text3:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          listContent: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          photo2: require("@/assets/img/rooms/Photo14.jpg"),
          text4:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          title:
            "Contrary to popular belief.There are many variations of passages",
          mainFoto: require("@/assets/img/rooms/Photo23.jpg"),
          date: "26 December,2022",
          tagsPost: ["Interior", "Architecture", "Decore"],
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          heding2: "Design sprints are great",
          text3:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          listContent: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          photo2: require("@/assets/img/rooms/Photo14.jpg"),
          text4:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          title: "But the majority have suffered alteration in some form",
          mainFoto: require("@/assets/img/rooms/Photo2.jpg"),
          date: "26 December,2022",
          tagsPost: ["Interior", "Kitchen Planning", "Decore"],
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          heding2: "Design sprints are great",
          text3:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          listContent: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          photo2: require("@/assets/img/rooms/Photo14.jpg"),
          text4:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          title: "Passages of Lorem Ipsum available, but the majority",
          mainFoto: require("@/assets/img/rooms/Photo3.jpg"),
          date: "26 December,2022",
          tagsPost: ["Interior", "Home", "Bedrooms"],
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          heding2: "Design sprints are great",
          text3:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          listContent: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          photo2: require("@/assets/img/rooms/Photo14.jpg"),
          text4:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
      ],
    }
  },
  methods: {
    search(tag) {
      this.postsVisible = [];
      for (const post of this.postsList) {
        for (const postTag of post.tagsPost) {
          if (postTag === tag) {
            this.postsVisible.push(post);
            break;
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
