let obj = [
    { id:"1", nombre:"Colchon 1 plaza", marca:"Cannon", categoria:"colchon", stock:"10", precio:"30000", imagen:"https://cdn.shopify.com/s/files/1/0071/9074/1051/products/princess_colchon_190x140_b95e26b8-e380-42e8-a104-c8824766d085_720x.png?v=1601055270"},
    { id:"2", nombre:"Colchon 2 plazas", marca:"Cannon", categoria:"colchon", stock:"10", precio:"50000", imagen:"https://dormicentro.s3.amazonaws.com/imagenes/800x600/doral-pillow-00.jpg"},
    { id:"3", nombre:"Colchon 1 plaza", marca:"Simmons", categoria:"colchon", stock:"10", precio:"35000", imagen:"https://blancostore.com.ar/wp-content/uploads/Colchon-Simmons-Backcare-Linea-2021-1.jpg"},
    { id:"4", nombre:"Colchon 2 plazas", marca:"Simmons", categoria:"colchon", stock:"10", precio:"55000", imagen:"https://simmonsarg.vteximg.com.br/arquivos/ids/158038-1000-1000/Sommier-BeautySleep-190-140.png?v=637455358236330000"},
    { id:"5", nombre:"Sabana 1 plaza", marca:"Piñata", categoria:"sabana", stock:"10", precio:"6000", imagen:"https://pinataar.vtexassets.com/arquivos/ids/156620-800-auto?v=637811337462130000&width=800&height=auto&aspect=true"},
    { id:"6", nombre:"Sabana 2 plazas", marca:"Piñata", categoria:"sabana", stock:"10", precio:"9000", imagen:"https://pinataar.vtexassets.com/arquivos/ids/156244-800-auto?v=637698301382330000&width=800&height=auto&aspect=true"},
    { id:"7", nombre:"Sabana 2 plazas", marca:"Cannon", categoria:"sabana", stock:"10", precio:"10000", imagen:"https://http2.mlstatic.com/D_NQ_NP_743851-MLA51289324197_082022-O.webp"},
    { id:"8", nombre:"Sabana 2 plazas", marca:"Cannon", categoria:"sabana", stock:"10", precio:"10500", imagen:"https://http2.mlstatic.com/D_NQ_NP_704010-MLA51289204053_082022-O.webp"},
    { id:"9", nombre:"Almohada", marca:"Suavestar", categoria:"almohada", stock:"10", precio:"1000", imagen:"https://http2.mlstatic.com/D_NQ_NP_917793-MLA31353409789_072019-O.jpg"},
    { id:"10", nombre:"Almohada Soft", marca:"Descanso", categoria:"almohada", stock:"10", precio:"1500", imagen:"https://blancoparis.b-cdn.net/Content/UploadDirectory/Products/68/image_2854defc-6edb-495b-ae30-4ec93a6b24f8.jpg"},

]

export const gFetch = (nro) => {
    return new Promise (( res, rej) => {
        const condicion = true
        if (condicion){
            setTimeout(()=>{
                res(obj)
            }, 500)
        }else {
            rej ("Error en la carga")
        }
    } )
}

