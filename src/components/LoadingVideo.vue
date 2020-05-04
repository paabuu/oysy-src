<!--
 * @author: yangwenjie
 * @file: description
 * @Date: 2020-05-04 17:30:22
 * @LastEditors: yangwenjie
 * @LastEditTime: 2020-05-04 22:48:59
 -->
<template>
    <div>
        <video 
            id ="loading" 
            src="https://paabuu.github.io/oysy/video.mp4" 
            width="100%" height="100%" 
            autoplay="true"
            muted="muted"
        >
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
        <video 
            id ="video1" 
            src="https://paabuu.github.io/oysy/video.mp4" 
            width="100%" height="100%" 
            muted="muted"
        >
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
    </div>
</template>

<script>

export default {
  name: 'LoadingVideo',
  methods: {
    onClick: function() {
    }
  },
  mounted() {
      const loadingVideo = document.getElementById('loading');
      const video1 = document.getElementById('video1');
      loadingVideo.play();

      loadingVideo.addEventListener('ended', () => {
          loadingVideo.style.display = 'none';
          video1.play();
      });
  }
}
</script>

<style scoped>
video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit:fill
}

#loading {
    z-index: 10;
}


</style>
