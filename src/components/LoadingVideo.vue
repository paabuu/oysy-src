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
            src="http://lxy-asset.meizitoday.com/video/loading.mp4" 
            width="100%" height="100%" 
            autoplay="true"
            muted="muted"
        >
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
        <video 
            id ="video1" 
            src="http://lxy-asset.meizitoday.com/video/1.mp4" 
            width="100%" height="100%" 
            muted="muted"
            preload="false"
        >
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
        <video 
            id ="video2" 
            src="http://lxy-asset.meizitoday.com/video/2.mp4" 
            width="100%" height="100%" 
            muted="muted"
            preload="false"
        >
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
        <video 
            id ="video3" 
            src="http://lxy-asset.meizitoday.com/video/3.mp4" 
            width="100%" height="100%" 
            muted="muted"
            preload="false"
        >
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
        <video 
            id ="video4" 
            src="http://lxy-asset.meizitoday.com/video/4.mp4" 
            width="100%" height="100%" 
            muted="muted"
            preload="false"
        >
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
        <video 
            id ="video5" 
            src="http://lxy-asset.meizitoday.com/video/5.mp4" 
            width="100%" height="100%" 
            muted="muted"
            preload="false"
        >
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
        <video 
            id ="video6" 
            src="http://lxy-asset.meizitoday.com/video/6.mp4" 
            width="100%" height="100%" 
            muted="muted"
            preload="false"
        >
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
        <video 
            id ="video7" 
            src="http://lxy-asset.meizitoday.com/video/7.mp4" 
            width="100%" height="100%" 
            muted="muted"
            preload="false"
        >
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
        <video 
            id ="video8" 
            src="http://lxy-asset.meizitoday.com/video/8.mp4" 
            width="100%" height="100%" 
            muted="muted"
            preload="false"
        >
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
        <video 
            id ="video9" 
            src="http://lxy-asset.meizitoday.com/video/9.mp4" 
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

      const index = Math.ceil(Math.random() * 9);
    loadingVideo.addEventListener('ended', () => {
        const video = document.getElementById(`video${index}`);
        video.style.display = 'block';
        video.addEventListener('ended', () => {
            this.$router.push('/e');
        });
        loadingVideo.style.display = 'none';
        video.play();
        setTimeout(() => {
            video.muted = false;
        }, 3000);
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

video:not(:nth-of-type(1)) {
    display: none;
}


</style>
