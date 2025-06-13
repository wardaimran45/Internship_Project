import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductCardProps } from '@interfaces/CardProps';
import ProductCard from 'Components/ProductCard';

const mockProps: ProductCardProps = {
  brand: 'Apple',
  title: 'iPhone 11 128 Go Double SIM Noir Sidéral',
  newPrice: 754,
  usedPrice: '720,99',
  imageUrl: 'https://example.com/iphone.jpg',
};

describe('ProductCard Component', () => {
  test('renders correctly with all props', () => {
    render(<ProductCard {...mockProps} />);

    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    expect(screen.getByText(/754 €/i)).toBeInTheDocument();
    expect(screen.getByText(/Neuf/i)).toBeInTheDocument();
    expect(screen.getByText(/Occasion dès/i)).toBeInTheDocument();
    expect(screen.getByText(/720,99 €/i)).toBeInTheDocument();
  });

  test('does not render if any prop is missing', () => {
    const { container } = render(<ProductCard {...mockProps} brand={undefined} />);
    expect(container.firstChild).toBeNull(); // Component doesn't render if data is missing
  });

  test('renders "Neuf" with red color #BF0000', () => {
  render(<ProductCard {...mockProps} />);
  const neufText = screen.getByText(/Neuf/i);
  expect(neufText).toHaveStyle('color: #BF0000');
});
 
});
