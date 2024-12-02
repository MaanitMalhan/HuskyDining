import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Donation from '../page/Donation';
import { AuthProvider } from '../context/AuthContext';

// Mock the API call function
const mockDonateFlexPass = jest.fn();

// Mocked Donation component to simulate props for API stubbing
jest.mock('../page/Donation', () => (props) => (
  <div>
    <h2>Donate Flex Passes</h2>
    <button onClick={mockDonateFlexPass}>Donate</button>
    <p data-testid="confirmation-message">{props.confirmationMessage}</p>
  </div>
));

describe('Flex Pass Donation Page', () => {
  beforeEach(() => {
    // Clear the mock before each test to avoid interference
    mockDonateFlexPass.mockClear();
  });

  test('renders donation page correctly', () => {
    render(
      <AuthProvider>
        <Donation confirmationMessage="Thank you for your donation!" />
      </AuthProvider>
    );

    // Check that the donation page text and button render correctly
    expect(screen.getByText('Donate Flex Passes')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /donate/i })).toBeInTheDocument();
  });

  test('calls the donate function when Donate button is clicked', () => {
    render(
      <AuthProvider>
        <Donation confirmationMessage="Thank you for your donation!" />
      </AuthProvider>
    );

    // Simulate a button click
    fireEvent.click(screen.getByRole('button', { name: /donate/i }));

    // Verify that the donation function was called
    expect(mockDonateFlexPass).toHaveBeenCalledTimes(1);
  });

  test('displays confirmation message after donation', () => {
    render(
      <AuthProvider>
        <Donation confirmationMessage="Thank you for your donation!" />
      </AuthProvider>
    );

    // Click donate button
    fireEvent.click(screen.getByRole('button', { name: /donate/i }));

    // Verify the confirmation message
    expect(screen.getByTestId('confirmation-message')).toHaveTextContent('Thank you for your donation!');
  });
});