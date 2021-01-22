import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

//导入路由模块
import filmRouter from './routes/films'
import cinemaRouter from './routes/cinemas'
import centerRouter from './routes/center'

const routes = [
//展开电影模块的其他所以的路由
...filmRouter,
cinemaRouter,
centerRouter,
{
	path:'/',redirect:'/films'
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
