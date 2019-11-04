import React, { Component } from 'react';
import PostList from './components/postList';
import Filter from './components/topicFilter';
import Header from './components/header';
import api from './dataStore/stubAPI';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends Component {
render() {
    let posts = api.getPosts()
    return (
    <div class="page-container">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <Header />
                </div>
            </div>
            <div class="row">
                <div class ="col-md-3">
                    <Filter />
                </div>
                <div class="col-md-8">
                    <PostList posts={posts} />
                </div>
            </div>
        </div>
    </div>
    );
}
}
