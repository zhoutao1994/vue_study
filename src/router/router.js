/**
 *  路由文件
 *  引入[Vue, VueRouter]模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Area from '../components/Area'
import Foo from '../components/Foo'
import Bar from '../components/Bar'

/**
 *  加载模块
 */
Vue.use(VueRouter)

/**
 *  配置路由
 */

const router = new VueRouter({
  routes: [
    {   //地区
      path: '/area',
      name: 'area',
      title: 'area',
      component: Area
    },
    {   //地区
      path: '/foo',
      name: 'foo',
      title: 'foo',
      component: Foo
    },
    {   //地区
      path: '/bar',
      name: 'bar',
      title: 'bar',
      component: Bar
    },
    // {   //个人中心页面
    //   path:'/userInfo',
    //   name:'userInfo',
    //   title:'userInfo',
    //   component:function (resolve) {
    //     require(['../components/userInfo/userInfo.vue'], resolve)
    //   }
    // }
  ]
})

export default router