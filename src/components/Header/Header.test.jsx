import React from 'react';
import { it, describe, vi, beforeEach, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks';

vi.mock('../../hooks', () => ({
  useCart: vi.fn(),
}));

vi.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: 'localhost:3000/example/path',
  }),
  useNavigate: vi.fn(),
  Link: ({ children }) => <div>{children}</div>,
}));

describe('Header', () => {
  const navigateMock = vi.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(navigateMock);
    useCart.mockReturnValue({
      numberOfItems: 5,
    });
  });

  it('Renders the header correctly', () => {
    render(<Header />);

    const logoImage = screen.getByAltText('logo');
    const cartImage = screen.getByAltText('cart');
    const webName = screen.getByText('EMobile');
    const cartNumberItems = screen.getByText('5');

    expect(logoImage).toBeInTheDocument();
    expect(cartImage).toBeInTheDocument();
    expect(webName).toBeInTheDocument();
    expect(cartNumberItems).toBeInTheDocument();
  });

  it('Calls the navigate function when the header logo is clicked', () => {
    render(<Header />);

    const headerLogo = screen.getByAltText('logo');
    fireEvent.click(headerLogo);

    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  it('calls the navigate function when the web name is clicked', () => {
    render(<Header />);

    const webName = screen.getByText('EMobile');
    fireEvent.click(webName);

    expect(navigateMock).toHaveBeenCalledWith('/');
  });
});
