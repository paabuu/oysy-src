<!--
 * @author: yangwenjie
 * @file: description
 * @Date: 2020-05-04 17:30:22
 * @LastEditors: yangwenjie
 * @LastEditTime: 2020-05-14 01:32:21
 -->
<template>
    <div class="page page-5">
        <div class="box">
            <div class="icon"></div>
            <p class="text1">想来一剂精神返野剂？</p>
            <p class="text2">fu致这段话￥s0pc1noW8cZ￥打開👉🍑宝👈【PsychoPlacebo】</p>
            <div 
                class="btn" 
                data-clipboard-text="fu致这段话￥s0pc1noW8cZ￥打開👉🍑宝👈【PsychoPlacebo】"
                @click="afterCopy()"
                v-bind:class="{'has-copyed': hasCopyed}"
            >{{!hasCopyed ? "复制链接" : "复制成功，打开【淘宝】"}}</div>
        </div>
    </div>
</template>

<script>
import ClipboardJS from 'clipboard';
export default {
  name: 'EndPage',
  data: function() {
      return {
        hasCopyed: false
      }
  },
  methods: {
      afterCopy: function() {
        this.hasCopyed = true;
      }
  },
  mounted: function() {
      new ClipboardJS('.btn');
  }
}
</script>

<style scoped>
    .page-5 {
        position: fixed;
        top: 0;
        background: #979797;
        display: flex;
        justify-content: center;
        padding-top: 30vw;
        box-sizing: border-box;
    }

    .box {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 80vw;
        height: 100vw;
        background: #FFFFFF;
        box-shadow: 0 44px 103px -2px rgba(0,0,0,0.50);
        border-radius: 14px;
        padding: 20px 0 20px;
    }

    .icon {
        width: 80px;
        height: 80px;
        background: url(../assets/e.png) center/contain no-repeat;
        background-color: #2C3A9F;
        background-size: 40px 40px;
        border-radius: 50%;
    }

    .text1 {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin-top: -20px;
        font-weight: bold;
    }

    .text2 {
        width: 80%;
        background: #EEEEEE;
        border-radius: 13px;
        border-radius: 13px;
        padding: 40px 20px;
        box-sizing: border-box;
        color: #A2A2A2;
        margin-top: -20px;
    }

    .btn {
        width: 200px;
        height: 50px;
        background: #FFFFFF;
        box-shadow: 0 17px 28px 0 rgba(124,124,124,0.50);
        border-radius: 42px;
        line-height: 50px;
        text-align: center;
        font-family: SourceHanSansCN-Bold;
        font-size: 14px;
        color: #525252;
        font-weight: bold;
        letter-spacing: 2px;
        margin-top: 10px;
    }

    .has-copyed {
        color: #fff;
        background: #2C3A9F;
    }
</style>
