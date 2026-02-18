let clientes = JSON.parse(localStorage.getItem("clientes")) || []

function cadastrar(){

let nome = document.getElementById("nome").value

let email = document.getElementById("email").value

if(nome === "" || email === ""){

alert("Preencha todos os campos")

return

}

clientes.push({nome,email})

localStorage.setItem("clientes",JSON.stringify(clientes))

mostrar()

limpar()

}

function mostrar(){

let lista = document.getElementById("listaClientes")

lista.innerHTML = ""

clientes.forEach((cliente,index)=>{

lista.innerHTML += `

<li>

${cliente.nome} - ${cliente.email}

<span class="excluir" onclick="excluir(${index})">Excluir</span>

</li>

`

})

}

function excluir(index){

clientes.splice(index,1)

localStorage.setItem("clientes",JSON.stringify(clientes))

mostrar()

}

function limpar(){

document.getElementById("nome").value=""

document.getElementById("email").value=""

}

mostrar()
