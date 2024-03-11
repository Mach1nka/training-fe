import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderPreset } from '@/shared/lib/jest/renderPreset';
import type { Profile } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { api } from '@/shared/api/api';
import { UserRole } from '@/entities/User';

import { profileReducer } from '../../model/slice/profileSlice';

import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  userId: '1',
  firstname: 'name',
  lastname: 'surname',
  age: 35,
  country: Country.KAZAKHSTAN,
  currency: Currency.RUB,
  avatar: '',
  username: 'user',
};

describe('EditableProfileCard', () => {
  beforeEach(() => {
    renderPreset(<EditableProfileCard id="1" />, {
      initialState: {
        profile: {
          isLoading: false,
          readonly: true,
          data: profile,
          form: profile,
        },
        user: {
          authData: {
            id: '1',
            username: '',
            role: [UserRole.ADMIN],
          },
        },
      },
      asyncReducers: { profile: profileReducer },
    });
  });

  test('Test edit btn', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.edit.button'));

    expect(screen.getByTestId('EditableProfileCardHeader.save.button')).toBeInTheDocument();
  });

  test('Test cancel btn', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.edit.button'));
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.cancel.button'));

    expect(screen.getByTestId('EditableProfileCardHeader.edit.button')).toBeInTheDocument();
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('name');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('surname');
  });

  test('Test validation', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.edit.button'));
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.save.button'));

    expect(
      screen.getAllByTestId('EditableProfileCardError.paragraph').length,
    ).toBeGreaterThanOrEqual(1);
  });

  test('Test success scenario', async () => {
    const mockedRequest = jest.spyOn(api, 'put');
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.edit.button'));
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'name1');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'lastname1');
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.save.button'));

    expect(mockedRequest).toHaveBeenCalled();
  });
});
