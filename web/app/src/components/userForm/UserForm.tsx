import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useLoggedUser } from '../../data';
import { useUserMutations } from '../../data/useUserMutations';
import { defaultLanguage } from '../../utils/app.utils';
import { Section } from '../section';
import { Text } from '../text';
import { LanguageSelect } from './components/languageSelect';
import { Label, ProfileImage, ProfileImageWrapper } from './Styles';

export const UserForm = () => {
  const { loggedUser } = useLoggedUser();
  const { t, i18n } = useTranslation();
  const { updateLanguageCode } = useUserMutations();

  const [languageCode, setLanguageCode] = useState(() => {
    if (loggedUser) {
      return loggedUser.languageCode;
    }

    return defaultLanguage();
  });

  if (!loggedUser?.languageCode) {
    return <></>;
  }

  const languageCodeChangeHandler = (languageCode: any) => {
    setLanguageCode(languageCode);
    updateLanguageCode(languageCode);
    i18n.changeLanguage(languageCode);
  };

  // const audioRecognizeLanguageChangeHandler = (languageCode: any) => {
  //   userUpdateAudioRecognizeLanguageCode(languageCode);
  // };

  return (
    <div>
      {loggedUser.photo && (
        <ProfileImageWrapper>
          <ProfileImage src={loggedUser.photo} />
        </ProfileImageWrapper>
      )}

      <Section>
        <Label>{t('components.userForm.userName')}</Label>

        <Text>{loggedUser.name}</Text>
      </Section>

      <Section>
        <Label>{t('components.userForm.email')}</Label>

        <Text useTruncate>{loggedUser.email}</Text>
      </Section>

      <Section>
        <Label>{t('components.userForm.language')}</Label>

        <LanguageSelect defaultValue={languageCode} onChange={languageCodeChangeHandler} />
      </Section>

      {/*<Section>*/}
      {/*  <Label>{t('components.userForm.audioRecognizeLanguage')}</Label>*/}

      {/*  <LanguageSelect*/}
      {/*    defaultValue={loggedUser.audioRecognizeLanguageCode}*/}
      {/*    onChange={audioRecognizeLanguageChangeHandler}*/}
      {/*  />*/}
      {/*</Section>*/}
    </div>
  );
};
