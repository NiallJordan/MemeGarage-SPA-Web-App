import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import api from '../../dataStore/stubAPI'
import CommentList from './commentList'
import CommentForm from './commentForm'
import './commentPage.css';
import Header from '../header';

class CommentPage extends Component{

    getPostID =() => parseInt(this.props.match.params.post_id,10);

    addComment = (comment,user) => {
        let postID =this.getPostID()
        api.addComment(postID,comment,user);
        this.setState({});
    };

    increasePoints = (commentId) => {
        let postID=this.getPostID()
        api.getPost(postID,commentId);
        this.setState({});
    };

    render(){
        let postID = this.getPostID()
        let post =api.getPost(postID);
        let postLink = post.link?
            <a href={this.props.post.link} >{post.title}</a>:
            <span> {post.tile}</span>;
        let comments = _.sortBy(post.comments,
            (comment) => - comment.points
        );
        return (
        <div>
            <Header/>
            <div className="container">
                <div className="row comment-list">
                    <h3>{postLink}</h3>
                    <CommentList comments={comments}
                    upvoteHandler= {this.increasePoints} />
                    <CommentForm post={post} addCommentHandler={this.addComment} />
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(CommentPage);
