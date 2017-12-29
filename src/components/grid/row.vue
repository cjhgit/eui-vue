<template>
  <div class="row" :class="{'no-gutter': !gutter}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ui-row',
    props: {
      gutter: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
