<template>
    <div v-html="post"></div>
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

