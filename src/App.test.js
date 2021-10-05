import { render, screen } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom';

test('renders learn react link', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
});

test('snapshot test', () => {
  const {asFragment} = render(<MemoryRouter><App /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
})


test('add works 2+4', () => {
  const {queryByText} = render(<MemoryRouter initialEntries={['/add/2/4']}><App /></MemoryRouter>);
  expect(queryByText("6")).toBeInTheDocument();
})

test('add works -2+-4', () => {
  const {queryByText} = render(<MemoryRouter initialEntries={['/add/-2/-4']}><App /></MemoryRouter>);
  expect(queryByText("-6")).toBeInTheDocument();
})

test('subtract works 4-1', () => {
  const {queryByText} = render(<MemoryRouter initialEntries={['/subtract/4/1']}><App /></MemoryRouter>);
  expect(queryByText("3")).toBeInTheDocument();
})

test('subtract works -4-1', () => {
  const {queryByText} = render(<MemoryRouter initialEntries={['/subtract/-4/1']}><App /></MemoryRouter>);
  expect(queryByText("-5")).toBeInTheDocument();
})


test('multiply works 2*4', () => {
  const {queryByText} = render(<MemoryRouter initialEntries={['/multiply/2/4']}><App /></MemoryRouter>);
  expect(queryByText("8")).toBeInTheDocument();
})

test('multiply works 2*-4', () => {
  const {queryByText} = render(<MemoryRouter initialEntries={['/multiply/2/-4']}><App /></MemoryRouter>);
  expect(queryByText("-8")).toBeInTheDocument();
})

test('subtract works 10/2', () => {
  const {queryByText} = render(<MemoryRouter initialEntries={['/divide/10/2']}><App /></MemoryRouter>);
  expect(queryByText("5")).toBeInTheDocument();
})

test('subtract works -10/2', () => {
  const {queryByText} = render(<MemoryRouter initialEntries={['/divide/-10/2']}><App /></MemoryRouter>);
  expect(queryByText("-5")).toBeInTheDocument();
})