const btnSend = document.getElementById("submit")
const btnRead = document.getElementById("readProduct")

const getLocalStorage = () => JSON.parse(localStorage.getItem('product')) ?? []

btnSend.onclick=function() {
    const product = {
        categoria: document.getElementById("categoria").value,
        rotulo: document.getElementById("rotulo").value,
        descricao: document.getElementById("descricao").value,
        precioCompra: document.getElementById("compra").value,
        precioVenda: document.getElementById("venda").value      
    }
    
    localStorage.setItem("product", JSON.stringify(product))
}

btnRead.addEventListener("click",()=>{
    console.log(getLocalStorage())
})


