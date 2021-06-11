import { User } from "./User"

export class Produto{
     public id: number
     public data:Date
     public fotoProduto: string
     public nomeProduto: string
     public peso:number
     public preco: number
     public tipo: string
     public quantidade: number
     public usuarioCriador: User
     public descricao:string

}
