<template>
	<i class="icon icon-back"  @click="goback"></i>
</template>

<script>
	export default {
		methods: {
			goback () {
				this.$router.go(-1);
			}
		}
	}
</script>