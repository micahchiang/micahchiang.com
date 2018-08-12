<template>
  <div class="app__container">
    <header-component></header-component>
    <entries-component></entries-component>
  </div>
</template>

<script>
import EntriesComponent from '~/components/EntriesComponent';
import HeaderComponent from '~/components/HeaderComponent';

export default {
  components: {
    EntriesComponent,
    HeaderComponent
  },
  async fetch( {store} ) {
    await store.dispatch('LOAD_ENTRIES');
  }
}
</script>

<style scoped>
.app__container {
  width: 100%;
  max-width: 850px;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem;
}
</style>

