<template>
    <div class="ui-container":class="containerClass">
        <slot></slot>
    </div>
</template>

<script>
    import {getColor, convertClass} from '../utils'

    export default {
        name: 'ui-container',
        props: {
            top: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            containerClass () {
                const classNames = []
                if (this.top) {
                    classNames.push('ui-container-top')
                }
                return classNames
            }
        }
    }
</script>

<style lang="scss">
    @import "../styles2/import";

    .ui-container {
        max-width: 960px;
        width: 100%;
        margin: 0 auto;
    }
    .ui-container-top {
        padding-top: 16px;
    }
</style>
