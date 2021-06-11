import { Produto } from './Produto';

export class User {
    public id: number;
    public nomeFisOuJuri: string;
    public email: string;
    public cpfOuCnpj: string;
    public data: Date
    public cooperativa: string;
    public localidade: string;
    public senha: string;
    public produto: Produto[]

}
