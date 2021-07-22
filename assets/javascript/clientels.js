const btnSend = document.getElementById("submit")
const btnRead = document.getElementById("readProduct")

const getLocalStorage = () => JSON.parse(localStorage.getItem('client')) ?? []

const saveClient = ()=>{
    let client = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        nacionalidade: document.getElementById("nacionalidade").value,        
        email: document.getElementById("email").value,
        tel: document.getElementById("tel").value,
        cep: document.getElementById("cep").value,   
        endereco: document.getElementById("endereco").value,
        num: document.getElementById("num").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        uf: document.getElementById("uf").value
    }      
    createClient(client)
}

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    localStorage.setItem("client",JSON.stringify(dbClient))
}

const readClient = () => getLocalStorage()

btnSend.addEventListener("click", saveClient)

btnRead.addEventListener("click", ()=>{
    console.log(getLocalStorage())
})
