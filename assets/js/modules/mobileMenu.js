export default function menu()
{
    const 
      html = document.documentElement,  
      mobMenu = document.querySelector('[data-mobile]'),
      itemMenu = document.querySelector('[data-mobileItem]'),
      fillMenu = document.querySelector('[data-menu]'),
      fillItem = document.querySelector('[data-menuitem]'),
      btns = fillItem.querySelectorAll('button'),
      act = 'active'
     
    btns[0].classList.add(act)

    mobMenu.addEventListener('click', menuMobActive)
    fillMenu.addEventListener('click', menuActive)
   
    
    function menuMobActive(e)
    {
        const menu = e.currentTarget.dataset 

        if(menu.mobile === "")
        {
            menu.mobile = "open"
            itemMenu.dataset.mobileitem ="open"
            outsideClickMob(itemMenu,menu)
        }
        else
        {
            menu.mobile = ""
            itemMenu.dataset.mobileitem =""
          
        }
    }

    function menuActive(e)
    {
        const menu = e.currentTarget.dataset 

        btns.forEach((btn)=>{btn.addEventListener('click',addClass)})

        function addClass(e)
        {
            btns.forEach((btn)=>{
                btn.classList.remove(act)
            })
            e.currentTarget.classList.add(act)
        }
        
        if(menu.menu === "")
        {
            menu.menu = "open"
            fillItem.dataset.menuitem ="open"
            outsideClick(fillItem,menu)
        }
        else
        {
            menu.menu = ""
            fillItem.dataset.menuitem =""
           
        }
    }

    function outsideClickMob(element,menu)
    {
        html.addEventListener('click', outside)
           
        function outside(e)
        {
       
            if(!element.contains(e.target) && e.target !== mobMenu)
            {
                menu.mobile = ""
                element.dataset.mobileitem =""
                html.removeEventListener('click', outside)

            }
           
        }
    }

    
    function outsideClick(element,menu)
    {
        html.addEventListener('click', outside)
      
        function outside(e)
        {
       
            if(!element.contains(e.target) && e.target !== fillMenu)
            {
                menu.menu = ""
                element.dataset.menuitem =""
                html.removeEventListener('click', outside)
            }
           
        }
    }
}