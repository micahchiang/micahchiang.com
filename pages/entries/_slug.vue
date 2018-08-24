<template>
    <main>
        <div class="home__link-container">
            <nuxt-link to="/">Return Home</nuxt-link>
        </div>
        <div id="wrapper" v-html="post">
        </div>
        <div class="home__link-container">
            <nuxt-link to="/">Return Home</nuxt-link>
        </div>
    </main>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return {}
    },
    async fetch({store, route}) {
        await store.dispatch('LOAD_ENTRY', route.params.slug);
    },
    computed: {
        post() {
            let entry = this.$store.state.entry;
            return require(`~/static/entries/${entry}.md`);
        }
    }
}
</script>

<style>
#wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 850px;
  padding: 2rem;
}

hr {
  border-top: 2px solid #506987;
}

pre {
  background-color: #b7c3d0;
  color: #ffffff;
  padding: 1rem;
  overflow: scroll;
}

p {
  margin: 1rem 0;
}

.home__link-container {
  text-align: right;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  padding: 1rem 2rem;
}
</style>


