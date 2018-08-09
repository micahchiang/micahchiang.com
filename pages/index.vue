<template>
  <entries-component></entries-component>
</template>

<script>
import EntriesComponent from '~/components/EntriesComponent';

export default {
  components: {
    EntriesComponent
  },
  async fetch( {store} ) {
    await store.dispatch('LOAD_ITEMS', 'posts');
  }
}
</script>

<style>
</style>

