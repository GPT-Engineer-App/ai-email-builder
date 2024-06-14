import { Box, Text, Heading, VStack, Flex } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Our AI-Powered BDR Sequence Builder</Heading>
      <Text fontSize="lg" mb={6}>
        Our tool helps you create effective BDR sequences with AI-powered components and LinkedIn steps.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Template of four emails</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Trigger-based follow-up loop</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>LinkedIn steps</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;