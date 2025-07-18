import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import { store } from '../redux/store';

test('renders Dashboard component for authenticated users', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/dashboard']}>
        <Dashboard />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
});