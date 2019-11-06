import _ from "lodash";

class StubAPI {
    constructor() {
        this.posts = [
            {
                id:1,
                title:'Post 1',
                thumbnail:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681',
                thread:'/',
                imageUrl:'',
                user:'cunt',
                comments:[],
                points:0
            },
            {
                id:2,
                title:'Post 2',
                thumbnail:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thrillist.com%2Fentertainment%2Fnation%2Fbest-memes-2019&psig=AOvVaw1ngSjsC1HNg7Z2wmZBI5sv&ust=1572976623015000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICNwNmQ0eUCFQAAAAAdAAAAABAD',
                thread:'/',
                imageUrl:'',
                user:'cunt',
                comments:[],
                points:0
            },
            {
                id:3,
                title:'Post 3',
                thumbnail:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681',
                thread:'https://www.foaas.com/',
                imageUrl:'/',
                user:'cunt',
                comments:[],
                points:0
            },
            {
                id:4,
                title:'Post 4',
                thumbnail:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681',
                thread:'https://www.foaas.com/',
                imageUrl:'/',
                user:'cunt',
                comments:[],
                points:0
            },
            {
                id:5,
                title:'Post 5',
                thumbnail:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681',
                thread:'https://www.foaas.com/',
                imageUrl:'/',
                user:'cunt',
                comments:[],
                points:0
            }
        ];
    }

    getPosts(){
        return this.posts;
    }

    add(title,thumbnail,thread,user){
        let id=1;
        let last =_.last(this.posts);
        if(last){
            id=last.id +1;
        }
        let numberOfPosts = this.posts.length;
        let newNumberOfPosts = this.posts.push({
            id,
            title,
            thumbnail,
            user,
            thread,
            comments:[],
            points:0
        });
        return newNumberOfPosts > numberOfPosts;
    }

    increasePoints(id){
        let index = _.findIndex(this.posts,post => post.id === id);
        if(index !== -1){
            this.posts[index].points += 1;
            return true;
        }
        return false;
    }

    decreasePoints(id){
        let index = _.findIndex(this.posts,post => post.id === id);
        if(index !== -1){
            this.posts[index].points -= 1;
            return true;
        }
        return false;
    }

    getPost(id){
        let index = _.findIndex(this.posts, post => post.id === id);
        let result = index !== -1 ? this.posts[index] : null;
        return result;
    }

    addComment(postId, com, userName){
        let post =this.getPost(postId);
        let id = 1;
        let last = _.last(post.comments);
        if (last) {
            id= last.id + 1;
        }
        post.comments.push({id:id,comment : com, user: userName,upvotes:0,downvotes:0});
    }
}

export default new StubAPI();