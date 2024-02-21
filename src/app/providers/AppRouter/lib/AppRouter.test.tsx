import { screen } from '@testing-library/react';

import { renderPreset } from '@/shared/lib/jest/renderPreset';
import { RoutePath } from '@/shared/constant/router';
import { UserRole } from '@/entities/User';

import { AppRouter } from './AppRouter';

describe('AppRouter', () => {
  test('Page must be rendered', async () => {
    renderPreset(<AppRouter />, { route: RoutePath.about() });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Redirect to NotFoundPage', async () => {
    renderPreset(<AppRouter />, { route: '/undefined-page' });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Redirect of unauthorized user', async () => {
    renderPreset(<AppRouter />, { route: RoutePath.profile('1') });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Allow authorized user to go to ProfilePage', async () => {
    renderPreset(<AppRouter />, {
      route: RoutePath.profile('1'),
      initialState: { user: { authData: { id: '', username: '', role: [UserRole.USER] } } },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('Redirect to ForbiddenPage', async () => {
    renderPreset(<AppRouter />, {
      route: RoutePath.adminPanel(),
      initialState: { user: { authData: { id: '', username: '', role: [UserRole.USER] } } },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });
});
