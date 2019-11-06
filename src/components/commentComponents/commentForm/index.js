import React, {Component } from 'react';

export default class CommentForm extends Component{
    state = {comment:"", user:""};
    handleCommentChange = (e) => {this.setState({comment: e.target.value})};
    handleUsernameChange = (e) => {this.setState({user: e.target.value})};
    submitComment= (e) =>{
        e.preventDefault();
        let comment = this.state.comment.trim();
        let user= this.state.user.trim();
        if (!comment){
            return;
        }
        this.props.addCommentHandler(comment,user);
        this.setState({comment:"",name:""});
    };
    render(){
        return(
            <form>
                <h2>Add a comment</h2>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Comment" value={this.state.comment} onChange={this.handleCommentChange} />
                </div>
                <div className="form-group">
                    <input className="text" className="Username" placeholder="Username"  value={this.state.user} onChange={this.handleUsernameChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.submitComment}>Submit Comment</button>
            </form>
        )
    }
}