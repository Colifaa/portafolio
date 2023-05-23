import React, { useState } from 'react'
import * as Chakra from "@chakra-ui/react";
import Musica from '../Musica/Musica';

function NavTab() {

    const [activeTab, setActiveTab] = useState("Inicio");


  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

  return (
    <Chakra.Tabs
    borderRadius="sm"
    style={{
      background: "linear-gradient(to right, #073041, #19A7CE, #073041)",
      borderWidth: "0 0px 6px 0px",
      borderStyle: "solid",
      borderColor: "transparent transparent black transparent",
      
    }}
    isFitted
    variant="unstyled"
    position="fixed"
    top="0"
    left="0"
    right="0"
    zIndex="sticky"
  >
    <Chakra.Box
      mt="2"
      mb="4"
      bgSize="cover"
      textAlign="center"
      color="white"
    >
      <Musica />
    </Chakra.Box>

    <Chakra.TabList justifyContent="space-evenly" >
      <Chakra.Link href="#inicio" >
        <Chakra.Tab
          _hover={{
            color:  "#073041", 
            bg: "blue.400",
            fontWeight: "bold",
            fontSize: "xl",
            textDecoration: "none",
          }}
          transition="all 0.2s"
          onClick={() => handleTabClick("Inicio")}
          bg={activeTab === "Inicio" ? "transparent" : "transparent"}
          fontSize="2xl"
          borderRadius="md"
          mr="-20"
        >
          Inicio
        </Chakra.Tab>
      </Chakra.Link>
      <Chakra.Link href="#proyectos">
        <Chakra.Tab
          _hover={{
            color: "#073041",
            bg: "blue.400",
            fontWeight: "bold",
            fontSize: "xl",
          }}
          transition="all 0.2s"
          onClick={() => handleTabClick("Proyectos")}
          bg={activeTab === "Proyectos" ? "transparent" : "transparent"}
          fontSize="2xl"
          borderRadius="md"
        >
          Proyectos
        </Chakra.Tab>
      </Chakra.Link>
      <Chakra.Link href="#contactos">
        <Chakra.Tab
          _hover={{
            color: "#073041",
            bg: "blue.400",
            fontWeight: "bold",
            fontSize: "xl",
          }}
          transition="all 0.2s"
          onClick={() => handleTabClick("Contactos")}
          bg={activeTab === "Contactos" ? "transparent" : "transparent"}
          paddingX={2}
          fontSize="2xl"
          borderRadius="md"
        >
          Contacto
        </Chakra.Tab>
      </Chakra.Link>

      <Chakra.Link href="/">
        <Chakra.Tab
          _hover={{
            color: "#073041",
            bg: "blue.400",
            fontWeight: "bold",
            fontSize: "xl",
          }}
          transition="all 0.2s"
          onClick={() => handleTabClick("Proyectos")}
          bg={activeTab === "Proyectos" ? "transparent" : "transparent"}
          borderRadius="md"
        >
          <Chakra.Box
            fontSize="2xl"
            _hover={{
              bg: "blue.400",
              fontSize: "xl",
            }}
          >
            🏠
          </Chakra.Box>
        </Chakra.Tab>
      </Chakra.Link>
    </Chakra.TabList>
  </Chakra.Tabs>
  )
}

export default NavTab