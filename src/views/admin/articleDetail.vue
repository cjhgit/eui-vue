<template>
  <div class="about">
    <h1>文章详情</h1>
      <div>{{ $route.params.id }}</div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
