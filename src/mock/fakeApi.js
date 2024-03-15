const productos = [
    {
        id:'1', 
        name:'Alfombra de baño simetric',
        stock: 10,
        price: 14000,
        description: '$14.000',
        imagen: 'https://i.postimg.cc/R0dYmcBp/alfombra-ba-o-simetric.png',
        categoria: 'alfombras'
    },
    {
        id:'2', 
        name:'Alfombra trenzada de yute',
        stock: 15,
        price: 24000,
        description: '$24.000',
        imagen: 'https://i.postimg.cc/d1zpNJvJ/alfombra-trenzada-yute.png',
        categoria: 'alfombras'
    },
    {
        id:'3', 
        name:'Cesto de ropa Wash Me!',
        stock: 5,
        price: 8400,
        description: '$8.400',
        imagen: 'https://i.postimg.cc/yYhtnqGz/canasto-wash-me.png',
        categoria: 'cestos'
    },
    {
        id:'4', 
        name:'Canasto Juani',
        stock: 20,
        price: 10900,
        description: '$9.900',
        imagen: 'https://i.postimg.cc/CL06RPxr/canasto-juani.png',
        categoria: 'cestos'
    },
    {
        id:'5', 
        name:'Adorno ondas',
        stock: 3,
        price: 11000,
        description: '$11.000',
        imagen: 'https://i.postimg.cc/NjMDXWqD/adorno-ondas.png',
        categoria: 'decoracion'
    },
    {
        id:'6', 
        name:'Florero rayas',
        stock: 3,
        price: 11000,
        description: '$10.000',
        imagen: 'https://i.postimg.cc/tJqWjx9k/florero-rayas.png',
        categoria: 'decoracion'
    }
]

export const getProducts = () => {
    let error = false;
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(error){
                reject('Hubo un problema, intente más tarde')
            } else {
                resolve(productos)
            }
        },3000)
    })
}

export const getOneProduct = (id) => {
    let error = false;
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(error){
                reject('Hubo un problema, intente más tarde')
            } else {
                let product = productos.find((item) => item.id === id)
                resolve(product)
            }
        },3000)
    })
}