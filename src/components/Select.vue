<!--
 * @author: yangwenjie
 * @file: description
 * @Date: 2020-05-04 18:59:10
 * @LastEditors: yangwenjie
 * @LastEditTime: 2020-05-04 19:22:20
 -->
<template>
    <div class="page page-2">
        <div class="select-zh"></div>
        <div class="select-en"></div>
    </div>
</template>

<script>

export default {
  name: 'StartHole',
  created: function() {
    setTimeout(() => {
      this.$router.push('/c')
    }, 4000);
  }
}
</script>

<style scoped>

@keyframes hide {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
.page-2 {
    position: relative;
    background-image: radial-gradient(circle, #FFFFFF 0%, #000000 300%);
}

.select-zh {
    position: absolute;
    top: 45%;
    left: 50%;

    width: 372px;
    height: 53px;
    transform: translate(-50%, -50%) scale(.35);
    background: url('../assets/s_hole.png') center/contain no-repeat;
    animation: hide 1s 3s ease-out 1 forwards;
}

.select-en {
    position: absolute;
    top: 45%;
    left: 50%;

    width: 323px;
    height: 35px;
    margin-top: 12px;
    margin-left: -16px;
    transform: translateX(-50%) scale(.3);
    background: url('../assets/s_hole_en.png') center/contain no-repeat;
    animation: hide 1s 3s ease-out 1 forwards;
}
</style>
