export default function copy()
{
        
    const copySelect = document.querySelector('[data-copy]')

    copySelect.addEventListener('click',copyToBoard)

    function copyToBoard()
    { 
        const copy = copySelect.dataset.copy
        copySelect.classList.add('active')
        navigator.clipboard.writeText(copy)
        setTimeout(()=>{copySelect.classList.remove('active')},1000)
    }
}
