<template>
	<div>
		<FilmHeder/>
		<router-view></router-view>
	</div>
</template>

<script>
//导入头组件
import FilmHeder from '@/components/Navigation/FilmHeader'
export default{
	components:{
		FilmHeder
	}
}
</script>

<style>
</style>