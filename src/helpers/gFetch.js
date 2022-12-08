let obj = [
    { id:"1", nombre:"colchon 1 plaza", marca:"cannon", categoria:"colchon", stock:"10", precio:"30000", imagen:"https://cdn.shopify.com/s/files/1/0071/9074/1051/products/princess_colchon_190x140_b95e26b8-e380-42e8-a104-c8824766d085_720x.png?v=1601055270"},
    { id:"2", nombre:"colchon 2 plazas", marca:"cannon", categoria:"colchon", stock:"10", precio:"50000", imagen:"https://dormicentro.s3.amazonaws.com/imagenes/800x600/doral-pillow-00.jpg"},
    { id:"3", nombre:"colchon 1 plaza", marca:"simmons", categoria:"colchon", stock:"10", precio:"35000", imagen:"https://blancostore.com.ar/wp-content/uploads/Colchon-Simmons-Backcare-Linea-2021-1.jpg"},
    { id:"4", nombre:"colchon 2 plazas", marca:"simmons", categoria:"colchon", stock:"10", precio:"55000", imagen:"https://simmonsarg.vteximg.com.br/arquivos/ids/158038-1000-1000/Sommier-BeautySleep-190-140.png?v=637455358236330000"},
    { id:"5", nombre:"sabana 1 plaza", marca:"piñata", categoria:"sabana", stock:"10", precio:"6000", imagen:"https://pinataar.vtexassets.com/arquivos/ids/156620-800-auto?v=637811337462130000&width=800&height=auto&aspect=true"},
    { id:"6", nombre:"sabana 2 plazas", marca:"piñata", categoria:"sabana", stock:"10", precio:"9000", imagen:"https://pinataar.vtexassets.com/arquivos/ids/156244-800-auto?v=637698301382330000&width=800&height=auto&aspect=true"},
]

export const gFetch = (nro) => {
    return new Promise (( res, rej) => {
        const condicion = true
        if (condicion){
            setTimeout(()=>{
                res(obj)
            }, 1000)
        }else {
            rej ("Error en la carga")
        }
    } )
}

