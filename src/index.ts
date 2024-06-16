import User from './model/User';
import Tweet from './model/Tweet';
import TweetType from './types/TweetType';
import UserType from './types/UserType';


const mainTweetData: TweetType = { autorid: 'dafine', text: 'ola mundo' };
const mainTweet = new Tweet(mainTweetData);


const reply1Data: TweetType = { autorid: 'bruna', text: 'hey' };
const reply1 = new Tweet(reply1Data);
mainTweet.addReplies(reply1);


const reply2Data: TweetType = { autorid: 'dafine', text: 'adoro growdev' };
const reply2 = new Tweet(reply2Data);
reply1.addReplies(reply2);


const reply3Data: TweetType = { autorid: 'bruna', text: 'liked this' };
const reply3 = new Tweet(reply3Data);
reply2.addReplies(reply3);


const reply4Data: TweetType = { autorid: 'dafine', text: 'ahahaha' };
const reply4 = new Tweet(reply4Data);
mainTweet.addReplies(reply4);


mainTweet.displayTweet();

console.log("-----------Followers----------------------")

const  user1 = new User( { 
        id:"",
        nome: 'Helena', 
        email: 'alice@example.com',
        senha: 'password1',
        Username: 'Lena' 
    }
) 

const  user2 = new User({ 
    id:"",
    nome: 'PEDRO', 
    email: 'PEDRO@example.com',
    senha: 'password1',
    Username: 'Pedrinho' 
}) 
   

const  user3 = new User ({ 
    id:"",
    nome: 'LARA', 
    email: 'LARA@example.com',
    senha: 'password1',
    Username: 'lali' 
}) 

user1.seguir(user2)
user2.seguir(user3);
user3.seguir(user1); // não deve funcionar

console.log('Usuários seguidos por Alice:', user1.listarSeguindo().map(user => user.username));
console.log('Seguidores de Pedro:', user2.listarSeguidores().map(user => user.username));
console.log(user1.getDetalhes());
console.log(user2.getDetalhes());

console.log("//--------------- Like em tweets-----------")

// Usuário curtindo tweets


// Dados para criar um Tweet
const tweetData: TweetType = {
    autorid: 'usuario1',
    text: 'Eu amo GROWDEV.',
};

const tweet = new Tweet(tweetData);

// Chamando o método addLike para adicionar curtida
tweet.addLike();
tweet.addLike()
console.log(tweet.gettweet())

console.log("-------------Reply em tweets-------------")

const tweetPrincipal= new Tweet({
    autorid: 'Pedro',
    text: 'Eu amo GROWDEV',
})
const tweetResposta = new Tweet({
    autorid: 'Lara',
    text: 'Eu também',
})
tweetPrincipal.addReplies(tweetResposta)
tweetPrincipal.displayTweet()