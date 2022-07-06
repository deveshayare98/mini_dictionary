import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
});

test('render search Component in the document',()=>{
  const component= render(<App/>);
  const childComponent = component.getByPlaceholderText('Type here...');
  expect(childComponent).toBeInTheDocument();
})
