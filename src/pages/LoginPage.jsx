import { Button, Input, Stack, Flex, Box, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { NavLink } from "react-router-dom";

const schema = z.object({
    username: z.string().min(1, "Nazwa użytkownika jest wymagana"),
    password: z.string().min(6, "Hasło musi mieć co najmniej 6 znaków"),
})

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Flex
            direction="column"
            gap="6"
            bg="gray.900"
            justify="center"
            align="center"
            minHeight="100vh"
            p={4}
        >
            <Box
                bg="blackAlpha.600"
                p={8}
                borderRadius="md"
                boxShadow="lg"
                width="full"
                maxW="md"
            >
                <Stack spacing={4}>
                    <Text fontSize="2xl" fontWeight="bold">
                        Logowanie
                    </Text>
                    <Text fontSize="sm" color="gray.300">
                        Zaloguj się na stronie
                    </Text>
                </Stack>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={4} mt={4}>
                        <div>
                            <label htmlFor="name">Nazwa użytkownika</label>
                            <Input id="name" {...register("username")} />
                            {errors.username && <Text color="red.500">{errors.username.message}</Text>}
                        </div>

                        <div>
                            <label htmlFor="password">Hasło</label>
                            <Input id="password" type="password" {...register("password")} />
                            {errors.password && <Text color="red.500">{errors.password.message}</Text>}
                        </div>

                        <Button type="submit" colorScheme="teal" width="full" mt={4}>
                            Zaloguj się
                        </Button>
                    </Stack>
                </form>
            </Box>

            <Text fontSize="md" color="gray.300">
                Nie masz konta?
                <Text as="span" display="inline" color="white" fontWeight="bold">
                    <NavLink to="/register"> Zarejestruj się</NavLink>
                </Text>
            </Text>

        </Flex>
    )
}

export default LoginPage