

let option 
let  items = [] 

while( option != 3) {

 option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `))


 switch(option) {
    case 1:
     let item = prompt("Digite o nome do item")
      items.push(item)

     break
    case 2:
     if(items.length == 0){
        alert("Não existe items cadastrados")   
        
     }else{
        alert(items)
     }   
     break
    case 3:
        alert("tchau")
     break
     default:   
        alert("opção invalida. tente novamente")
 }
}
