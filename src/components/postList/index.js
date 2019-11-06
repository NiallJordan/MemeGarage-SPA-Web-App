import React, { Component } from 'react';
import Post from '../post';

export default class PostList extends Component{
    render(){
        let posts = this.props.posts.map((post,index) =>
            <Post
            key={post.id}
            post={post}
            upvoteHandler = {this.props.upvoteHandler}
            downvoteHandler = {this.props.downvoteHandler}/>
        );
        return (
            <div className="main-coloumn">
                {posts}
            </div>
        )
    }
}