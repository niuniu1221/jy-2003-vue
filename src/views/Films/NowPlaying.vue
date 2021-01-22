<template>
	<div id="contain">
		<van-pull-refresh
  v-model="isLoading2"
  success-text="刷新成功"
  @refresh="onRefresh"
>
		<van-loading size="24px" type="spinner" vertical v-show="isLoading">加载中...</van-loading>
		<van-card
			v-for="item in list"
			:key="item.filmId"
		  @click="gotoDetail(item.filmId)"
		>
		<template #title>
		    <span>{{item.name}}<span class="item">{{item.filmType.name}}</span></span>
		    
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
		    		<div
                                class="nowPlayingFilm-buy"
                                style="float: right;"
                            >
                                购票
                            </div>
		    	</div>
		    	<div>
		    		{{item.nation}} | {{item.runtime}}
		    	</div>
		    </div>
		 </template>
		</van-card>
		
		</van-pull-refresh>
	</div>
</template>

<script>
//导入地址
import uri from '@/config/uri';
import Vue from 'vue';
import { Loading ,Card ,PullRefresh} from 'vant';

Vue.use(Loading);
Vue.use(Card);
Vue.use(PullRefresh);
export default {
	data(){
		return{
			list:[],
			//页码
			pageNum:1,
			isLoading:true,
			isLoading2:true
		}
		
	},
	created(){
		//获取数据
		this.getData();
	},
	filters:{
		//针对主演的数据处理
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
	},
	methods:{
		//获取数据
		getData(cb = null){
			this.$http.get(uri.getNowPlaying+`?pageNum=${this.pageNum}`).then((ret) =>{
				this.pageNum++;
//				this.list = ret.data.films.concat(this.list);
                this.list = [...ret.data.films,...this.list];
				console.log();
				
				if(cb == null){
					this.isLoading = false;
				}else{
					//执行cb
					cb();
				}
			})
		},
		gotoDetail(filmId){
			//编程导航，去详情页面
			this.$router.push('/film/' + filmId)
		},
		onRefresh(){
//			this.getData();
//			this.isLoading2 = false;
			this.getData(
				() =>{
					this.isLoading2 = false;
				}
			);
			
		}
	}
}
</script>

<style>
	#contain{
		/*margin-top: 50px;*/
		margin-bottom: 50px;
	}
	img{
		width: 55px;
	}
	
.item {
    font-size: 9px;
    color: #fff;
    background-color: lightgray;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
}
.nowPlayingFilm-buy {
    line-height: 25px;
    height: 25px;
    width: 50px;
    border: 1px solid;
    color: #ff5f16;
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: relative;
}
</style>