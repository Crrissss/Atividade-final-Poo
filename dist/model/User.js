"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor(data) {
        this.id = (0, uuid_1.v4)();
        this.nome = data.nome;
        this.email = data.email;
        this.senha = data.senha;
        this.username = data.Username;
        this.tweets = [];
        this.seguidores = [];
        this.seguindo = [];
    }
    getUser() {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            username: this.username,
            seguidores: this.seguidores.map(user => user.username),
            seguindo: this.seguindo.map(user => user.username)
        };
    }
    seguir(outroUsuario) {
        if (outroUsuario.id !== this.id && !this.seguindo.includes(outroUsuario)) {
            this.seguindo.push(outroUsuario);
            outroUsuario.addSeguidor(this);
        }
    }
    addSeguidor(usuario) {
        if (!this.seguidores.includes(usuario)) {
            this.seguidores.push(usuario);
        }
    }
    listarSeguindo() {
        return this.seguindo;
    }
    listarSeguidores() {
        return this.seguidores;
    }
    getDetalhes() {
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
exports.default = User;
