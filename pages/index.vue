<template>
  <div>
    <entries-component></entries-component>
  </div>
</template>

<script>
import EntriesComponent from '~/components/EntriesComponent';

export default {
  components: {EntriesComponent},
  async fetch( {store} ) {
    await store.dispatch('LOAD_ENTRIES');
  }
}
</script>

<style>
</style>

