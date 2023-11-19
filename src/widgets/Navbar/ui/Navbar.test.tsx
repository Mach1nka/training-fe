import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  renderPreset,
} from '@/shared/lib/jest/renderPreset';
import '@/shared/lib/jest/matchMedia.mock';
import { UserRole } from '@/entities/User';
import { api } from '@/shared/api/api';
import { loginReducer } from '@/features/AuthUserByUsername/model/slice/loginSlice';

import { Navbar } from './Navbar';

describe('Navbar', () => {
  describe('Authenticated', () => {
    beforeEach(() => {
      renderPreset(<Navbar />, {
        initialState: {
          user: {
            authData: {
              id: '1',
              username: '',
              role: [UserRole.ADMIN],
            },
          },
        },
      });
    });

    test('Test Render', () => {
      expect(screen.getByTestId('Navbar')).toBeInTheDocument();
      expect(screen.getByTestId('AccountActions.button')).toBeInTheDocument();
      expect(screen.getByTestId('Notification.button')).toBeInTheDocument();
    });

    test('Test Logout', async () => {
      await userEvent.click(screen.getByTestId('AccountActions.button'));
      await userEvent.click(screen.getByTestId('AccountActions.logout.button'));

      expect(screen.getByTestId('Navbar.login.button')).toBeInTheDocument();
    });

    // test('Test Notifications', () => {
    // NOTE: Need to figure out how to mock RTK Query.
    // });
  });

  describe('Not Authenticated', () => {
    beforeEach(() => {
      renderPreset(<Navbar />, {
        initialState: {
          user: {
            authData: undefined,
          },
          loginForm: {
            isLoading: false,
            username: '',
            password: '',
          },
        },
        asyncReducers: {
          loginForm: loginReducer,
        },
      });
    });

    test('Test Render', () => {
      expect(screen.getByTestId('Navbar')).toBeInTheDocument();
      expect(screen.getByTestId('Navbar.login.button')).toBeInTheDocument();
    });

    test('Test Login', async () => {
      const mockedRequest = jest.spyOn(api, 'post');
      await userEvent.click(screen.getByTestId('Navbar.login.button'));
      await userEvent.type(screen.getByTestId('LoginForm.username'), 'John Doe');
      await userEvent.type(screen.getByTestId('LoginForm.password'), 'pass123');
      await userEvent.click(screen.getByTestId('LoginForm.submit.button'));

      expect(mockedRequest).toHaveBeenCalled();
    });
  });
});
