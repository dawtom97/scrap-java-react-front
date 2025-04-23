import { Button, Input, Stack, Flex, Box, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MainTemplate from "./MainTemplate";
import useSearch from "../services/useSearch";
import { useNavigate } from "react-router-dom";

const schema = z.object({
    query: z.string().min(1, "Wpisz zapytanie"),
});

const SearchPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const {mutateAsync, isLoading} = useSearch()
    
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        await mutateAsync(data)
        navigate("/")
    };

    return (
        <MainTemplate>
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
                            Wyszukiwarka
                        </Text>
                        <Text fontSize="sm" color="gray.300">
                            Wyszukaj wiadomości po frazie
                        </Text>
                    </Stack>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={4} mt={4}>
                            <div>
                                <label htmlFor="query">Fraza</label>
                                <Input id="query" {...register("query")} />
                                {errors.query && (
                                    <Text color="red.500">{errors.query.message}</Text>
                                )}
                            </div>
                            <Button loading={isLoading} type="submit" colorScheme="teal" width="full" mt={4}>
                                Szukaj
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Flex>
        </MainTemplate>
    );
};

export default SearchPage;