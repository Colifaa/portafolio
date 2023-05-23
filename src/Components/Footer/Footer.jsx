import React from 'react'
import * as Chakra from "@chakra-ui/react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <Chakra.Box
    as="footer"
    style={{
      background: "linear-gradient(to right, #073041, #19A7CE, #073041)",
      borderWidth: "0 0px 6px 0px",
      borderStyle: "solid",
      borderColor: "transparent transparent black transparent",
    }}
    color="orange"
    fontFamily="cursive"
    textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
    py={{ base: "10px", md: "20px" }} // Ajustar el espaciado vertical
  >
    <Chakra.Flex
      maxW={{ base: "100%", md: "1400px" }}
      m="auto"
      justifyContent="space-between"
      flexWrap="wrap"
      cursor="default"
      textAlign="center"
      flexDirection={{ base: "column", md: "row" }}
      fontSize={{ base: "sm", md: "xl" }} // Ajustar el tamaño de fuente
    >
      <Chakra.Box minW={{ base: "100%", md: "250px" }} textAlign="center" m="6px auto">
        <Chakra.Box>
          <hr />
          <Chakra.Text fontSize="lg" fontWeight="bold">
            Ubicación
          </Chakra.Text>
          <Chakra.Text _hover={{ color: "var(--color3)" }} mt={"4px"}>
            San Rafael (Mdza, Argentina)
          </Chakra.Text>
        </Chakra.Box>
      </Chakra.Box>

      <Chakra.Box minW={{ base: "100%", md: "250px" }} textAlign="center" m="6px auto">
        <hr />
        <Chakra.Text
          fontSize={{ base: "md", md: "xl" }}
          fontWeight="bold"
          _hover={{ color: "var(--color3)" }}
        >
          &copy; 2023, Portafolio
        </Chakra.Text>
      </Chakra.Box>

      <Chakra.Box minW={{ base: "100%", md: "250px" }} textAlign="center" m="6px auto">
        <hr />
        <Chakra.Text fontSize="lg" fontWeight="bold">
          Redes Sociales
        </Chakra.Text>
        <Chakra.Flex padding={"10px"} justifyContent={"space-evenly"}> 
          <a
            href="https://www.facebook.com/jorge.mathez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/colifaa/"
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