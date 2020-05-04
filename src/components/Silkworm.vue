<!--
 * @author: yangwenjie
 * @file: description
 * @Date: 2020-05-04 17:30:22
 * @LastEditors: yangwenjie
 * @LastEditTime: 2020-05-04 19:45:53
 -->
<template>
    <canvas id="canvas" class="page"></canvas>
</template>

<script>
import p1 from '../assets/images/v001_0001.png';
export default {
  name: 'SilkWorm',
  methods: {
    onClick: function() {
    //   this.$router.push('/s')
    }
  },
  mounted: function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var width = window.innerWidth;
    var height = window.innerHeight;
    var imgRatio = 450 / 800;
    var imgW = width;
    var imgH = width / imgRatio;
    canvas.width = width;
    canvas.height = height;

    // ctx.fillStyle = 'red';
    // ctx.fillRect(0, 0, width, height);
    console.log(imgW, imgH)
    var img = new Image();
    img.src = p1;
    img.onload = function() {
        console.log(img)
        ctx.drawImage(img, 0, 0, imgW, imgH);
    };
    
    console.log(ctx);
  }
}
</script>

<style scoped>
canvas {
    width: 100%;
    height: 100%;
}
</style>
