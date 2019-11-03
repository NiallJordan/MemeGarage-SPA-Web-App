import Header from '../src/components/header'
import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { action } from '@storybook/addon-actions';

storiesOf("Author List App/Header",module).add("default",() => (<Header/> ));