import {createStore} from 'redux';

import {books} from './Components /Redux/Reducer';

import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(books, composeWithDevTools());