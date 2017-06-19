<template>
	<button :type="inputType" :class="classes" :disabled="disabled" @click="click">
		<slot>{{label}}</slot>
	</button>
</template>
<script>
	import { oneOf } from 'UTIL/util'

	export default {
		props: {
			inputType: {
				type: String,
				default: 'button'
			},
			disabled: {
				type: Boolean,
				default: false
			},
			label: {
				type: String,
				default: '确定'
			},
			type: {
				validator (value) {
					return oneOf(value, ['default', 'info', 'success', 'warning', 'error', 'confirm', 'cancel'])
				}
			}
		},
		computed: {
			classes () {
				return [
					'btn', 
					`btn-${this.type}`
				]
			}
		},
		methods: {
			click () {
				this.$emit('click');
			}
		}
	}
</script>