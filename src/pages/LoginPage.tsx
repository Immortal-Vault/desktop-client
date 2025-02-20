import {
    Anchor,
    Button,
    Divider,
    Group,
    Modal,
    Paper,
    PaperProps,
    PasswordInput,
    Stack,
    Text,
    TextInput,
} from '@mantine/core';
//import { useTranslation } from 'react-i18next';
import { IconBrandGoogleFilled, IconBrandAppleFilled, IconBrandGithubFilled } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';
import { useState } from 'react';

export default function LoginPage(props: PaperProps) {
    // function LanguageSwitcher() {
    //     const { i18n } = useTranslation();
    //
    //     const toggleLanguage = () => {
    //         i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    //     };
    //
    //     return <Button onClick={toggleLanguage}>Сменить язык ({i18n.language})</Button>;
    // }
    // const { t } = useTranslation();
    const googleIcon = <IconBrandGoogleFilled size={20} />;
    const appleIcon = <IconBrandAppleFilled size={20} />;
    const githubIcon = <IconBrandGithubFilled size={20} />;
    const [type, toggle] = useToggle(['login', 'register']);
    const [opened, setOpened] = useState(false);
    const [email, setEmail] = useState('');
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        // validate: {
        //     email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
        //     password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        // },
    });
    const handlePasswordReset = () => {
        // Логика восстановления пароля
        console.log('Восстановление пароля для:', email);
        setOpened(false);
    };


    return (
        <Paper radius="md" p="xl" withBorder {...props}>
            <Text size="lg" fw={500} style={{marginBottom: '1rem'}}>
                Welcome to Immortal Vault, {type} with
            </Text>

            <form onSubmit={form.onSubmit(() => {})}>
                <Stack>
                    {type === 'register' && (
                        <TextInput
                            label="Name"
                            placeholder="Your name"
                            value={form.values.name}
                            onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                            radius="md"
                        />
                    )}

                    <TextInput
                        required
                        label="Email"
                        placeholder="hello@mantine.dev"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email && 'Invalid email'}
                        radius="md"
                    />

                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Your password"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password && 'Password should include at least 6 characters'}
                        radius="md"
                    />
                </Stack>

                <Group justify="space-between" mt="xl">
                    <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                        {type === 'register'
                            ? 'Already have an account? Login'
                            : "Don't have an account? Register"}
                    </Anchor>
                    <Button type="submit" radius="xl">
                        {upperFirst(type)}
                    </Button>
                </Group>
                {type === 'register' && (<Anchor href="#" size="sm" mt="xs" style={{textAlign:"center"}}  display="block" onClick={() => setOpened(true)}>
                    Забыли пароль?
                </Anchor>)}

                <Divider label="Or continue with" labelPosition="center" my="lg" />

                <Group grow mb="md" mt="md">
                    <Button /*style={{color: "black", backgroundColor: "grey"}}*/ variant="transparent" leftSection={googleIcon}>Google</Button>
                    <Button /*style={{color: "black", backgroundColor: "grey"}}*/ variant="transparent" leftSection={appleIcon}>Apple</Button>
                    <Button /*style={{color: "black", backgroundColor: "grey"}}*/ variant="transparent" leftSection={githubIcon}>GitHub</Button>
                </Group>
                <Modal opened={opened} onClose={() => setOpened(false)} title="Восстановление пароля" radius="md">
                <TextInput
                    radius="md"
                    label="Введите вашу почту"
                    placeholder="example@mail.com"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    required
                />
                <Button mt="md" ml="auto" display="flex" radius="xl" onClick={handlePasswordReset}>Восстановить</Button>
            </Modal>
            </form>
        </Paper>
    );
}
