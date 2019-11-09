import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './post.css';
import buttons from "../../config/buttonsConfig";
import { appendFileSync } from 'fs';
import api from '../../dataStore/stubAPI';

export default class Post extends Component{
    handleVote = () =>  {this.props.upvoteHandler(this.props.post.id);};
    handleDownVote= () => {this.props.downvoteHandler(this.props.post.id);};

    state = {
        status:"",
        title: this.props.post.title,
        previousDetails:{
            title: this.props.post.title,
        }
    };

    handleEdit = () => this.setState({status:'edit'});
    handleCancel=()=>{
        let{title} = this.state.previousDetails;
        this.setState({status:"",title});
    };
    handleSave = e => {
        e.preventDefault();
        let updatedTitle = this.state.title.trim();
        if(!updatedTitle){
            return;
        }
        let {title} = this.state;
        this.setState({status:"", previousDetails:{title}});
        api.update(this.state.previousDetails.title,updatedTitle);
    };
    handleTitleChange = e => this.setState({title: e.target.value});
    handleDelete = () => this.setState({status:'del'});
    handleConfirm=(e) => {
        e.preventDefault();
        this.props.deleteHandler(this.state.title);
    };

    render(){

    let activeButtons = buttons.normal;
    let leftButtonHandler = this.handleEdit;
    let rightButtonHandler = this.handleDelete;

    if (this.state.status === 'edit') {
        activeButtons = buttons.edit;
        leftButtonHandler = this.handleSave;
        rightButtonHandler = this.handleCancel;
    }else if(this.state.status === 'del') {
        activeButtons = buttons.delete;
        leftButtonHandler = this.handleCancel;
        rightButtonHandler = this.handleConfirm;
    }
        return(
            <article>
                <div className="post-thread-section">
                        <a className="threadIcon" href="/">
                            <img className="post-img center" alt={this.props.post.title} src={this.props.post.thumbnail}></img>
                        </a>
                        <p className="threadTitle">
                            <a className="thread" target="_blank" href="">{this.props.post.thread}</a>
                        </p>
                </div>
                {this.state.status === "edit" ?(
                    <header>
                        <div>
                            <input type="text" className="form-control" value={this.state.title} onChange={this.handleTitleChange}/>
                            <span className="postedBy" > Posted by {`${this.props.post.user}`} </span>
                        </div>
                    </header>
                ):(
                <header>
                    <div>
                        <span>{this.props.post.title}</span>
                        <span className="postedBy" > Posted by {`${this.props.post.user}`} </span>
                    </div>
                </header>
                )}
                <div className="post-body">
                    <div id="image-div">
                    <img className="post-img center" alt={this.props.post.title} src={this.props.post.imageUrl}></img>
                    </div>
                    <p className="post-meta">
                        <div className="vote-buttons left">
                            <span className="glyphicon glyphicon-thumbs-up" onClick={this.handleVote}></span>
                            {`${this.props.post.points}`}
                            <span className="glyphicon glyphicon-thumbs-down" onClick={this.handleDownVote}></span>
                        </div>
                        <span className="comments">
                            <Link to={`/posts/${this.props.post.id}` }>Comments</Link>
                        </span>
                    </p>
                    <div className="comment-display">
                        <p>{this.props.post.comments}</p>
                    </div>
                    <div className="btn-group d-flex" role="group" aria-label="...">
                        <button type="button" className={"btn btn-default w-100 glyphicon glyphicon-edit " + activeButtons.leftButtonColor} onClick={leftButtonHandler}>
                            {activeButtons.leftButtonVal}
                        </button>
                        <button type="button" className={"btn btn-danger w-100 glyphicon glyphicon-trash" + activeButtons.rightButtonColor} onClick={rightButtonHandler}>
                            {activeButtons.rightButtonVal}
                        </button>
                    </div>
                </div>
            </article>
        );
    }
}