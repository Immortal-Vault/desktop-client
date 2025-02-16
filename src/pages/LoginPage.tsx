import { TextInput, PasswordInput, Button, Anchor, Stack, Title, Paper, Container } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { IconAt, IconLock } from '@tabler/icons-react';

export default function LoginPage() {
    function LanguageSwitcher() {
        const { i18n } = useTranslation();

        const toggleLanguage = () => {
            i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        };

        return <Button onClick={toggleLanguage}>Сменить язык ({i18n.language})</Button>;
    }
    const { t } = useTranslation();
    const emailIcon = <IconAt size={16} />;
    const lockIcon = <IconLock size={16} />;


    return (
        <Container size={420} my={40}>
            <Title style={{textAlign: "center", mb: "md"}}>
                {t('login.title')}
            </Title>
            <Paper withBorder shadow="md" p={30} radius="md">
                <Stack>
                    <TextInput label={t('login.email')} placeholder="example@mail.com" required leftSectionPointerEvents="none" leftSection={emailIcon}/>
                    <PasswordInput label={t('login.password')} placeholder="*********" required leftSectionPointerEvents="none" leftSection={lockIcon}/>
                    <Button fullWidth mt="sm">{t('login.button')}</Button>
                </Stack>
                <Anchor href="#" size="sm" mt="md" style={{textAlign: "center"}} display="block">
                    {t('login.register')}
                </Anchor>
            </Paper>
            <LanguageSwitcher/>
        </Container>
    );
}
