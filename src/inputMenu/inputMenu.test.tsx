import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputMenu from './inputMenu';
import useInputCard from './inputCard/useInputCard';

jest.mock('./inputCard/useInputCard', () => jest.fn(() => ({
  cardCount: 1,
  handleAddCard: jest.fn(),
  handleDeleteCard: jest.fn(),
  formData: [{ creatureName: '', creatureType: '', challengeRating: '', civilian: false }],
  handleInputChange: jest.fn(),
  data: [],
})));

jest.mock('../util/cdn', () => ({
  getImageFromCdn: jest.fn().mockReturnValue('mockImagePath/delete-black.png'),
}));

jest.mock('./itemDisplay/itemDisplay', () => ({ items }: { items: any[] }) => (
  <div data-testid="item-display">
    {items.map((item, index) => (
      <div key={index}>{item.name}</div>
    ))}
  </div>
));

describe('InputMenu component', () => {
  beforeEach(() => {
    (useInputCard as jest.Mock).mockClear();
  });

  it('should render input menu correctly', () => {
    render(<InputMenu />);

    expect(screen.getByAltText('delete entry')).toBeInTheDocument();
    expect(screen.getByAltText('add entry')).toBeInTheDocument();
    expect(screen.getByAltText('save')).toBeInTheDocument();
    expect(screen.queryByTestId('item-display')).not.toBeInTheDocument();
  });

  it('should handle save button correctly', () => {
    render(<InputMenu />);
    fireEvent.click(screen.getByAltText('save'));

    expect(screen.getByTestId('item-display')).toBeInTheDocument();
  });

  it('should handle add card button correctly', () => {
    render(<InputMenu />);
    fireEvent.click(screen.getByAltText('add entry'));

    expect((useInputCard as jest.Mock).mock.calls.length).toBe(2);
  });

  it('should handle delete card button correctly', () => {
    render(<InputMenu />);
    fireEvent.click(screen.getByAltText('delete entry'));

    expect((useInputCard as jest.Mock).mock.calls.length).toBe(2);
  });
});
