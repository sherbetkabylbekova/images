const bigImg = document.querySelector(".big-img")
const smallImg = document.querySelector(".small")
const images = document.querySelectorAll('.small-img')

smallImg.addEventListener('click',(event)=>{
    if(event.target.classList[0] === 'small-img'){
        bigImg.src = event.target.src
        images.forEach(el => el.classList.remove('active'))
        event.target.classList.add('active')
    }
})

