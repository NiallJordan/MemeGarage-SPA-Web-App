import React, { Component } from 'react';
import Post from '../post';

export default class PostList extends Component{
    render(){
        const posts = this.props.posts.map(post =>
            <Post
            key={post.id}
            post={post}
            upvoteHandler = {this.props.upvoteHandler}
            downvoteHandler = {this.props.downvoteHandler}
            deleteHandler={this.props.deleteHandler}/>
        );
        return (
            <div className="main-coloumn">
                {posts}
            </div>
        )
    }
}