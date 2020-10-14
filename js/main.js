const timeline = gsap.timeline({
    duration: 1,
    paused: true
});

timeline.from('body', {
    backgroundColor: "#fff",
    duration: 1.7,
    ease: 'none'
    })
    .fromTo(['h1', '.intro'], 
    {
        opacity: 0,
        y: -20
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power1.out',
        stagger: 0.2
    }
    )
    .fromTo(['img', 'h2', 'ul'], 
    {
        opacity: 0,
        y: -50
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power1.out',
        stagger: 0.4
    }
    );

const playButton = document.querySelector('#btnPlay');
const reverseButton = document.querySelector('#btnReverse');

playButton.addEventListener('click', () => {
    timeline.play()
});

reverseButton.addEventListener('click', () => {
    timeline.reverse()
});