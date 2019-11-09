import _ from "lodash";

class StubAPI {
    constructor() {
        this.posts = [
            {
                "id":1,
                "title":"Post 1",
                "thumbnail":"https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681",
                "thread":"/funny",
                "imageUrl":"https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681",
                "user":"cunt",
                "comments":[],
                "points":0
            }
        ];
    }

    initialize(posts){
        this.posts=posts;
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
    update(key, title){
        let index = _.findIndex(this.posts, post => post.id === key);
        if (index !== -1){
            this.posts[index].title = title;
            return true;
        }
        return false;
    }

    deletePost(id){
        let elements = _.remove(this.posts, post => post.id === id);
        return elements
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

    upvoteComment(commentid){
        let index = _.findIndex(this.posts.comment,comment => comment.id === commentid);
            if(index !== -1){
                this.posts.comment[index].points += 1;
                return true;
            }
            return false;
    }
}

export default new StubAPI();