import { Produtos } from './Produtos';

export class User {
    public id: number;
    public nomeFisOuJuri: string;
    public email: string;
    public cpfOuCnpj: string;
    public fotoUser: string;
    public data: Date
    public cooperativa: string;
    public localidade: string;
    public senha: string;
    public produtos: Produtos[]

}
