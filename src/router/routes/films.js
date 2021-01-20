import Films from '@/views/Films/Films'
import ComingSoon from '@/views/Films/ComingSoon'
import NowPlaying from '@/views/Films/NowPlaying'
var filmRouter = {
	path:'/films',
	component:Films,
	redirect:'/films/nowplaying',
	children:[
	{path:'nowplaying',component:NowPlaying},
	{path:'comingsoon',component:ComingSoon }
	]
}
//导出
export default filmRouter;