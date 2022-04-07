export default class Copy {
  
  constructor(copySelect,activeClass){
    this.copySelect = document.querySelector(copySelect)
    this.activeClass = activeClass

    this.copyToBoard = this.copyToBoard.bind(this)
  }
  
  copyToBoard() { 
    const copy = this.copySelect.dataset.copy
    this.copySelect.classList.add(this.activeClass)
    navigator.clipboard.writeText(copy)
    setTimeout(()=>{this.copySelect.classList.remove(this.activeClass)},1000)
  }

  addClickEvent(){this.copySelect.addEventListener('click', this.copyToBoard)}

  init(){
    this.addClickEvent()
    return this
  }
}
