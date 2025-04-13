const audio = document.getElementById('myAudio');
    const viewBtn = document.getElementById('viewBtn');
    const buttonWall = document.getElementById('buttonWall');

    let hasPlayed = false;

    // Handle RSVP button click
    viewBtn.addEventListener('click', () => {
      buttonWall.classList.add('hidden'); // Fade out wall
      document.body.style.overflow = 'auto'; // Enable scroll

      // Play audio
      audio.play()
        .then(() => console.log('Audio playing'))
        .catch(err => console.warn('Audio play blocked:', err));

      hasPlayed = true;
    });

    // Fallback: autoplay audio on scroll if button wasn't clicked
    window.addEventListener('scroll', () => {
      if (!hasPlayed && audio) {
        audio.play()
          .then(() => console.log('Audio started on scroll'))
          .catch(err => console.warn('Play prevented:', err));
        hasPlayed = true;
      }
    });

    // KEEPING YOUR ORIGINAL VIDEO SCROLL CODE:
 const playbackConst = 500; // Adjust this to control scroll speed
    const setHeight = document.getElementById("set-height");
    const vid = document.getElementById("v0");
  
    // Set the height based on video duration
    function setPageHeight() {
      const duration = Math.floor(vid.duration);
      setHeight.style.height = duration * playbackConst + "px";
    }
  
    // Frame-syncing function
    function scrollPlay() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const frameNumber = scrollTop / playbackConst;
      const clampedTime = Math.min(Math.max(0, frameNumber), vid.duration);
  
      if (Math.abs(vid.currentTime - clampedTime) > 0.01) {
        vid.currentTime = clampedTime;
      }
  
      requestAnimationFrame(scrollPlay);
    }
  
    // Start once the video is ready and fully buffered
    function initWhenVideoIsReady() {
      if (vid.readyState >= 4) { // HAVE_ENOUGH_DATA
        setPageHeight();
        requestAnimationFrame(scrollPlay);
      } else {
        // Wait until it's fully buffered
        vid.addEventListener('canplaythrough', () => {
          setPageHeight();
          requestAnimationFrame(scrollPlay);
        }, { once: true });
      }
    }
  
    // Ensure metadata is loaded first
    if (vid.readyState >= 1) {
      initWhenVideoIsReady();
    } else {
      vid.addEventListener('loadeddata', initWhenVideoIsReady, { once: true });
    }
