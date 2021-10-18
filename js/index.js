window.addEventListener('scroll', function(){
    const currentScroll = window.scrollY;
    if (Math.ceil(currentScroll) >= 320 && Math.ceil(currentScroll) < 600){
        const img = this.document.getElementById('img1')
        const p1 = this.document.getElementById('p1')
        img.style.transitionDuration = '0.5s'
        p1.style.transitionDuration = '1s'
        img.style.width = '40%'
        p1.style.color = 'black'
    }
});