import React, { Component } from 'react';
import PostList from './components/postList';
import Filter from './components/topicFilter';
import Header from './components/header';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends Component {
render() {
    const testPosts = [
    {
        id:1,
        title:'Post 1',
        thumbnail:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681',
        link:'https://www.foaas.com/',
        user:'cunt',
        comments:[],
        upvote:20,
        downvote:5

    },
    {
        id:2,
        title:'Post 2',
        thumbnail:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681',
        link:'https://www.foaas.com/',
        user:'cunt',
        comments:[],
        upvote:20,
        downvote:5
    },
    {
        id:3,
        title:'Post 3',
        thumbnail:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681',
        link:'https://www.foaas.com/',
        user:'cunt',
        comments:[],
        upvote:20,
        downvote:5
    },
    {
        id:4,
        title:'Post 1',
        thumbnail:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681',
        link:'https://www.foaas.com/',
        user:'cunt',
        comments:[],
        upvote:20,
        downvote:5
    },
    {
        id:5,
        title:'Post 1',
        thumbnail:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681',
        link:'https://www.foaas.com/',
        user:'cunt',
        comments:[],
        upvote:20,
        downvote:5
    }
    ];
    return (
    <div class="">
        <div class="">
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
                    <PostList posts={testPosts} />
                </div>
            </div>
        </div>
    </div>
    );
}
}
