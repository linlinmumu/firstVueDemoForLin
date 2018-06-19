<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>我的页面</h2>
    <ul>
      <li>
        <router-link to="lin1">lin1</router-link>
      </li>
      <li>
        <router-link to="lin2">lin2</router-link>
      </li>
      <li>
        <router-link to="lin3">lin3</router-link>
      </li>
    </ul>
    <img src="./../assets/logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My First Vue.js App',
    }
  },
  created: function () {
    // `this` 指向 vm 实例
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
