import React, {Component} from 'react';
import './post.css';

export default class Post extends Component{
    render(){
    let postTitle = this.props.post.thread?(
            <a href={this.props.post.thread}>{this.props.post.title}</a>
        ):(
            <span>{this.props.post.title}</span>
        );
        return(
            <article>
                <div class="post-thread-section">
                        <a class="threadIcon" href="">
                            <img src={`${this.props.post.thumbnail}`} ></img>
                        </a>
                        <p class="threadTitle">
                            <a class="title" target="_blanck" href="">Title of thread goes here</a>
                        </p>
                </div>
                <header>
                    <div>
                        {postTitle}
                        <span class="postedBy" > Posted by {`${this.props.post.user}`} </span>
                    </div>
                </header>
                <div className="post-body">
                    <div id="thumbnail-div">
                        <img className="post-img center" alt={this.props.post.name} src={this.props.post.thumbnail}></img>
                    </div>
                    <p className="post-meta">
                        <div class="vote-buttons left">
                            <a class="up" >
                                <span class="glyphicon glyphicon-thumbs-up"></span>
                            </a>
                            {`${this.props.post.upvote}`}
                            <a class="down">
                                <span class="glyphicon glyphicon-thumbs-down"></span>
                            </a>
                            {`${this.props.post.downvote}`}
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
