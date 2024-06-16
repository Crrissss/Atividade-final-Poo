"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./model/User"));
const Tweet_1 = __importDefault(require("./model/Tweet"));
// Criando tweets principais
const mainTweetData = { autorid: 'dafine', text: 'ola mundo' };
const mainTweet = new Tweet_1.default(mainTweetData);
// Criando uma resposta ao tweet principal
const reply1Data = { autorid: 'bruna', text: 'hey' };
const reply1 = new Tweet_1.default(reply1Data);
mainTweet.addReplies(reply1);
// Adicionando outra resposta à primeira resposta
const reply2Data = { autorid: 'dafine', text: 'adoro growdev' };
const reply2 = new Tweet_1.default(reply2Data);
reply1.addReplies(reply2);
// Adicionando mais uma resposta à segunda resposta
const reply3Data = { autorid: 'bruna', text: 'liked this' };
const reply3 = new Tweet_1.default(reply3Data);
reply2.addReplies(reply3);
// Adicionando outra resposta ao tweet principal
const reply4Data = { autorid: 'dafine', text: 'ahahaha' };
const reply4 = new Tweet_1.default(reply4Data);
mainTweet.addReplies(reply4);
// Exibindo o tweet principal e suas respostas
mainTweet.displayTweet();
console.log("-----------Feature #4 Followers----------------------");
const user1 = new User_1.default({
    id: "",
    nome: 'Helena',
    email: 'alice@example.com',
    senha: 'password1',
    Username: 'Lena'
});
const user2 = new User_1.default({
    id: "",
    nome: 'PEDRO',
    email: 'PEDRO@example.com',
    senha: 'password1',
    Username: 'Pedrinho'
});
const user3 = new User_1.default({
    id: "",
    nome: 'LARA',
    email: 'LARA@example.com',
    senha: 'password1',
    Username: 'lali'
});
user1.seguir(user2);
user2.seguir(user3);
user3.seguir(user1); // não deve funcionar
console.log('Usuários seguidos por Alice:', user1.listarSeguindo().map(user => user.username));
console.log('Seguidores de Pedro:', user2.listarSeguidores().map(user => user.username));
console.log(user1.getDetalhes());
console.log(user2.getDetalhes());
console.log("//---------------Feature #5 Like em tweets-----------");
// Usuário curtindo tweets
// Dados para criar um Tweet
const tweetData = {
    autorid: 'usuario1',
    text: 'Eu amo GROWDEV.',
};
const tweet = new Tweet_1.default(tweetData);
// Chamando o método addLike para adicionar curtida
tweet.addLike();
tweet.addLike();
console.log(tweet.gettweet());
console.log("-------------Feature #6 Reply em tweets-------------");
const tweetPrincipal = new Tweet_1.default({
    autorid: '',
    text: 'Eu amo GROWDEV',
});
const tweetResposta = new Tweet_1.default({
    autorid: '',
    text: 'Eu também',
});
tweetPrincipal.addReplies(tweetResposta);
tweetPrincipal.displayTweet();
