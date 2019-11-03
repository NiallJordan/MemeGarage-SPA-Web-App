import React, {Component} from 'react';
import './meme.css';

export default class Meme extends Component{
    render(){
        let memeTitle = this.props.meme.link?(
            <a href={this.props.meme.link}>{this.props.meme.title}</a>
        ):(
            <span>{this.props.meme.title}</span>
        );
        return(
            <article>
                <div class="post-thread-section">
                        <a class="threadIcon" href="">
                            <img src="https://accounts-cdn.9gag.com/media/default-avatar/1_77_100_v0.jpg"></img>
                        </a>
                        <p class="threadTitle">
                            <a class="title" target="_blanck" href="">Title of thread goes here</a>
                        </p>
                </div>
                <header>
                    <div>
                        {memeTitle}
                        <span class="postedBy" > Posted by {`${this.props.meme.user}`} </span>
                    </div>
                </header>
                <div className="post-body">
                    <div id="thumbnail-div">
                        <img className="post-img center" alt={this.props.meme.name} src={this.props.meme.thumbnail}></img>
                    </div>
                    <p className="post-meta">
                        <div class="vote-buttons left">
                            <a class="up" >
                                <span class="glyphicon glyphicon-thumbs-up"></span>
                                {`${this.props.meme.upvote}`}
                            </a>

                            <a class="down">
                                <span class="glyphicon glyphicon-thumbs-down"></span>
                                {`${this.props.meme.downvote}`}
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
