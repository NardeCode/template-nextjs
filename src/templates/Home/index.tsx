import { Heading, Button, Container, Text } from '@chakra-ui/react';

import * as S from './styles';

export function Home() {
  return (
    <Container maxW="90vw" mt={8}>
      <Heading fontSize={52}>Hello World!</Heading>
      <Text fontSize="3xl">In love with React & Next</Text>
      <Button colorScheme="blue" size="lg" fontSize={20} mt={4} px={10} py={8}>
        Button
      </Button>
    </Container>
  );
}
