import React, { Component } from 'react';
import Post from '../post';

export default class PostList extends Component{
    render(){
        let posts = this.props.posts.map((post,index) => (
            <Post
            key={post.id}
            post={post}
            />
        ));
        return (
            <div class="main-coloumn">
                {posts}
            </div>
        )
    }
}