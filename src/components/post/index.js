import React, {Component} from 'react';
import './post.css';

export default class Post extends Component{
    handleVote = () =>  this.props.upvoteHandler(this.props.post.id);
    handleDownVote= () => this.props.downvoteHandler(this.props.post.id);
    render(){
    let postTitle = this.props.post.thread?(
            <a href={this.props.post.thread}>{this.props.post.title}</a>
        ):(
            <span>{this.props.post.title}</span>
        );
        return(
            <article>
                <div className="post-thread-section">
                        <a className="threadIcon" href="">
                            icon
                        </a>
                        <p className="threadTitle">
                            <a className="title" target="_blanck" href="">Title of thread goes here</a>
                        </p>
                </div>
                <header>
                    <div>
                        {postTitle}
                        <span className="postedBy" > Posted by {`${this.props.post.user}`} </span>
                    </div>
                </header>
                <div className="post-body">
                    <div id="thumbnail-div">
                        <img className="post-img center" alt={this.props.post.name} src={this.props.post.thumbnail}></img>
                    </div>
                    <p className="post-meta">
                        <div className="vote-buttons left">
                            <a className="up">
                                <span className="glyphicon glyphicon-thumbs-up" onClick={this.handleVote}></span>
                            </a>
                            {`${this.props.post.points}`}
                            <a className="down">
                                <span className="glyphicon glyphicon-thumbs-down" onClick={this.handleDownVote}></span>
                            </a>

                        </div>
                        <span className="comments">
                            <a href="/">Comments</a>
                        </span>
                    </p>
                </div>
            </article>
        );
    }
}
