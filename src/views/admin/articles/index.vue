<template>
  <div class="about">
    <h1>文章列表</h1>
    <ul>
        <li><router-link to="/articles/1">文章1</router-link></li>
        <li><router-link to="/articles/2">文章2</router-link></li>

        <li><a href="/articles/1">文章1</a> </li>
        <li><a href="/articles/2">文章2</a> </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'about',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
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
