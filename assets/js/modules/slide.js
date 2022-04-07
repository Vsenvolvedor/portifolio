export default function slide()
{
    const 
        slide = document.querySelectorAll('[data-disptype]'),
        btnSlide = document.querySelector('[data-btn="slide"]'),
        arrowLeft = document.querySelector('.arrow-left'),
        arrowRight = document.querySelector('.arrow-right'),
        act = 'active'

    btnSlide.addEventListener('click',addSlide)
    arrowRight.addEventListener('click',moveRight)
    arrowLeft.addEventListener('click',moveLeft)

    slide[0].classList.add(act)
    arrowLeft.classList.add(act)
    arrowRight.classList.add(act)

    slide.forEach((item)=>{
        item.dataset.disptype = "slide"
    })
    function addSlide()
    {
        slide.forEach(item=>item.classList.remove(act))
        slide[0].classList.add(act)
        arrowLeft.classList.add(act)
        arrowRight.classList.add(act)

        slide.forEach((item)=>{
            item.dataset.disptype = "slide"
        })
    }

    function moveRight()
    {
        Array.from(slide).every(verify)
        function verify(item,index)
        {
            if(item.classList.contains(act) && !!item.nextElementSibling)
            {
                slide[index].nextElementSibling.dataset.anima = 'left'
                slide[index].dataset.anima = ''
                slide[index].nextElementSibling.classList.add(act)
                slide[index].classList.remove(act)
                return false
            }
            else if(item.classList.contains(act) && !item.nextElementSibling)
            {
                slide[0].dataset.anima = 'left'
                slide[index].dataset.anima = ''
                slide[index].classList.remove(act)
                slide[0].classList.add(act)
                return false
            }
         return true
        }
    }

    function moveLeft()
    {
        Array.from(slide).every(verify)
        function verify(item,index)
        {
            if(item.classList.contains(act) && item.previousElementSibling)
            {
                slide[index].previousElementSibling.dataset.anima = 'right'
                slide[index].dataset.anima = ''
                slide[index].previousElementSibling.classList.add(act)
                slide[index].classList.remove(act)
                return false
            }
            else if(item.classList.contains(act) && !item.previousElementSibling)
            {
                slide[slide.length - 1].dataset.anima = 'right'
                slide[index].dataset.anima = ''
                slide[index].classList.remove(act)
                slide[slide.length - 1].classList.add(act)
                
                return false
            }
         return true
        }
    }
}