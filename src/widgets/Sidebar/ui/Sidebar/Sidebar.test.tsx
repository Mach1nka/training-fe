import { screen, fireEvent } from '@testing-library/react';

import {
  renderPreset,
} from '@/shared/lib/jest/renderPreset';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Test render', () => {
    renderPreset(<Sidebar />);
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });

  test('Test collapse menu', () => {
    renderPreset(<Sidebar />);
    const toggleBtn = screen.getByTestId('Sidebar.toggle.button');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
  });
});
