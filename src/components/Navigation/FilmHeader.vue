<template>
	<div>
		<van-tabs @click="changeTab" v-model="active">
		    <van-tab title="正在热映"></van-tab>
		    <van-tab title="即将上映"></van-tab>
		</van-tabs>
	</div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
export default{
	data(){
		return{
			active:1,
			url:['/films/nowplaying','/films/comingsoon']
		}
	},
	created(){
		//刷新的时候纠正索引
		this.active = this.url.indexOf(this.$route.path)
	},
	methods:{
		changeTab(index){
			console.log(index);
			this.$router.push(this.url[index]);
		}
	}
}
</script>

<style>
</style>