<template>
<tfoot class="mu-tfoot">
  <slot></slot>
</tfoot>
</template>

<script>
export default {
  name: 'ui-tfoot',
  created () {
    this.isTfoot = true
  },
  computed: {
    showCheckbox () {
      return this.$parent.showCheckbox
    }
  }
}
</script>
