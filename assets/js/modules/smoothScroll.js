export default function smoothScroll()
{
    const 
        links = document.querySelectorAll('a[href^="#"]'),
        sections = document.querySelectorAll('section') 

    links.forEach(link => link.addEventListener('click',scroll))

    function scroll(e)
    {
        e.preventDefault()
        sections.forEach((section)=>{
            const 
                link = e.currentTarget.getAttribute('href').replace('#',""),
                height = section.offsetTop

            if(section.id == link)
            {
               window.scrollTo({
                   top: height,
                   behavior:"smooth"
               })
            }
        })
    }

}