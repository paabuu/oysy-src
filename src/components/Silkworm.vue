<!--
 * @author: yangwenjie
 * @file: description
 * @Date: 2020-05-04 17:30:22
 * @LastEditors: yangwenjie
 * @LastEditTime: 2020-05-04 23:04:32
 -->
<template>
<div class="page-3">
    <div class="progress"  v-if="showProgress">
        <p id="progress">0%</p>
        <p>正在加载中，请稍后...</p>
    </div>
    <canvas id="canvas"></canvas>
</div>
</template>

<script>
// import p1 from '../assets/images/v001_0001.png';
export default {
  name: 'SilkWorm',
  data() {
      return {
        showProgress: true
      }
  },
  methods: {
    onClick: function() {
    //   this.$router.push('/s')
    }
  },
  mounted: function() {
    const progressEle = document.getElementById('progress');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const width = window.innerWidth;
    // const height = window.innerHeight;
    const imgRatio = 450 / 800;
    const imgW = width;
    const imgH = width / imgRatio;

    canvas.width = imgW;
    canvas.height = imgH;

    // ctx.fillStyle = 'red';
    // ctx.fillRect(0, 0, width, height);
    console.log(imgW, imgH)
    let images = [];
    let completedImageCount = 0;
    let curImage = 0;
    const STEP = 2;
    let timer;
    for (let i = 0; i < 180; i += STEP) {
        var index = i;
        if (i < 100) {
          index = `0${i}`;
        }

        if (i < 10) {
          index = `00${i}`;
        }

        const url = `https://paabuu.github.io/oysy/360/v001_0${index}.png`;
        var img = new Image();
        img.src = url;
        img.crossOrigin = "Anonymous";
        img.onload = () => {
            completedImageCount++;
            ctx.clearRect(0, 0, imgW, imgH);
            progressEle.innerHTML = (`${Math.floor(completedImageCount / 180 * STEP * 100)}%`);
            if (completedImageCount >= 180 / STEP) {
                this.showProgress = false;
                timer = setInterval(() => {
                    curImage++;
                    if (curImage >= 180 / STEP) curImage = 0;
                    ctx.clearRect(0, 0, imgW, imgH);
                    ctx.drawImage(images[curImage], 0, 0, imgW, imgH);
                }, 100);
            }
        };
        images.push(img);
    }

    let startX = 0;

    canvas.addEventListener('touchstart', e => {
        if (this.showProgress) return;
        clearInterval(timer);
        const touch = e.touches[0];
        const clientX = touch.clientX;
        const clientY = touch.clientY;
        const data = ctx.getImageData(clientX, clientY, 1, 1).data;
        if (data[0] > 200 || data[1] > 200 || data[2] > 200) {
            this.$router.push('/v');
        }

        startX = touch.clientX;
    });
    
    canvas.addEventListener('touchmove', e => {
        if (this.showProgress) return;
        const touch = e.touches[0];

        const clientX = touch.clientX;
        const deltaX = startX - clientX;
        const maxIndex = 180 / STEP - 1;

        if (deltaX > 10) {
            curImage += 1;
            startX = clientX;
        }

        if (deltaX < -10) {
            curImage -= 1;
            startX = clientX;
        }

        if (curImage >= maxIndex) {
            curImage = 0;
        } else if (curImage <= 0) {
            curImage = maxIndex;
        }

        ctx.clearRect(0, 0, imgW, imgH);
        ctx.drawImage(images[curImage], 0, 0, imgW, imgH);
    })
  }
}
</script>

<style scoped>

html, 
body, 
.page-3 {
    width: 100vw;
    height: 100vh;
    background-image: radial-gradient(circle, rgba(0,0,0,0.84) 0%, #FFFFFF 300%);
}
canvas {
    background-image: radial-gradient(circle, rgba(0,0,0,0.84) 0%, #FFFFFF 300%);
}

.progress {
    position: fixed;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #ccc;
    font-size: 14px;
}
</style>
