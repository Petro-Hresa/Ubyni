require('webpack-hot-middleware/client?reload=true')
require('./index.html')
import React from 'react';
import {render} from 'react-dom';
import App from '../src/App';

render( <App/>, document.getElementById('root'))
