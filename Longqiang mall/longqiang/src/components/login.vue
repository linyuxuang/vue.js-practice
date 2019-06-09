<template>
    <div id="login">
        <header>
            <nav>
                <div class="icon-login" @click="backs">
                    <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-fanhui"></use>
                  </svg>
                </div>
                <div class="login-title">蔺氏集团旗下淘宝app登录</div>
            </nav>
         </header>
         <div class="subject">
             <div class="user-input">
                 <input type="text" placeholder="请输入账户名" v-model='username'>
             </div>
             <div class="password-input">
                 <input :type="type" placeholder="请输入密码" v-model='password'>
                 <span class="switch-iocn" @click='switchs()'>
                     <svg class="icon" aria-hidden="true">
                       <use :xlink:href="icon_href"></use>
                    </svg>
                 </span>
             </div>
             <div class="submit">
                 <input type="button" value="登陆" @click="sunmits">
                 <div class="registers">
                     <div class="password">忘记密码</div>
                     <div class="register">注册用户</div>
                 </div>
             </div>
             <div class="login-mode">
                  <div class="login-mode-font">其他登录方式</div>
                  <div class="login-mode-font-img">
                    <div class="qq-login">
                    <img src="../assets/qq.png" alt="QQ登陆" style="width:36px;height:36px">
                    <div class="mode-font-size">QQ</div>
                  </div>
                  <div class="weixin-login">
                   <img src="../assets/weixin.jpg" alt="微信登陆" style="width:36px;height:36px">
                   <div class="mode-font-size">微信</div>
                  </div>
                  </div>
             </div>
             <div class="bottom">登录既代表已同意蔺氏集团<span class="highlight">隐私政策</span></div>
         </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            type:'password',
            icon_href:'#icon-yincang',
            username:"",
            password:''
        }
    },
    methods:{
      switchs(){
          this.icon_href=="#icon-yincang"?this.icon_href='#icon-xianshi':this.icon_href="#icon-yincang";
          this.type=="password"?this.type="text":this.type="password";
      },
      backs(){
          this.$router.go(-1)
      },
      sunmits(){
            let obj={id:Date.now(),username:this.username,password:this.password}
            let arr_localStorage=JSON.parse(localStorage.getItem("name")||'[]');
              arr_localStorage.unshift(obj) 
              localStorage.setItem('name',JSON.stringify(arr_localStorage));
        //    return
           if(this.some_obj()){
             if(this.username!=""&&this.password!=""){
                 this.username=this.password="";
                 this.$router.replace('/index')   
             }else{
            alert("登录失败")
          }
        }else{
          alert("用户名不存在")
       }
      },
      //本地数据库查询客户账户
      some_obj(){
                let arrays=JSON.parse(localStorage.getItem('usrname'));
                return arrays.some((key,index,arr)=>{
                    return key.username==this.username;
        })
      }
    }
}
</script>
<style lang="stylus">
  body,html
   width 100%
  header 
   nav 
    display flex
    height 50px
    align-items center
    font-size 16px
    .icon-login
      flex 1
      text-align center
    .login-title
      flex 3
      font-size 15px
  .subject 
    display flex
    width 100%
    flex-direction column
    justify-content center
    text-align center  
    margin-top 6%   
    .user-input>input
      width 80%
      height 30px
      padding-left 7px
      box-sizing border-box
      border 0
      border-bottom 1px solid gainsboro
    .password-input>input
      width 80%
      height 30px
      padding-left 7px
      box-sizing border-box
      border 0
      border-bottom 1px solid gainsboro
    .password-input>.switch-iocn
      position absolute
      right 14%
      font-size 23px
    .user-input, .password-input
      height 60px 
      position relative
    .submit>input
      width 80%
      height 38px
      background lightcoral
      border 0
      border-radius 17px
      color #fff
      font-size 15px
    .submit>.registers
        display flex
        justify-content space-between
        font-size 14px
        width: 78%
        margin: 7% auto
        color gray
    .login-mode
      margin-top 12%
      .login-mode-font
        font-size 13px
        color gainsboro 
        margin-bottom 29px
    .login-mode-font-img
       display flex
       justify-content: center
       width 100%
       justify-content space-evenly    
    .login-mode-font-img .mode-font-size
       font-size 13px
       color darkgrey   
    .bottom
      font-size 13px
      color gray
      margin-top 27%   
      .highlight
        color red
</style>
