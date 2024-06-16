import TweetType from "../types/TweetType";
import { v4 as uuidv4 } from 'uuid';
import User from "./User";
import UserType from "../types/UserType";

class Tweet {
    private id: string;
    private autorid: string;
    public text: string;
    public likes: number;
    public replies: Tweet[];

    constructor(data: TweetType,) {
     
        
       
        this.id = uuidv4();
        this.autorid = data.autorid;
        this.text = data.text;
        this.likes = 0;
        this.replies = [];
    }

    addLike() {
        this.likes += 1;
        console.log("vc curtiu!!")
    }

    addReplies(reply: Tweet) {
        this.replies.push(reply);

    };

    public gettweet() {
        return {
            id: this.id,
            autorid: this.autorid,
            text: this.text,
            likes: this.likes,
            replies: this.replies
        }
    }

    displayTweet(indent: string = '') {
        console.log(`${indent}@${this.autorid}: ${this.text} [${this.likes} likes]`);
        this.replies.forEach(reply => {
            reply.displayTweet(indent + '  ');
        });
    }
}

export default Tweet;