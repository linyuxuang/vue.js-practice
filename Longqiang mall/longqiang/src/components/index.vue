<template> 
    <div class="index">
         <div>
           <div class="titles">蔺氏集团旗下淘宝app</div>
         </div> 
        <div ref="wrapper" class="lisr-wrapper">
         <div>
            <p class="tops">
                {{pulldownMsg}}
                </p>
            <div class="heads">
              <mt-swipe :auto="4000" @change="handleChange">
                <mt-swipe-item><img src="../assets/1.jpg" class="imgs_head"></mt-swipe-item>
                <mt-swipe-item><img src="../assets/2.jpg" class="imgs_head"></mt-swipe-item>
                <mt-swipe-item><img src="../assets/3.jpg" class="imgs_head"></mt-swipe-item>
                <mt-swipe-item><img src="../assets/4.jpg" class="imgs_head"></mt-swipe-item>
             </mt-swipe>
          </div>
          <div class="discount-gif">
              <img src="//m.360buyimg.com/mobilecms/jfs/t1/19787/15/3298/183125/5c25eb21E686a6226/76d05bdf6468b205.gif" alt="">
          </div>
          <div class="discounts">
                <span class="recommend">百姓厨房</span>
                <div class="products">
                    <div class="single_product" v-for="(keys,index) in datas" :key="index">
                        <div class="single-product-img">
                            <img :src="keys.image" style="width:100%;height: 159px;">
                        </div>
                       <div class="single-product-font">
                            <p class="single-product-name">{{keys.name}}</p>
                            <p class="present-price-list">
                                <span class="present-price">现价  ${{keys.price}}</span>
                                 <span class="original-price">原价 <del>${{keys.rating}}</del></span>
                                 </p>
                       </div>

                    </div>
                    <div style="width:100%;height:72px;background:#fff"></div>
    
                </div>
              </div>        
            <div>
               <!-- 底部提示信息 -->
            <div class="bottom-tip">
                <span class="loading-hook">{{pullupMsg}}</span>
            </div>
            </div>
           <div class="haha" :style="{display:shows}">刷新成功</div>
          </div>
         </div>  
        <bottoms></bottoms>
     </div>    
</template>
<script>
    import bottoms from './bottom-nav'
    import { Swipe, SwipeItem} from 'mint-ui';
    import BScroll from 'better-scroll';
    import axios from 'axios';
    export default {
      data(){
        return{
           pulldownMsg: '下拉刷新',
           pullupMsg: '加载更多',
           shows:'none',
           list:[1,2,3,4,5,6,7,8,9],
           options:{
            pullDownRefresh :{
            threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
             stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
         },
         pullUpLoad:{
           threshold: -30 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
         },
         directionX:1
        },
        datas:'',
        }
    },
    components:{
      bottoms
    },
     created(){
       this.$nextTick(() => {
           this.newXiala();
           this.getData()
      })
   },
    methods:{
        getData(){
         axios.get("../../static/data1.json").then( (response)=> {
            console.log(response.data.goods);
            this.datas=response.data.goods[0].foods;
        })
        .catch(function (error) {
            console.log(error);
        });

        },
        newXiala(e){
           if(!this.scroll){
              this.scroll=new BScroll(this.$refs.wrapper,this.options);
             //下拉
              this.scroll.on('pullingDown',()=>{
              this.xiala()
            //  alert("下拉")
        })
        this.scroll.on('pullingUp',()=>{
          //  alert("上拉")
             this.shangla()
        }) 
     
      }else{
          this.scroll.refresh()
      }
       this.scroll.on('scroll',(p)=>{
              if(p.y>60){
                 this.pulldownMsg = '释放立即刷新'
              }
        })
        this.scroll.on('touchEnd',(p)=>{  
          if(p.y>60){
              console.log("下拉")
             setTimeout(()=>{
               this.pulldownMsg = '下拉刷新';
              //刷新列表后，重新计算滚动区域高度
               this.scroll.refresh();
               //刷新成功提示
               this.tishi()
             },1500)
           }else if(p.y<this.scroll.maxScrollY){
               this.pullupMsg="正在拼命加载中...."
                 setTimeout(()=>{
                   this.pullupMsg="加载更多"
                   //刷新列表后，重新计算滚动区域高度
                   this.scroll.refresh();
                   //刷新成功提示
                    this.tishi()
              },1500)
                console.log("上拉:"+p.y) //92
                console.log("maxScrollY:"+this.scroll.maxScrollY)
          }        
         })
       },
      //下拉刷新
      xiala(){
           this.u=1;
            // let arr = [1, 2, 3, 'james'];
            // this.list=this.list.concat(arr);
            this.scroll.finishPullDown();
             this.scroll.refresh()
             console.log(this.list)
      },
     //上拉
     shangla(){
        //    let arr = [2,2, 2, 'haha'];
        //    this.list=this.list.concat(arr);
           this.scroll.finishPullUp();
             this.scroll.refresh()
               console.log(this.list)
     },
     //刷新成功提示
     tishi(){
         this.shows="block";
         setTimeout(()=>{
          this.shows="none";
         },1500)
     },


        handleChange(index){
            console.log(index)
        }
    }
    
}
</script>
<style>
.router-link-active{
    color: #e43130
}
li{
 list-style:none;   
}
.lisr-wrapper{
    background: #fff;
    height: 94vh;
    overflow: hidden;
    position: relative;
    margin-top: 30px;
}
.tops{
    position: absolute;
    top:-50px;
    left: 0;
    z-index: 0;
    text-align: center;
    height: 40px;
    width: 100%;

}
.bottom-tip{
    position: absolute;
    width: 100%;
    text-align: center;
    height: 45px;
    line-height: 45px;
    background: #fff
}
.haha{
     position: absolute;
    width: 100%;
    text-align: center;
    height: 50px;
    background: red;
    line-height: 50px;
    top: 61px;
}
 .heads{
     width: 100%;
     height: 138px;
     background: gray;
 }
 .titles{
     background-color:#e43130;
     color: #fff;
     text-align: center;
     width: 100%;
     height: 30px;
     line-height: 30px;
     font-size: 15px;
     z-index: 1;
     top: 0;
     position: fixed;
     max-width: 600px;
     margin: 0 auto;
 }
 .mint-swipe{
   height: 100%;
 }
 .imgs_head{
     width: 100%;
     height: 100%;
 }
 .discounts img{
     width:100%;
     height: 100%;
 }
 .recommend{
    width: 100%;
    height: 26px;
    line-height: 20px;
    text-align: center;
    display: inline-block;
    padding-top: 10px;
    font-size: 15px;
    color: #e43130;
    font-weight: bolder;
 }
 .products{
   display: flex;
   justify-content: space-between;
   width: 100%;
   height: 100%;
   flex-wrap: wrap;
   font-size: 12px
 }
 .single_product{
    width: 49.8%;
    background: ghostwhite;
    margin-bottom: 4px;
 }
 .single-product-font{
    display: flex;
    flex-direction: column;
 }
 .single-product-name{
     padding-left: 10px;
     box-sizing: border-box;
     margin-bottom: 4px;
 }
 .present-price-list{
     display: flex;
     justify-content: space-between;
     margin-bottom: 4px;
 }
 .present-price{
     padding-left: 10px;
     color: red
 }
 .original-price{
     padding-right: 10px
 }
 .discount-gif{
    width: 100%;
    height: 100%;
    margin-top: 12px;
    margin-bottom: -10px;
 }
 .discount-gif >img{
     width: 100%;
     height: 100%;
 }
 .discounts{
     margin-bottom: -64px;
 }
 
</style>
