import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import Test from './Test';

describe('Test component', () => {
  beforeAll(() => {
    render(<Test />);
  });

  it('should have the right message in the dom', () => {
    const message = 'Test';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});
