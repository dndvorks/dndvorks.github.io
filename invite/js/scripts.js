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
    var frameNumber = 0, // start video at frame 0
        playbackConst = 500, // lower = faster playback
        setHeight = document.getElementById("set-height"), 
        vid = document.getElementById('v0'); 

    // dynamically set the page height according to video length
    vid.addEventListener('loadedmetadata', function() {
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    });

    // Use requestAnimationFrame for smooth playback
    function scrollPlay(){  
      var frameNumber = window.pageYOffset / playbackConst;
      vid.currentTime = frameNumber;
      window.requestAnimationFrame(scrollPlay);
    }

    // Ensure the video scroll plays by calling requestAnimationFrame
    window.requestAnimationFrame(scrollPlay);
