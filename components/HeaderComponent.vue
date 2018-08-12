<template>
    <header>
        <h2>
            Hey there, I'm Micah.
        </h2>
        <h2>
            I sometimes write about web development and other things.
        </h2>
        <h2>
            I like video games and Dyson vacuums. 
        </h2>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0;
  border-bottom: 2px solid #506987;
  line-height: 1.5rem;
}

h2 {
  font-weight: 200;
}
</style>

