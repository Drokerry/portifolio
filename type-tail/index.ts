let elPesquisa = document.querySelector('input') as HTMLElement;
let frutas: string[] = ['Maca', 'uva', 'abacate'];
//let listElement = document.querySelector('ul') as HTMLElement;


console.log('capturar', elPesquisa);
function buscarResultado(this:any){
    console.log('buscando funcao');
    let texto = this.value;
    
    if(texto.trim().length === 0){
        listElement.innerHTML = '';
        return;
    
    }
    console.log(texto);
    let filtro = frutas.filter(function(el){
        return el.toLowerCase().indexOf(texto.toLowerCase()) > -1;
        
    })
    console.log('chama', filtro)
    listElement.innerHTML = '';
    filtro.map(item => {
        let todoElement = document.createElement("li");
        let todo2Element = document.createElement("span");
        let tarefaText = document.createTextNode(item);
        todoElement.setAttribute('class', "text-sm font-semibold hover:bg-violet-500 hover:text-white px-4 py-3 group");
     
  
    
  
     
      
        todo2Element.setAttribute("class", "text-gray-400 group-hover:text-gray-200 font-normal pl-1");
      
    
        todoElement.appendChild(tarefaText);
        todo2Element.appendChild(tarefaText);
        listElement.appendChild(todoElement);
       console.log('teste', item);
      })
}
elPesquisa.addEventListener('keydown', buscarResultado);



 