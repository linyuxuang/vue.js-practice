<template>
  <div>
   <mt-popup
      v-model="popupVisible"
      position="bottom"
      popup-transition="popup-fade">
      {{slots}}
   </mt-popup>


   <input type="button" value="提交" @click="handleClick" >
    <bottoms></bottoms>
  </div>
</template>
<script>
  import Vue from 'vue'
  import bottoms from './bottom-nav'
  import { Popup} from 'mint-ui';
  Vue.component(Popup.name, Popup);
 
 export default {
   data () {
    return {
      popupVisible:false,
      slots:'加载成功'
    }
  },
   components:{
      bottoms
    },
  methods: {
    handleClick: function() {
        this.popupVisible = true
        }
    }
}

</script>
<style>
.router-link-active{
    color: #e43130
}
</style>



