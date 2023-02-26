import { screen, fireEvent } from '@testing-library/react';

import { Sidebar } from './Sidebar';
import {
  renderPreset,
} from '@/shared/lib/jest/renderPreset';

describe('Sidebar', () => {
  test('Test render', () => {
    renderPreset(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test render', () => {
    renderPreset(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
