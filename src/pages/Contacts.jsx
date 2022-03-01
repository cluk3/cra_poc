import React from "react";
import moment from "moment";
import { Heading, Text } from "@chakra-ui/react";

const Contacts = () => {
  return (
    <div>
      <Heading>Contacts</Heading>
      <Text>{moment().format("[Today is] dddd")}</Text>
    </div>
  );
};

export default Contacts;
