const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
for(let i=0;i<products.length;i++){
    if(products[i].includes("Camiseta")){
        console.log(products[i])
    }
}
/*Otra opción es hacerlo a través de un for of loop 
for(let product of products){
    if(product.includes("Camiseta")){
        console.log(product)
    }
}
*/