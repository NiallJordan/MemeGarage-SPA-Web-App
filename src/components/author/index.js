import React, {Component} from 'react';

class Author extends Component{
    state = {
        name: this.props.author.name,
        genre: this.props.author.genre,
        numberOfBooks: this.props.author.numberOfBooks,
    }
};