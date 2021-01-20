<template>
	<div>
		<van-tabbar v-model="active" @change="changeTab">
		  <van-tabbar-item>
		  	<van-icon class="iconfont icon-dianying" slot='icon' size="1.1rem"/>
		  	<span>电影</span>
		  	
		  </van-tabbar-item>
		  <van-tabbar-item>
		  	<van-icon class="iconfont icon-yingyuan" slot='icon' size="1.1rem"/>
		  	<span>影院</span>
		  	
		  </van-tabbar-item>
		  <van-tabbar-item>
		  	<van-icon class="iconfont icon-wode" slot='icon' size="1.1rem"/>
		  	<span>我的</span>
		  	
		  </van-tabbar-item>
		  
		</van-tabbar>
	</div>
</template>

<script>
//导入图标css
import '@/assets/icon/iconfont.css'
import Vue from 'vue';
import { Tabbar, TabbarItem,Icon } from 'vant';


Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
    data() {
        return {
            active: 0,
            url: ["/films/nowplaying", "/cinemas", "/center"],
        };
    },
    created() {
        // 根据页面的地址纠正底部索引
//      this.active = this.url.indexOf(this.$route.path);
        console.log(this.active);
        console.log(this.url.indexOf(this.$route.path));
        console.log(this.$route);
        console.log(this.$route.path);
//      if(this.$route.path == '/films/comingsoon'){
//      	this.active = 0;
//      }
        this.active = this.url.indexOf(this.$route.path) >=0 ?this.url.indexOf(this.$route.path) : 0;
    },
    methods: {
        changeTab(index) {
            // 此处的索引与url数据中的地址是一一对应的，所以可以直接使用
            this.$router.push(this.url[index]);
        },
    },
};
</script>

<style>
</style>