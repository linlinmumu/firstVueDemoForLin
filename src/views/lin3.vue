<template>
  <div>
    <h1>hello lin3</h1>
    <h2>作者：{{author}}</h2>
    <div>
      <svg-icon icon-class="canyin"></svg-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: "lin3",
    data () {
        return {

        }
    },
    computed: {
      author () {
        return this.$store.state.author
      }
    }
  }
</script>

<style scoped>
  .hamburger {
    display: inline-block;
    cursor: pointer;
    width: 20px;
    height: 20px;
    transform: rotate(90deg);
    transition: .38s;
    transform-origin: 50% 50%;
  }
  .hamburger.is-active {
    transform: rotate(0deg);
  }
</style>
