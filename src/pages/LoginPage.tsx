import {
    Anchor,
    Button,
    Divider,
    Group,
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


    return (
        <Paper radius="md" p="xl" withBorder {...props}>
            <Text size="lg" fw={500}>
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

                <Divider label="Or continue with" labelPosition="center" my="lg" />

                <Group grow mb="md" mt="md">
                    <Button style={{color: "black", backgroundColor: "grey"}} variant="white" leftSection={googleIcon} radius="xl">Google</Button>
                    <Button style={{color: "black", backgroundColor: "grey"}} variant="white" radius="xl" leftSection={appleIcon}>Apple</Button>
                    <Button style={{color: "black", backgroundColor: "grey"}} variant="white" radius="xl" leftSection={githubIcon}>GitHub</Button>
                </Group>
            </form>
        </Paper>
    );
}
