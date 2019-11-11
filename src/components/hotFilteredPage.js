import React, { Component } from 'react';
import PostList from './postList';
import Filter from './topicFilter';
import Header from './header';
import Form from './postForm';
import request from "superagent";
import api from '../dataStore/stubAPI';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';
import localCache from '../localCache';
import { withRouter } from 'react-router-dom';
import './hotPage.css'

class HotFilteredPage extends Component {
    componentDidMount(){
        request.get("http://localhost:3001/posts").end((err,res) => {
            if(res){
                let { results : posts} = JSON.parse(res.text);
                api.initialize(posts);
                //localCache.populate(posts.json);
                this.setState({});
            }else{
                console.log(err);
            }
        });
    }

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
        let posts = _.sortBy(api.getPosts(),post => -post.points);
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
export default withRouter(HotFilteredPage);