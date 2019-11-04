import Header from '../src/components/header'
import Filter from '../src/components/topicFilter';
import Post from '../src/components/post'
import PostList from '../src/components/postList';
import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { action } from '@storybook/addon-actions';

const post ={
    id:1,
    title:'Post 1',
    thumbnail:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681',
    link:'https://www.foaas.com/',
    user:'cunt',
    comments:[],
    upvote:20,
    downvote:5
};

storiesOf("MemeGarage/Header",module).add("default",() => ( <Header/> ));

storiesOf("MemeGarageApp/Filter",module).add("default",() => ( <Filter/> ));

storiesOf("MemeGarageApp/Post",module).add("default",() => ( <Post post={post}/>));

storiesOf('MemeGarageApp/Post List',module).add('default', () => {
    const defaultPosts= [
        {...post,id:1,title:'Post 1', upvote:10},
        {...post,id:2,title:'Post 2', upvote:20},
        {...post,id:3,title:'Post 3', upvote:30},
        {...post,id:4,title:'Post 4', upvote:40},
    ];
    return <PostList posts={defaultPosts} />
});