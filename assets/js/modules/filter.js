export default function filter()
{
    const 
        wraper = document.querySelector('[data-wrap]'),
        all = document.querySelectorAll('[data-type]'),
        type0 = document.querySelectorAll('[data-type="0"]'),
        type1 = document.querySelectorAll('[data-type="1"]'),
        btnAll = document.querySelector('#all'),
        btnType0 = document.querySelector('#fic'),
        btnType1 = document.querySelector('#real'),
        userEvents = ['touchstart','click'],
        act = 'active'

    wraper.innerHTML = ""
    activeAll()

    userEvents.forEach((userEvent)=>{
        btnAll.addEventListener(userEvent,activeAll)
        btnType0.addEventListener(userEvent,activeType0)
        btnType1.addEventListener(userEvent,activeType1)
    })

    function activeAll()
    {
        all.forEach((item)=>item.classList.remove(act))
        if(all[0].dataset.disptype === "slide")
        {
            type0[0].classList.remove(act)
            type1[0].classList.remove(act)
            all[0].classList.add(act)
        }
      
        all.forEach((save)=>{
            wraper.appendChild(save) 
        })
    }

    function activeType0()
    {
        wraper.innerHTML = ""
        all.forEach((item)=>item.classList.remove(act))
        if(all[0].dataset.disptype === "slide")
        {
            type0[0].classList.add(act)
            type1[0].classList.remove(act)
        }
        type0.forEach((tp)=>{
            wraper.appendChild(tp)
        })
    }

    function activeType1()
    {
        wraper.innerHTML = ""
        all.forEach((item)=>item.classList.remove(act))
        if(all[0].dataset.disptype === "slide")
        {
            type0[0].classList.remove(act)
            type1[0].classList.add(act)
        }
        type1.forEach((tp)=>{
            wraper.appendChild(tp)
        })
    }
   
}