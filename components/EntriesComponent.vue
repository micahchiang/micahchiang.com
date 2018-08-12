<template>
<main>
    <ul>
        <li 
            class="entry__list-item"
            v-for="entry in entries" 
            :key="entry.id"
        >
            <nuxt-link 
                class="entry__link"
                :to="'/entries/'+entry.slug"
            >
                <h2 class="entry__link-header">
                    {{ entry.title }}
                </h2>
            </nuxt-link>
            <p>{{entry.createdAt}}</p>
        </li>
    </ul>
</main>
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

<style scoped>
main {
  overflow: scroll;
}
ul {
  padding: 0;
  list-style: none;
}
.entry__list-item {
  padding: 1.5rem 0;
}
.entry__link {
  text-decoration: none;
  color: inherit;
}
.entry__link:hover {
  cursor: pointer;
  text-decoration: underline;
}
.entry__link:visited {
  color: inherit;
}
.entry__link-header {
  font-weight: 200;
}
</style>

