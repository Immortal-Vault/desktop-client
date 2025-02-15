import { TextInput, PasswordInput, Button, Anchor, Stack, Title, Paper, Container } from '@mantine/core';

export default function LoginPage() {
    return (
        <Container size={420} my={40}>
            <Title style={{textAlign: "center", mb: "md"}}>
                Вход в Immortal Vault
            </Title>
            <Paper withBorder shadow="md" p={30} radius="md">
                <Stack>
                    <TextInput label="Почта" placeholder="example@mail.com" required />
                    <PasswordInput label="Пароль" placeholder="Ваш пароль" required />
                    <Button fullWidth mt="sm">Войти</Button>
                </Stack>
                <Anchor href="#" size="sm" mt="md" style={{textAlign: "center"}} display="block">
                    Зарегистрироваться
                </Anchor>
            </Paper>
        </Container>
    );
}
