<template>
  <div :class="classes" :style="styles">哈哈2 {{ message }}</div>
</template>

<script>
    export default {
        props: ['message'],
        name: 'tag',
        computed: {
            classes () {
                return `label label-primary`;
            },
            styles () {
                let style = {};

                /*if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }

                if (this.color) {
                    style.color = this.color;
                }*/

                return style;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
