import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';

test('renders login form', () => {
  render(<Login />);
  
  // Check if the "Login" button is present by its type attribute
  const loginButton = screen.getByRole('button', { name: 'Login' });
  expect(loginButton).toBeInTheDocument();
});

test('input fields are rendered', () => {
  render(<Login />);
  
  // Check if the username and password input fields are rendered
  const usernameInput = screen.getByLabelText('Username:');
  const passwordInput = screen.getByLabelText('Password:');
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('error message is displayed on invalid login', () => {
  render(<Login />);
  
  // Enter incorrect credentials
  fireEvent.change(screen.getByLabelText('Username:'), { target: { value: 'invalidUser' } });
  fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'invalidPassword' } });
  
  // Attempt to login
  fireEvent.click(screen.getByRole('button', { name: 'Login' }));
  
  // Check if the error message is displayed
  const errorMessage = screen.getByText('Invalid username or password');
  expect(errorMessage).toBeInTheDocument();
});

test('error message is not displayed on valid login', () => {
  render(<Login />);
  
  // Enter correct credentials
  fireEvent.change(screen.getByLabelText('Username:'), { target: { value: 'user' } });
  fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'password' } });
  
  // Attempt to login
  fireEvent.click(screen.getByRole('button', { name: 'Login' }));
  
  // Check if the error message is not displayed
  const errorMessage = screen.queryByText('Invalid username or password');
  expect(errorMessage).toBeNull();
});
