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
    var playbackConst = 500, // Adjust scroll speed (lower = faster)
      setHeight = document.getElementById("set-height"), 
      vid = document.getElementById("v0"),
      ticking = false;

  // Set page height based on video duration
  vid.addEventListener("loadedmetadata", function () {
    setHeight.style.height = Math.floor(vid.duration * playbackConst) + "px";
  });

  function updateVideo() {
    ticking = false;

    // Calculate scroll-based time
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var frameNumber = scrollPos / playbackConst;

    // Clamp currentTime between 0 and vid.duration
    var newTime = Math.min(Math.max(0, frameNumber), vid.duration);

    // Only update if significantly different (prevents jitter)
    if (Math.abs(vid.currentTime - newTime) > 0.01) {
      vid.currentTime = newTime;
    }

    window.requestAnimationFrame(updateVideo);
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateVideo);
      ticking = true;
    }
  }

  // Attach scroll listener
  window.addEventListener("scroll", onScroll);
  window.requestAnimationFrame(updateVideo); // Kick off loop
