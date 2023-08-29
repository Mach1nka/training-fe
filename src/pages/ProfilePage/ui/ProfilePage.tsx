import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/EditProfileInfo';
import { Page } from '@/shared/ui/Page/Page';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

const ProfilePage: FC = () => {
  const { t } = useTranslation('profile');
  const { id } = useParams();

  if (!id) {
    return <Text theme={TextTheme.ERROR} title={t('error.notFound')} />;
  }

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
