const btnSend = document.getElementById("submit")
const btnRead = document.getElementById("readProduct")

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_product')) ?? []
//const setLocalStorage = (dbProduct) => localStorage.setItem("product", JSON.stringify(dbProduct))
  
const saveProduct = ()=>{
    let product = {
        categoria: document.getElementById("categoria").value,
        rotulo: document.getElementById("rotulo").value,
        descricao: document.getElementById("descricao").value,
        precioCompra: document.getElementById("compra").value,
        precioVenda: document.getElementById("venda").value      
    }      
    createProduct(product)
}

const createProduct = (product) => {
    const dbProduct = getLocalStorage()
    dbProduct.push(product)
    localStorage.setItem("db_product",JSON.stringify(dbProduct))
}

const readProduct = () => getLocalStorage()

btnSend.addEventListener("click", saveProduct)

btnRead.addEventListener("click", ()=>{
    console.log(getLocalStorage())
})

