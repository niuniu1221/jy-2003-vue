<template>
	<div id="app">
		<!--<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
		</van-swipe>-->
		<Footer/>
		<router-view/>
	</div>
</template>
<script>
//导入底部导航组件
import Footer from "@/components/Navigation/Footer"
//	import Vue from 'vue';
//	import { Swipe, SwipeItem } from 'vant';
//
//	Vue.use(Swipe);
//	Vue.use(SwipeItem);
	//	import uri from '@/config/uri'
	export default {
		//		 created(){
		//			this.$http.get(uri.getCity);
		//		}
		//     async created() {
		//         let ret = await this.$http.get(uri.getCity);
		//         console.log(ret);
		//     },
		components:{
			Footer
		}
	};
</script>
<style lang="scss">
	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
	}
</style>