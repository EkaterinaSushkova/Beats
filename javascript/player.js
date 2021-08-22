let player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('yt-player', {
          height: '405',
          width: '660',
          videoId: '1_f3RcyYdfA',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }