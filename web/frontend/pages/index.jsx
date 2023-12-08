import { Box, Button, Text, Heading } from "@chakra-ui/react";
import { useAuthenticatedFetch } from "../hooks/useAuthenticatedFetch";
import { useAppQuery } from "../hooks/useAppQuery";

export default function HomePage() {
  const fetch = useAuthenticatedFetch()
  const { data, isLoading, refetch, isFetching } = useAppQuery({ url: '/api/test' })
  console.log()
  return (
    <Box gap={4} alignItems={'center'} display={'flex'} flexDirection={'column'}  >

      <Text>This is chakra u component</Text>
      <Button colorScheme="teal" m={'auto'} onClick={() => {
        refetch()
      }} isLoading={isLoading || isFetching}>
        Refetch
      </Button>
      <textarea   value={JSON.stringify(data)}>

      </textarea>
    </Box>
  );
}
