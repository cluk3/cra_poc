import React, { useState, useEffect } from "react";
import { Heading, Spinner, Center, Text, Box } from "@chakra-ui/react";

const About = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 2000);
  }, []);

  return isReady ? (
    <Box>
      <Heading>About</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Box>
  ) : (
    <Center h="200px">
      <Spinner size="sm" /> Fetching...
    </Center>
  );
};

export default About;
