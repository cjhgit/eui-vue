<template>
    <div class="hello">
        <h2>Aside</h2>
        <div>

            <button class="btn btn-danger btn-lg">Show Aside on left</button>

            <aside :show.sync="showRight" placement="right" header="Title" width="350">
                <div>Asd 测试</div>

            </aside>
        </div>
    </div>
</template>

<script>
    import Aside from '@/components/Aside'

    export default {
        name: 'button',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            Aside
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
