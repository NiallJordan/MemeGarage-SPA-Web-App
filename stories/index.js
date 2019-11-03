import Header from '../src/components/header'
import Filter from '../src/components/topicFilter';
import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { action } from '@storybook/addon-actions';

storiesOf("MemeGarage/Header",module).add("default",() => ( <Header/> ));

storiesOf("MemeGarage/Filter",module).add("default",() => ( <Filter/> ));

