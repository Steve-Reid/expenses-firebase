import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpensListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenListItem with expense', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});
