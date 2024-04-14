export const productosData = [
    {
        name:'Alfombra de baño simetric',
        stock: 10,
        price: 14000,
        description: '$14.000',
        imagen: 'https://i.postimg.cc/R0dYmcBp/alfombra-ba-o-simetric.png',
        categoria: 'alfombras'
    }, 
    {
        name:'Alfombra trenzada de yute',
        stock: 15,
        price: 24000,
        description: '$24.000',
        imagen: 'https://i.postimg.cc/d1zpNJvJ/alfombra-trenzada-yute.png',
        categoria: 'alfombras'
    },
    { 
        name:'Alfombra de baño rombos',
        stock: 2,
        price: 20000,
        description: '$20.000',
        imagen: 'https://i.postimg.cc/cH2CHWwp/alfombra-ba-o-simetric2.png',
        categoria: 'alfombras'
    },
    {
        name:'Cesto de ropa Wash Me!',
        stock: 5,
        price: 8400,
        description: '$8.400',
        imagen: 'https://i.postimg.cc/yYhtnqGz/canasto-wash-me.png',
        categoria: 'cestos'
    }, 
    {
        name:'Canasto Juani',
        stock: 20,
        price: 10900,
        description: '$9.900',
        imagen: 'https://i.postimg.cc/CL06RPxr/canasto-juani.png',
        categoria: 'cestos'
    },
    {
        name:'Canasto Shina',
        stock: 10,
        price: 9000,
        description: '$9.000',
        imagen: 'https://i.postimg.cc/ZqhKXj4S/canasto-shina.png',
        categoria: 'cestos'
    },
    {
        name:'Adorno ondas',
        stock: 3,
        price: 11000,
        description: '$11.000',
        imagen: 'https://i.postimg.cc/NjMDXWqD/adorno-ondas.png',
        categoria: 'decoracion'
    },
    {
        name:'Florero rayas',
        stock: 3,
        price: 11000,
        description: '$10.000',
        imagen: 'https://i.postimg.cc/tJqWjx9k/florero-rayas.png',
        categoria: 'decoracion'
    },
    {
        name:'Set de baño arena',
        stock: 5,
        price: 17000,
        description: '$17.000',
        imagen: 'https://i.postimg.cc/kMws4hpT/set-ba-o-arena.png',
        categoria: 'dispenser'
    },
    {
        name:'Set de baño bamboo',
        stock: 10,
        price: 20000,
        description: '$20.000',
        imagen: 'https://i.postimg.cc/3W5m6mwb/set-ba-o-bamboo.png',
        categoria: 'dispenser'
    },
    {
        name:'Set de baño marmol',
        stock: 4,
        price: 20000,
        description: '$20.000',
        imagen: 'https://i.postimg.cc/mkRFyRp0/set-ba-o-marmol.png',
        categoria: 'dispenser'
    },
    {
        name:'Set de baño roca',
        stock: 9,
        price: 15000,
        description: '$15.000',
        imagen: 'https://i.postimg.cc/GhgHHkr0/set-ba-o-roca.png',
        categoria: 'dispenser'
    }
]

export const getProducts = () => {
    let error = false;
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(error){
                reject('Hubo un problema, intente más tarde')
            } else {
                resolve(productosData)
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
                let product = productosData.find((item) => item.id === id)
                resolve(product)
            }
        },3000)
    })
}