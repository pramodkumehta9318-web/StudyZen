window.onload = () => {
    const bar = document.getElementById("loadingBar");
  
    // start loading
    setTimeout(() => {
      bar.style.width = "100%";
    }, 100);
  
    // open app after 3 seconds
    setTimeout(() => {
      window.location.href = "loaded.html"; 
      // yahan apna main app page ka naam likho
    }, 3000);
  };
  