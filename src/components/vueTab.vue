<template>
	<div class="tab-container">
		<ul class="nav nav-tabs" role="tablist">
	        <template v-for="(item, index) in menulist" >
	        	<li role="presentation" :class="index==0 ? 'active' : ''">
	        		<a :href="'#'+item.name" @click.stop="showCurrentPenal($event)">{{item.label}}</a>
	        	</li>	
	        </template>	       
	    </ul>
	    <div class="tab-content">
	        <template v-for="(item, index) in menulist">
	        	<div :id="item.name" class="tab-pane fade" :class="index==0 ? 'active in' : ''">
	        		<slot :name="item.name">
	        			<ul>	 
			        		<template v-for="data in datalist" v-if="data.type===item.type">
			        			<li>
			        				<a href="#" @click.stop="goMsgeDetail(data.id,$event)">{{data.content}}</a>
			        			</li>
			        		</template>
		        		</ul>
	        		</slot>
	        	</div>
	        </template>
	    </div>
	</div>
</template>
<script>
	import { getSiblings } from 'UTIL/util'
	export default {
		props: {
			menulist: {
				type: Array,
				default () {
					return [{
						name: 'order',
						label: '运单',
						type: 1 
					},{
						name: 'cars',
						label: '车辆',
						type: 2
					},{
						name: 'finance',
						label: '财务',
						type: 3
					}]
				}
			},
			datalist: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data () {
			return {}
		},
		methods: {
			showCurrentPenal (event) {
				event.preventDefault();
				let target = event.target;
				let penal_id = target.hash.replace('#','');
				
				this.setTabActive(target);
				this.setPenalActive(penal_id);
				this.$emit('change', penal_id);
			},
			setTabActive (el) {
				let other_els = getSiblings(el.parentNode);

				el.parentNode.className = 'active';
				for (let i in other_els) {
					other_els[i].className = '';
				}
			},
			setPenalActive (id) {
				let penal = document.getElementById(id);
				let other_penals = getSiblings(penal);

				penal.className = 'tab-pane fade in active';
				for (let i in other_penals) {
					other_penals[i].className = 'tab-pane fade';
				}
			},
			goMsgeDetail (id, event) {
				event.preventDefault();
			}
		}
	}
</script>
<style scoped lang="sass">
	.tab-container{
		.nav{
			a{
				font-size: 14px;
				color: #555;
			}
		}
		.tab-content{
			a{
				font-size: 12px;
				line-height: 24px;
				color: #555;
				&:hover{
					color: #5a9ed6;
				}
			}
		}
	}
</style>