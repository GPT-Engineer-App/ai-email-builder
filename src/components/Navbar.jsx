import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={NavLink} to="/" px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "brand.900" }} color="white">
            Home
          </Link>
          <Link as={NavLink} to="/about" px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "brand.900" }} color="white">
            About
          </Link>
          <Link as={NavLink} to="/contact" px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "brand.900" }} color="white">
            Contact
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;