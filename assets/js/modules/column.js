export default function column()
{
    const 
      disptype = document.querySelectorAll('[data-disptype]'),
      btnColumn = document.querySelector('[data-btn="column"]'),
      arrowLeft = document.querySelector('.arrow-left'),
      arrowRight = document.querySelector('.arrow-right'),
      act = 'active'

    btnColumn.addEventListener('click',addColumn)

    function addColumn()
    {
        arrowLeft.classList.remove(act)
        arrowRight.classList.remove(act)

        disptype.forEach((item)=>{
            item.dataset.disptype = "column"
        })
    }

}