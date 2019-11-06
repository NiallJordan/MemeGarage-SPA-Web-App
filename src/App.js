import React, { Component } from 'react';
import PostList from './components/postList';
import Filter from './components/topicFilter';
import Header from './components/header';
import Form from './components/postForm';
import api from './dataStore/stubAPI';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import _ from 'lodash';

export default class App extends Component {
    addPost = (title,user, image,thread) => {
        api.add(title,user,image,thread);
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
        let posts = _.sortBy(api.getPosts(), post => -post.points);
        return (
        <div className="page-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <nav className ="col-md-1 filter-nav">
                        <Filter />
                    </nav>
                    <div className="col-md-8 post-list-container">
                        <PostList posts={posts}
                        upvoteHandler={this.increasePoints}
                        downvoteHandler={this.decreasePoints} />
                    </div>
                    <div className ="col-md-3 form-container">
                        <Form handleAdd={this.addPost}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
