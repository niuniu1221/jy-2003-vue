<template>
	<div>
		电影模块下的正在热映
		<van-loading size="24px" type="spinner" vertical v-show="isLoading">加载中...</van-loading>
		<van-card
			v-for="item in list"
			:key="item.filmId"
		  price="2.00"
		  desc="描述信息"
		>
		<template #title>
		    <span>{{item.name}}</span>
		    
		 </template>
		 <template #thumb>
		<img :src="item.poster"/>
		    
		 </template>
		 <template #desc>
		
		    <div>
		    	<div>
		    		观众评分
		    		<span>{{item.grade}}</span>
		    	</div>
		    	<div>
		    		主演：{{item.actors |parserActors }}
		    	</div>
		    </div>
		 </template>
		</van-card>
		
		
	</div>
</template>

<script>
//导入地址
import uri from '@/config/uri';
import Vue from 'vue';
import { Loading ,Card  } from 'vant';

Vue.use(Loading);
Vue.use(Card);
export default {
	data(){
		return{
			list:[],
			//页码
			pageNum:1,
			isLoading:true
		}
		
	},
	created(){
		this.$http.get(uri.getNowPlaying).then((ret) =>{
			this.list = ret.data.films;
			console.log();
			this.isLoading = false;
		})
	},
	filters:{
		parserActors(actors){
			//判断是否有主演
			if(actors){
				let str = "";
				actors.forEach((el)=>{
					str +=el.name + " ";
				})
				return str.substr(0,15) + '...';
			}else{
				return '暂无主演'
			}
		}
	}
}
</script>

<style>
	img{
		width: 55px;
	}
</style>