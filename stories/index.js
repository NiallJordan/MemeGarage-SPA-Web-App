import Header from '../src/components/header'
import Filter from '../src/components/topicFilter';
import Meme from '../src/components/meme'
import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { action } from '@storybook/addon-actions';

const meme ={
    id:1,
    title:'Post 1',
    thumbnail:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/05/11/tnol8.jpg?w968h681',
    link:'https://www.foaas.com/',
    user:'cunt',
    comments:[],
    upvote:20,
    downvote:5
};

storiesOf("MemeGarage/Header",module).add("default",() => ( <Header/> ));

storiesOf("MemeGarageApp/Filter",module).add("default",() => ( <Filter/> ));

storiesOf("MemeGarageApp/Meme",module).add("default",() => ( <Meme meme={meme}/>));

