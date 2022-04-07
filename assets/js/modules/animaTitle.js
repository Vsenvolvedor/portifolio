export default function animaTitle()
{
    const 
        anima = document.querySelectorAll('[data-anima="title"]'),
        mainAnima = document.querySelector('main'),
        title = document.querySelector('h1'),
        title2 = title.innerHTML.split('<'),
        letters = title2[0].split(''),
        subtitle = document.querySelector('#home h3'),
        subletters = subtitle.innerHTML.split('')
        
    title.innerHTML=""
    title.innerHTML += title2[1].replace('img src="assets/images/destaque.svg" alt="decoração do titulo">','<img src="assets/images/destaque.svg" alt="decoração do titulo">')
    subtitle.innerHTML = ""
    mainAnima.classList.add('active')
    
    letters.forEach((letter,index)=>{
        setTimeout(()=>{
            title.innerHTML += letter
        }, index * 150)
    })

    subletters.forEach((sub,index)=>{
        setTimeout(()=>{
            subtitle.innerHTML += sub
        }, index * 120)
    })

    setTimeout(()=>{
        title.classList.add('active')
    },2000)
    setTimeout(()=>{
        subtitle.classList.add('active')
    },3000)

    anima.forEach((item) => {
        const time = item.dataset.time
        setInterval(()=> setTimeout(()=>item.classList.add('active'),time),3800)
    })
}