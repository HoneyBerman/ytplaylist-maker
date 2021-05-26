function resizeiFrame(wrapperId, videoProportion) {

  // check if wrapper video exists
  var wrapper = document.getElementById(wrapperId);
  if (wrapper != null && wrapper != undefined) {
    
    // videoProportion format must be: 16:9; 4:3, etc.
    var str = videoProportion.split(":");
        videoProportion = str[0]/str[1];
    
    // get video
    var video = wrapper.children[0],
        videoWidth = wrapper.offsetWidth,
        videoHeight = Math.round(videoWidth/videoProportion);
    
    // apply dimensions
    if (video != null && video != undefined) {
        video.style.width = videoWidth + 'px';
        video.style.height = videoHeight + 'px';
    } else {
      console.warn('iFrame is missing');
    }
    
  } else {
    console.warn('Wrapper is missing');
  }
 
}

// on ready
var pageReady = setInterval(() => {
  if(document.readyState === 'interactive') {
    clearInterval(pageReady);
    resizeiFrame('wr-iframe', '16:9');
  }
},1);

// on resize
  window.addEventListener('resize', function(){
    resizeiFrame('wr-iframe', '16:9');
  }, true);