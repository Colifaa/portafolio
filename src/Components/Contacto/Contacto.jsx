import React from "react";
import { HStack, Flex, IconButton } from "@chakra-ui/react";
import * as Chakra from "@chakra-ui/react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
function Contacto() {
  return (
   
      <Chakra.HStack spacing="4" justifyContent="center"  display= "flex">
        <Chakra.IconButton
          as="a"
          href="https://wa.me/542604224940"
          icon={<FaWhatsapp />}
          size="lg"
          colorScheme="green"
          borderRadius="full"
          transition="all 0.2s"
          _hover={{ transform: "scale(1.2)" }}
        />
        <Chakra.IconButton
          as="a"
          href="https://www.linkedin.com/in/jorge-mathez-598597260/"
          icon={<FaLinkedin />}
          size="lg"
          colorScheme="blue"
          borderRadius="full"
          transition="all 0.2s"
          _hover={{ transform: "scale(1.2)" }}
        />
        <Chakra.IconButton
          as="a"
          href="https://github.com/Colifaa"
          icon={<FaGithub />}
          size="lg"
          colorScheme="black"
          variant="outline"
          borderRadius="full"
          transition="all 0.2s"
          _hover={{ transform: "scale(1.2)" }}
        />
      </Chakra.HStack>
    
  );
}

export default Contacto;
