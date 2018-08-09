<template>
    <ul>
        <li v-for="entry in entries" :key="entry.id">
            <h2>{{ entry.title }}</h2>
            <template v-if="entry.slug">
                <nuxt-link :to="'/entries/'+entry.slug">{{entry.slug}}</nuxt-link>
            </template>
        </li>
    </ul>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'EntriesComponent',
        computed: mapState([
            "entries"
        ])
    }    
</script>

<style>
</style>

