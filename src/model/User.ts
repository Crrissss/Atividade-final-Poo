import { v4 as uuidv4 } from 'uuid';
import Tweet from './Tweet';
import UserType from '../types/UserType';

class User  {
    private id: string;
    public nome: string;
    public email: string;
    private senha: string;
    public username: string;

    private seguidores: User[];
    private seguindo: User[];

    public tweets: Tweet[];

    constructor(data: UserType) {
       
        this.id = uuidv4();
        this.nome = data.nome;
        this.email = data.email;
        this.senha = data.senha;
        this.username = data.Username;
        this.tweets = [];
        this.seguidores = [];
        this.seguindo = [];
    }

    public getUser() {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            username: this.username,
            seguidores: this.seguidores.map(user => user.username),
            seguindo: this.seguindo.map(user => user.username)
        };
    }

    public seguir(outroUsuario: User): void {
        if (outroUsuario.id !== this.id && !this.seguindo.includes(outroUsuario)) {
            this.seguindo.push(outroUsuario);
            outroUsuario.addSeguidor(this);
        }
    }

    private addSeguidor(usuario: User): void {
        if (!this.seguidores.includes(usuario)) {
            this.seguidores.push(usuario);
        }
    }

    public listarSeguindo(): User[] {
        return this.seguindo;
    }

    public listarSeguidores(): User[] {
        return this.seguidores;
    }

    public getDetalhes() {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            username: this.username,
            seguidores: this.seguidores.length,
            seguindo: this.seguindo.length
        };
    }

    
}

export default User;