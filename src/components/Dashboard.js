import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensListFilters from './ExpensListFilters';
import ExpensesSummary from './ExpensesSummary';

const Dashboard = () => (
  <div>
    <ExpensListFilters />
    <ExpensesSummary />
    <ExpenseList />
  </div>
);

export default Dashboard;
