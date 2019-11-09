import React, { Component,Fragment} from "react";
import './comment.css'

export default class Comment extends Component {
    handleUpvote = () =>  {
        this.props.upvoteHandler(this.props.post.comment.id);
    };
    handleDownVote= () =>{
        this.props.downvoteHandler(this.props.post.comment.id);
    };
    render(){
        return(
            <Fragment>
                <div>
                    <p>
                        <a>{this.props.comment.user}</a>
                        <span className="meta" > Score: {this.props.post.comment.points} </span>
                    </p>
                </div>
                <span className="comment">
                    {`${this.props.comment.comment}`}
                </span>
                <div>
                <span className="glyphicon glyphicon-thumbs-up" onClick={this.handleUpvote}></span>
                <span className="glyphicon glyphicon-thumbs-down" onClick={this.handleDownVote}></span>
                </div>
            </Fragment>
        );
    }
}