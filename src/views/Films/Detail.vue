<template>
	<div>
		电影详情页面
	</div>
</template>

<script>
	export default{
		created(){
			//通过app.vue隐藏底部导航(发送数据)
			this.$eventBus.$emit('hide_footer',false);
		},
		beforeDestroy(){
			//通过app.vue隐藏底部导航(发送数据)
			this.$eventBus.$emit('hide_footer',true);
		}
	}
</script>

<style>
</style>