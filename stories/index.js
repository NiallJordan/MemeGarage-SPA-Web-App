import React from 'react';
import Header from '../src/components/header'
import Filter from '../src/components/topicFilter';
import Post from '../src/components/post'
import PostList from '../src/components/postList';
import Form from '../src/components/postForm';
import CommentForm from "../src/components/commentComponents/commentForm"
import Comment from "../src/components/commentComponents/comment"
import CommentList from "../src/components/commentComponents/commentList"


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

const post ={
    id:1,
    title:'Post 1',
    thumbnail:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681',
    link:'https://www.foaas.com/',
    user:'harold',
    comments:[],
    points:4
};
const comment ={
    id:1,
    user:'harold',
    comment:'shit comment',
    points: 4,
}

storiesOf("MemeGarage/Header",module).add("default",() => ( <Header/> ));

storiesOf("MemeGarage App/Filter",module).add("default",() => ( <Filter/> ));

storiesOf("MemeGarage App/Post",module)
.add("default",() => <Post post={post} handlerUpvote={action("upvoted")} />)
.add("No hyperlink",() => <Post post={{...post,thread:""}} handlerUpvote={action("upvoted")} />)
.add("default", () => <Post post={post} handlerDownvote={action("downvoted")}/>)
.add("No hyperlink", () => <Post post={{...post,thread:""}}handlerDownvote={action("downvoted")}/>);

storiesOf('MemeGarage App/Post List',module).add('default', () => {
    const defaultPosts= [
        {...post,id:1,title:'Post 1', upvote:10},
        {...post,id:2,title:'Post 2', upvote:20},
        {...post,id:3,title:'Post 3', upvote:30},
        {...post,id:4,title:'Post 4', upvote:40},
    ];
    return <PostList posts={defaultPosts} />
});

storiesOf("MemeGarage App/Post Form",module).add("default",() => ( <Form/>));

storiesOf("MemeGarage App/Comments/Comment Form",module).add("default", () => (
    <CommentForm post ={post} addCommentHandler={action("comment added")} />
    ));

storiesOf("MemeGarage App.Comments/Comment", module).add("default", () => (
    <Comment upvoteHandler= {action("upvoted")} comment={comment} />
));

storiesOf("MemeGarage App.Comments/Comment", module).add("default", () => (
    <Comment downvoteHandler= {action("downvoted")} comment={comment} />
));

storiesOf("MemeGarage App/Comments/Comment List",module).add("default",() => {
    const exampleComments = [
        comment,
        {...comment,user:"harold", points:4,id:2},
        {...comment,user:"harold", points:10,id:3},
        {...comment,user:"harold", points:5,id:4}
    ];
    return (
        <CommentList upvoteHandler={action("upvoted")} comments={exampleComments} />
    );
});