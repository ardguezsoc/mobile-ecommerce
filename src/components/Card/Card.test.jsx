import React from 'react';
import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  const mobileItem = {
    imgUrl: 'path/to/image.jpg',
    brand: 'Brand',
    model: 'Model',
    price: 999,
    id: '123',
  };

  test('Renders the mobile item details correctly', () => {
    render(<Card mobileItem={mobileItem} />);

    const image = screen.getByAltText('product-image');
    const brand = screen.getByText('Brand');
    const model = screen.getByText('Model');
    const price = screen.getByText('999$');
    const viewMoreButton = screen.getByRole('button');

    expect(image).toBeInTheDocument();
    expect(brand).toBeInTheDocument();
    expect(model).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(viewMoreButton).toBeInTheDocument();
  });

  test('Calls the navigate function when the "View more" button is clicked', () => {
    const navigateMock = vi.fn();
    vi.mock('react-router-dom', () => ({
      useNavigate: () => navigateMock,
    }));

    render(<Card mobileItem={mobileItem} navigateTo={navigateMock} />);

    const viewMoreButton = screen.getByRole('button');
    fireEvent.click(viewMoreButton);

    expect(navigateMock).toHaveBeenCalledWith('/mobile/123');
  });

  test('Free price is displayed when price is undefined', () => {
    mobileItem.price = undefined;

    render(<Card mobileItem={mobileItem} navigateTo={vi.fn()} />);

    screen.getByText('Free');
  });
});
