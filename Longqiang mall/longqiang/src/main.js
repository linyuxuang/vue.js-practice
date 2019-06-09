// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.config.productionTip = false;
// let name=JSON.parse(localStorage.getItem('name'))[0].username; //查询登录时输入的用户名
// let name2=JSON.parse(localStorage.getItem('usrname'))        //获取数据库里面的用户名
// console.log(name)
// console.log(name2)
//  let some_s=name2.some(function(key,index,arr){
//     return key.username==name
//  })

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    let name=JSON.parse(localStorage.getItem('name'))[0].username; //查询登录时输入的用户名
    let name2=JSON.parse(localStorage.getItem('usrname'))        //获取数据库里面的用户名
    //console.log(name)
    //console.log(name2)
    let some_s=name2.some(function(key,index,arr){
      console.log(index)
        console.log(arr)
        return key.username==name
    })
    console.log(some_s)
    if(some_s){
      next()
    }else{
     next({
      path: '/My',
      query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
     })  
    }
   }else{
    next()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
