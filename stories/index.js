import Header from '../src/components/header'
import Filter from '../src/components/filter';
import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { action } from '@storybook/addon-actions';

storiesOf("Author List App/Header",module).add("default",() => ( <Header/> ));

storiesOf("Author List App/Filter",module).add("default",() => ( <Filter/> ));

