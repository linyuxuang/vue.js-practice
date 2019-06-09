<template>
   <div class="bottom-nav">
        <ul>
         <li  >
           <router-link to="/index" class="router_tos">
                  <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-shouye"></use>
                </svg>
                <span class="Icon-font">
                    首页    
                </span>                  
          </router-link>     
         </li>
         <li>
           <router-link to="/find" class="router_tos">
                <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-fenlei"></use>
                </svg>
                <span class="Icon-font">
                    分类   
                </span>  
          </router-link>     
         </li>
         <li>
           <router-link to="/ShoppingCart" class="router_tos">
                <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-Group-"></use>
                </svg>
                <span class="Icon-font">
                    拼购   
                </span>  
          </router-link>     
         </li>
         <li>
           <router-link to="/My" class="router_tos">
                <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-denglu"></use>
                </svg>
                <span class="Icon-font">
                    我的   
                </span>  
          </router-link>     
         </li>
       </ul>  
         <router-view/>  
     </div>    
</template>
<script>

export default {
    data(){
        return{

        }
    },
    props:['msg'],
    created(){
       // this.shows(1)
    },
    methods:{
        shows(n){
         
        }
    }
}
</script>
<style>
.bottom-nav ul{
     display: flex;
 }
 .bottom-nav ul li{
     flex: 1;
     text-align: center; 
     list-style: none;
     font-size: 25px;

 }
 .bottom-nav ul li img{
    width: 67px;
    height: 53px;
 }
  .bottom-nav{
     position: fixed;
     bottom: 0;
     width: 100%;
     height: 50px;
     line-height: 50px;
     box-sizing: border-box;
     background-color: #fff;
     box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
     font-size: 16px;
     max-width: 600px;
     margin: 0 auto;
     
 }
 /* .router-link-active{
     background: green
 } */

@font-face {
  font-family: 'iconfont';  /* project id 992695 */
  src: url('//at.alicdn.com/t/font_992695_ideujlzxn1.eot');
  src: url('//at.alicdn.com/t/font_992695_ideujlzxn1.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_992695_ideujlzxn1.woff') format('woff'),
  url('//at.alicdn.com/t/font_992695_ideujlzxn1.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_992695_ideujlzxn1.svg#iconfont') format('svg');
}

.icon {
    box-sizing: border-box;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    /* margin-top: -60px; */
    padding-bottom: 3px;
    font-size: 29px;
    margin: 0 auto;
    margin-top: 3px;
}
.router_tos{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
}

.Icon-font{
    height: 11px;
    line-height: 11px;
    font-size: 13px;
}
</style>
