<template>
  <div class="about">
    <h1>测试</h1>
    <div>{{ state }}</div>
    <button class="btn btn-blue" @click="login">登录</button>
  </div>
</template>

<script>
    export default {
        name: 'test',
        data () {
            return {
                state: '未登录',
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            login: function () {
                this.state = '登录成功';
                this.$router.push('user/1')
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
