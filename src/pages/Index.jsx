import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to the AI-Powered BDR Sequence Builder</Heading>
        <Text>Create effective BDR sequences with AI-powered components and LinkedIn steps.</Text>
        <Button colorScheme="teal" onClick={() => navigate("/builder")}>Start Building</Button>
      </VStack>
    </Container>
  );
};

export default Index;