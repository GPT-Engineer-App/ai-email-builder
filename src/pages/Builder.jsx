import { useState } from "react";
import { Box, Heading, VStack, Input, Textarea, Button, Text } from "@chakra-ui/react";

const Builder = () => {
  const [sequence, setSequence] = useState("");
  const [result, setResult] = useState("");

  const handleBuildSequence = async () => {
    try {
      const response = await fetch("https://api.example.com/build-sequence", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sequence }),
      });

      if (!response.ok) {
        throw new Error("Failed to build sequence");
      }

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error(error);
      setResult("An error occurred while building the sequence.");
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Build Your BDR Sequence</Heading>
      <VStack spacing={4} align="stretch">
        <Textarea
          placeholder="Enter your sequence details here..."
          value={sequence}
          onChange={(e) => setSequence(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleBuildSequence}>
          Build Sequence
        </Button>
        {result && (
          <Box mt={4} p={4} bg="gray.100" borderRadius="md">
            <Text>{result}</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Builder;