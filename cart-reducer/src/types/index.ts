export type TCurso = {
    id: number
    img: string
    title: string
    description: string
    price: number
}

export type TCursoCarrito = TCurso & {
    quantity: number
}

// export interface ICurso {
//     id: number
//     img: string
//     title: string
//     description: string
//     price: number
//     ranking: 5
// }

// export interface TCursoCarrito extends ICurso {
//     quantity: number
// }