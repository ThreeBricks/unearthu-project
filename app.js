let vid = document.querySelector('video');

vid.addEventListener('click', ()=>{
    vid.paused ? vid.play() : vid.pause();
    console.log("clicked");
});