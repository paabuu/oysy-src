<!--
 * @author: yangwenjie
 * @file: description
 * @Date: 2020-05-04 17:30:22
 * @LastEditors: yangwenjie
 * @LastEditTime: 2020-05-14 01:45:36
 -->
<template>
    <div>
        <video 
            id ="loading" 
            src="https://paabuu.github.io/lxy/video.mp4" 
            width="100%" height="100%" 
            autoplay="true"
            muted="muted"
        >
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
        <video 
            id ="video1" 
            src="https://paabuu.github.io/lxy/v1.mp4" 
            width="100%" height="100%" 
            muted="muted"
            preload="false"
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
      loadingVideo.play();

    //   const index = Math.ceil(Math.random() * 5);
    const index = 1;
    loadingVideo.addEventListener('ended', () => {
        const video = document.getElementById(`video${index}`);
        video.addEventListener('ended', () => {
            this.$router.push('/e');
        });
        loadingVideo.style.display = 'none';
        video.play();
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

#loading::-webkit-media-controls {
  display:none !important;
}

#loading {
    z-index: 10;
}


</style>
