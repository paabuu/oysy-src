<!--
 * @author: yangwenjie
 * @file: description
 * @Date: 2020-05-04 17:30:22
 * @LastEditors: yangwenjie
 * @LastEditTime: 2020-05-04 19:14:06
 -->
<template>
    <div class="page page-1" @click="onClick()">
        <div class="title"></div>
        <div class="copy-right"></div>
    </div>
</template>

<script>

export default {
  name: 'StartPage',
  methods: {
    onClick: function() {
      this.$router.push('/s')
    }
  }
}
</script>

<style scoped>

@keyframes show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.page-1 {
    position: relative;
    background-image: radial-gradient(circle, #FFFFFF 0%, #000000 300%);
}

.title {
    position: absolute;
    top: 45%;
    left: 50%;

    width: 494px;
    height: 74px;
    transform: translate(-50%, -50%) scale(.33);
    opacity: 0;
    background: url('../assets/s_t.png') center/contain no-repeat;
    animation: show 5s ease-out 1 forwards;
}

.copy-right {
    position: fixed;
    bottom: 2%;
    left: 50%;
    width: 332px;
    height: 26px;
    opacity: 0;
    transform: translateX(-50%) scale(.33);
    background: url('../assets/s_b.png') center/contain no-repeat;
    animation: show 5s ease-out 1 forwards;
}
</style>
