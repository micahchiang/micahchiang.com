<template>
  <header>
    <img
      class="bio__img"
      src="~/assets/mc_roller_coaster-min.jpg"
    >
    <section class="header__info">
      <h2>
        Hey there, I'm Micah.
      </h2>
      <h2>
        I sometimes write about web development and other things.
      </h2>
      <h2>
        I like video games and Dyson vacuums.
      </h2>
    </section>
    <section class="header__social-container">
      <a
        href="https://www.github.com/micahchiang"
        target="_blank"
      >
        <img
          class="social-link"
          src="~/assets/github.svg"
          alt="github"
        >
      </a>
      <a
        href="https://www.linkedin.com/in/micahkchiang"
        target="_blank"
      >
        <img
          class="social-link"
          src="~/assets/linkedin.png"
          alt="linkedin"
        >
      </a>
      <a
        href="https://www.instagram.com/micahkchiang"
        target="_blank"
      >
        <img
          class="social-link"
          src="~/assets/instasvg.svg"
          alt="instagram"
        >
      </a>
      <a href="mailto:micahkchiang@gmail.com">
        <img
          class="social-link"
          src="~/assets/email.svg"
          alt="email"
        >
      </a>
    </section>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 2px solid #506987;
  line-height: 1.5rem;
}

.bio__img {
  height: 100px;
  width: 100px;
  border-radius: 100px;
}

.header__info {
  padding-top: 1rem;
}

h2 {
  font-weight: 200;
}

.header__social-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  width: 70%;
  margin: 0 auto;
}

.social-link {
  height: 25px;
  width: 25px;
}
</style>

