import List from '@/components/list'
import ArticalDetail from '@/components/articalDetail'
// import Login from '@/components/login'
import AddBlog from '@/components/addBlog'
import Manage from '@/components/manage'
const router = [
    // {
    //     path:'/',
    //     componentName: Login,
    //     exact:true
    // },
    {
        path: '/list/',//首页默认加载的页面
        componentName: List,
        exact: true//是否为严格模式
    },
    {
        path:'/articalDetail/',
        componentName: ArticalDetail,
        exact:true
    },
    {
        path:'/addBlog',
        componentName: AddBlog,
    },
    {
        path:'/manage',
        componentName: Manage
    }
]
export default router