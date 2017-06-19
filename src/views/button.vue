<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>按钮页面</h2>
        <div>
            <Button>按钮</Button>
            <Button size="large">大按钮</Button>
            <div>
                <Button type="primary">primary</Button>
                <Button type="success">success</Button>
                <Button type="warning">warning</Button>
                <Button type="danger">danger</Button>
            </div>
        </div>
        <div>
            <code>
                <pre><button></button></pre>
            </code>
        </div>
    </div>
</template>

<script>
    import Alert from '@/components/Alert'
    import Button from '@/components/Button'
    export default {
        name: 'button',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            Alert,
            Button
        },
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
