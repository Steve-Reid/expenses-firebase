import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleEexpenes from './selectors/expenses';
import AppRouter from './routers/AppRouter';

moment.locale('en-gb');
const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
// store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleEexpenes(state.expenses, state.filters);

console.log('------------------------------------');
console.log(visibleExpenses);
console.log('------------------------------------');

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
