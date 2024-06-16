"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Tweet {
    constructor(data) {
        this.id = (0, uuid_1.v4)();
        this.autorid = data.autorid;
        this.text = data.text;
        this.likes = 0;
        this.replies = [];
    }
    addLike() {
        this.likes += 1;
        console.log("vc curtiu!!");
    }
    addReplies(reply) {
        this.replies.push(reply);
    }
    ;
    gettweet() {
        return {
            id: this.id,
            autorid: this.autorid,
            text: this.text,
            likes: this.likes,
            replies: this.replies
        };
    }
    displayTweet(indent = '') {
        console.log(`${indent}@${this.autorid}: ${this.text} [${this.likes} likes]`);
        this.replies.forEach(reply => {
            reply.displayTweet(indent + '  ');
        });
    }
}
exports.default = Tweet;
