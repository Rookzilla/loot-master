import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FloatingLabelInput from './floatingLabelInput';
import * as S from './floatingLabelInput.styles';

describe('FloatingLabelInput component', () => {
  const mockProps = {
    label: 'Test Label',
    onFocus: jest.fn(),
    onBlur: jest.fn(),
    onChange: jest.fn(),
    placeholder: 'Enter value...',
  };

  render(<FloatingLabelInput {...mockProps} />);

  it('should render input field and label correctly', () => {
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter value...')).toBeInTheDocument();
  });

  it('should handle focus and blur events', () => {
    const input = screen.getByPlaceholderText('Enter value...');
    fireEvent.focus(input);

    expect(input).toHaveFocus();
    expect(mockProps.onFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(input);

    expect(input).not.toHaveFocus();
    expect(mockProps.onBlur).toHaveBeenCalledTimes(1);
  });

  it('should handle change event', () => {
    const input = screen.getByPlaceholderText('Enter value...');
    fireEvent.change(input, { target: { value: 'Test Input' } });

    expect(input).toHaveValue('Test Input');
    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
    expect(mockProps.onChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
