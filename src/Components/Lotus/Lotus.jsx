import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import Card from "@/Components/Card";
import * as Chakra from "@chakra-ui/react";
function Lotus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Chakra.Box>
      <Chakra.Button mt="4"
        colorScheme="blue"

        _hover={{ backgroundColor: "blue.600" }}
        _focus={{ boxShadow: "outline" }} onClick={onOpen} mb="-5">Ver proyectos</Chakra.Button>

      <Chakra.Modal
        size="full"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <Chakra.ModalOverlay />
        <Chakra.ModalContent
          style={{
            background: "linear-gradient(to right, #073041, #19A7CE, #073041)",
            borderWidth: "0 0px 6px 0px",
            borderStyle: "solid",
            borderColor: "transparent transparent black transparent",
          }}
        >
          <Chakra.ModalCloseButton
            color="red"
            _hover={{
              backgroundColor: "#146C94",
              transform: "scale(1.1)",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          <Chakra.ModalBody pb={6}>
            <Chakra.Box textAlign="center">
              <Card />
            </Chakra.Box>
          </Chakra.ModalBody>

          <Chakra.ModalFooter justifyContent="center">
            <Chakra.Button
              onClick={onClose}
              _hover={{
                backgroundColor: "#146C94",
                transform: "scale(1.1)",
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
              }}
              variant="solid"
              style={{
                background:
                  "linear-gradient(to right, #19A7CE, #146C94, #19A7CE)",
                fontSize: "2rem", // Ajusta el tamaño de fuente aquí para hacer el icono más grande
              }}
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              mx={{ base: 2, sm: 4 }}
            >
              🔙
            </Chakra.Button>
          </Chakra.ModalFooter>
        </Chakra.ModalContent>
      </Chakra.Modal>
    </Chakra.Box>
  );
}

export default Lotus;
