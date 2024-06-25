import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemDisplay from './itemDisplay';

jest.mock('../../util/cdn', () => ({
  getCategoryColor: jest.fn().mockImplementation((category: string) => `mockColor-${category}`),
  getImageFromCdn: jest.fn().mockImplementation((image: string) => `mockImagePath/${image}`),
}));

describe('ItemDisplay component', () => {
  const items = [
    { name: 'Item 1', category: 'category1', description: 'Description for Item 1', effect: 'Effect for Item 1', cost: 10, weight: 5 },
    { name: 'Item 2', category: 'category2', cost: 20, weight: 3 },
  ];

  render(<ItemDisplay items={items}/>);

  it('renders component with items', () => {
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByAltText('Item Icon')).toBeInTheDocument();
    expect(screen.getByAltText('info-icon')).toBeInTheDocument();
    expect(screen.getByAltText('delete-icon')).toBeInTheDocument();
  });

  it('handles item click correctly', () => {
    fireEvent.click(screen.getByText('Item 1'));
    expect(screen.getByText('Description for Item 1')).toBeInTheDocument();
    expect(screen.getByText('Effect for Item 1')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Item 1'));
    expect(screen.queryByText('Description for Item 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Effect for Item 1')).not.toBeInTheDocument();
  });

  it('handles item delete correctly', () => {
    fireEvent.click(screen.getByAltText('delete-icon'));
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });
});
