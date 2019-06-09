<template> 
    <div class="find">
        <!-- 头部 -->
       <header>
           <nav>
               <div class="returns" @click="backs">
                   <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-fanhui"></use>
                  </svg>
               </div>
               <div class="search-box">
                   <div>
                     <div class="icon-div">   
                      <svg class="icon" aria-hidden="true">
                         <use xlink:href="#icon-sousuo"></use>
                      </svg>
                      </div>
                      <div class="input-input">
                      <input type="text" placeholder="好用商品5折起疯狂秒杀">
                      </div>
                   </div>
               </div>
               <div class="mores">
                   <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-gengduo-copy"></use>
                  </svg>
               </div>
           </nav>
       </header> 
        <!-- 主体内容   -->
         <div class="warapper">
            <div class="left" ref="left">
            <Ul>
                <li v-for=" (keys,index) in left_data" :class="{'current':curretInex === index}"  @click="selectMenu(index,$event)" :key="index">{{keys.name}}</li>
            </Ul>
            </div>
            <div class="rigth" ref="rigth_dom">
            <ul>
                <li v-for=" (keys,index) in rigth_data" class="food-list-hook" :key="index">
                   <h4>{{keys.name}}</h4> 
                    <div class="product-item">
                        <div class="commodity-contents" v-for="(val,index) in keys.foods" :key="index">
                          <img :src="val.image" class="product_img">
                          <div class="product-introduce">{{val.name}}</div>
                        </div>
                    </div>
                </li>
            </ul>
            </div>   
                     
       </div>
<!-- 底部导航 -->
       <bottoms></bottoms>
     </div>    
</template>

<script>
    import bottoms from './bottom-nav';
    import axios from 'axios';
    import BScroll from 'better-scroll';
    export default {
        data(){
           return{
             left_data:'',
             rigth_data:'',
             rigthHigth_data:[],
             scrollY:0,
             left_scrollY:0,
           }
        },
    components:{
      bottoms
    },
    created(){
        this.getData();
    },
    mounted(){
        this.$nextTick(()=>{
        this.left_scroll_fun();
        this.rigth_scroll_fun();
        })
      setTimeout(()=>{
       this.rigthHigth();
      },640)
     },
    computed:{
      curretInex() {
        for(let i=0;i< this.rigthHigth_data.length;i++) {
          let height1 = this.rigthHigth_data[i];
            console.log(height1)
          let height2 = this.rigthHigth_data[i+1];
           console.log(height2)
          if(!height2 || (this.scrollY>=height1&&this.scrollY<height2)){
              return i
           }
         }
        return 0;
      }
    },
    methods:{
      getData(){
         axios.get("../../static/data1.json").then( (response)=> {
             this.left_data=response.data.goods;
             this.rigth_data=response.data.goods;
         })
        .catch(function (error) {
            console.log(error);
        });
        },
        backs(){
          this.$router.go(-1)
        },
       selectMenu(index,event){
           if (!event._constructed) {
          // 去掉自带click事件的点击
          return;
        }
         let foodlist=this.$refs.rigth_dom.getElementsByClassName('food-list-hook')
         let element=foodlist[index];
         this.scroll_rigth.scrollToElement(element,250)
       },
      rigthHigth(){
         let foodlist=this.$refs.rigth_dom.getElementsByClassName('food-list-hook')
         let height=0;
         this.rigthHigth_data.push(height);
         for(var i=0;i<foodlist.length;i++){
            let item=foodlist[i]
            height+=item.clientHeight;
            this.rigthHigth_data.push(height);
         }
       },
      left_scroll_fun(){
          this.left_scroll=new BScroll(this.$refs.left,{
            //    probeType:3,
               click: true,
          })  
      },
      rigth_scroll_fun(){
         this.scroll_rigth=new BScroll(this.$refs.rigth_dom,{
            probeType:3,
            click: true,
         })
         this.scroll_rigth.on("scroll",(pos)=>{
             this.scrollY=Math.abs(Math.round(pos.y))
          })
      }
 
    }
}
</script>
<style>
.router-link-active{
    color: #e43130
}
header{
    position: fixed;
    width: 100%;
    top: 0;
    max-width: 600px;
    margin: 0 auto;
    border-bottom: solid 1px #D7D2D2;
    z-index: 1;
    background-color:#fff
}
header>nav{
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
}
.returns.mores{
    flex: 1
}
.search-box{
    display: flex;
    flex: 4;
    align-items: center;
    border-radius: 15px;
    background: #f7f7f7;
}
.search-box>div{
    display: flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
}
.search-box>div.icon-div{
    flex: 0 1 17%;
    padding-left: 10px;
    box-sizing: border-box
}
.search-box>div>.input-input>input{
    border: none;
    background: #f7f7f7;
    height: 25px;
    font-size: 12px;
}
.warapper{
    display: flex;
    position: absolute;
    bottom: 56px;
    top: 50px;
}
.left>ul{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: stretch;
}
.left>ul>li{
    list-style: none;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    overflow: hidden;
    padding: 0 1px;
    box-sizing: border-box;
}
.rigth>ul>li{
    list-style: none;
    font-size: 12px;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 10px;
    width: 100%;
}
.left{
    /* height: 100vh; */
    overflow: hidden;
    flex: 3;
    background: #f8f8f8;
    text-align: center
}
.rigth{
    /* height: 100vh; */
    overflow: hidden;
    flex: 7;
    background-color: #fFF;
}
.current{
  background:#fff;
  font-weight:bold;
  margin-top:-1px;
  color: #e43130;
}
.product-item{
   display:flex;
   flex-wrap: wrap;
   width: 100%;
}
.food-list-hook>h4{
    box-sizing: border-box;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 10px;
    padding-left: 9px;
}
.product-item>.commodity-contents{
   width: 48%;
   padding-left: 1.2%;
   padding-bottom: 2%;
}

.product-item>.commodity-contents>.product_img{
    width: 100%;
    height: 82%;
} 
.product-introduce{
    text-align: center;
    font-size: 10px
}
</style>
