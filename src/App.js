import React, { Component } from 'react';
import PostList from './components/postList';
import Filter from './components/topicFilter';
import Header from './components/header';
import Form from './components/postForm';
import request from "superagent";
import api from './dataStore/stubAPI';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import _ from 'lodash';
import localCache from './localCache';

export default class App extends Component {
    addPost = (title,user, image,thread) => {
        api.add(title,user,image,thread);
        this.setState({});
    };

    deletePost=(key) =>{
        api.deletePost(key);
        this.setState({});
    };

    increasePoints= (id) => {
        api.increasePoints(id);
        this.setState({});
    };
    decreasePoints = (id) => {
        api.decreasePoints(id);
        this.setState({});
    };

    render() {
        let posts = api.getPosts();
        let updatedPosts = localCache.getAll()
        return (
        <div className="page-container">
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="sidebar">
                        <Filter />
                    </div>
                    <div className="contwrap">
                        <div className="post-list-container">
                            <PostList posts={posts}
                            upvoteHandler={this.increasePoints}
                            downvoteHandler={this.decreasePoints}
                            deleteHandler={this.deletePost} />
                        </div>
                        <div className ="form-container">
                            <Form handleAdd={this.addPost}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
