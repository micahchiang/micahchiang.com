<template>
    <ul>
        <li v-for="entry in entries" :key="entry.id">
            {{entry.title}}
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

