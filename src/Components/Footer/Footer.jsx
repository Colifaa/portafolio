import React from 'react'
import * as Chakra from "@chakra-ui/react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <Chakra.Box
    mt="4"
    as="footer"
    background="black"
    color="orange"
    fontFamily="cursive"
    textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
    mb={5}
  >
    <Chakra.Flex
      maxW={{ base: "100%", md: "1400px" }}
      m="auto"
      justifyContent="space-between"
      flexWrap="wrap"
      cursor="default"
      textAlign="center"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Chakra.Box minW={{ base: "100%", md: "250px" }} textAlign="center" m="18px auto">
        <Chakra.Box>
          <hr />
          <Chakra.Text fontSize="xl" fontWeight="bold">
            Ubicación
          </Chakra.Text>
          <Chakra.Text _hover={{ color: "var(--color3)" }} mt={"4px"}>
            Calle-00, Santiago, Metropolitana, Chile
          </Chakra.Text>
        </Chakra.Box>
      </Chakra.Box>

      <Chakra.Box minW={{ base: "100%", md: "250px" }} textAlign="center" m="18px auto">
        <Chakra.Box>
          <hr />
          <Chakra.Text fontSize="xl" fontWeight="bold" mb={"4px"}>
            Conócenos
          </Chakra.Text>
        </Chakra.Box>
      </Chakra.Box>

      <Chakra.Box minW={{ base: "100%", md: "250px" }} textAlign="center" m="18px auto">
        <Chakra.List mb="2">
          <hr />
          <Chakra.Text fontSize="xl" fontWeight="bold">
            Información
          </Chakra.Text>
          <Chakra.ListItem></Chakra.ListItem>
          <Chakra.ListItem>
            <Chakra.Text _hover={{ color: "var(--color3)" }} mt={"4px"}>
              Términos y condiciones
            </Chakra.Text>
          </Chakra.ListItem>
        </Chakra.List>
      </Chakra.Box>

      <Chakra.Box minW={{ base: "100%", md: "250px" }} textAlign="center" m="18px auto">
        <hr />
        <Chakra.Text
          fontSize="xl"
          fontWeight="bold"
          _hover={{ color: "var(--color3)" }}
        >
          &copy; 2023, Lotus
        </Chakra.Text>
      </Chakra.Box>

      <Chakra.Box minW={{ base: "100%", md: "250px" }} textAlign="center" m="18px auto">
        <hr />
        <Chakra.Text fontSize="xl" fontWeight="bold">
          Redes Sociales
        </Chakra.Text>
        <Chakra.Flex padding={"20px"} justifyContent={"space-evenly"}>
          <a
            href="https://www.facebook.com/galeriadeartesolidario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/galeriadeartelotus/"
            target="_blank"
          >
            <BsInstagram />
          </a>
        </Chakra.Flex>
      </Chakra.Box>
    </Chakra.Flex>
  </Chakra.Box>
  )
}

export default Footer