import React, {Fragment} from 'react';
import Comment from '../comment';

export default ( {comments, upvoteHandler}) => {
    let listOfComments = comments.map(
        (comment,index)=>
        <Comment key={index} comment={comment} upvoteHandler={upvoteHandler} />
    )
    return(
        <Fragment>
            {listOfComments}
        </Fragment>
    )
}