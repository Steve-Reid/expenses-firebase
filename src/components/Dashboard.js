import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensListFilters from './ExpensListFilters';

const Dashboard = () => (
  <div>
    <ExpensListFilters />
    <ExpenseList />
  </div>
);

export default Dashboard;
