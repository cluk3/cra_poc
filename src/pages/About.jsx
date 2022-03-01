import React, { useState, useEffect } from "react";
import { Heading, Spinner, Center } from "@chakra-ui/react";

const About = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 2000);
  }, []);

  return isReady ? (
    <Heading>About</Heading>
  ) : (
    <Center h="200px">
      <Spinner size="sm" /> Fetching...
    </Center>
  );
};

export default About;
