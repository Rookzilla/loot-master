import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputCard from './inputCard';

jest.mock('../../util/cdn', () => ({
  getImageFromCdn: jest.fn().mockReturnValue('mockImagePath/bin.png'),
}));

describe('InputCard component', () => {
  const mockHandleDeleteCard = jest.fn();
  const mockHandleInputChange = jest.fn();

  const formData = {
    creatureName: 'Test Creature',
    creatureType: 'Beast',
    civilian: false,
    challengeRating: '10',
  };

    render(
      <InputCard
        index={1}
        formData={formData}
        handleDeleteCard={mockHandleDeleteCard}
        handleInputChange={mockHandleInputChange}
      />
    );

  it('should render input fields correctly', () => {
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Type:')).toBeInTheDocument();
    expect(screen.getByLabelText('Civilian:')).toBeInTheDocument();
    expect(screen.getByLabelText('Challenge Rating:')).toBeInTheDocument();
    expect(screen.getByAltText('delete entry')).toBeInTheDocument();
  });

  it('should input update correctly', () => {
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'Updated Name' } });
    fireEvent.change(screen.getByLabelText('Type:'), { target: { value: 'Dragon' } });
    fireEvent.click(screen.getByLabelText('Civilian:'));
    fireEvent.change(screen.getByLabelText('Challenge Rating:'), { target: { value: '15' } });

    expect(mockHandleInputChange).toHaveBeenCalledTimes(4);
    expect(mockHandleInputChange).toHaveBeenCalledWith(1, 'creatureName', 'Updated Name');
    expect(mockHandleInputChange).toHaveBeenCalledWith(1, 'creatureType', 'Dragon');
    expect(mockHandleInputChange).toHaveBeenCalledWith(1, 'civilian', true);
    expect(mockHandleInputChange).toHaveBeenCalledWith(1, 'challengeRating', '15');
  });

  it('should items correctly', () => {
    fireEvent.click(screen.getByAltText('delete entry'));
    expect(mockHandleDeleteCard).toHaveBeenCalledTimes(1);
  });
});
