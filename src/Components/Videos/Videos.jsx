import React from 'react'
import * as Chakra from "@chakra-ui/react";
function Videos() {
  return (
   
    <Chakra.Box
    style={{
        background: "linear-gradient(to right, #073041, black, #073041)",
        borderWidth: "0 0px 6px 0px",
        borderStyle: "solid",
        borderColor: "transparent transparent black transparent",
        
      }}
    bgPos="center"
   borderRadius="2xl"
    mx="auto"
    display="flex"
    justifyContent="space-between"
    boxShadow="lg"
  >
    <Chakra.Box w="30%" p="4" boxShadow="md">
      <video width="100%" controls>
        <source src="A PROYECTO.mp4" />
      </video>
    </Chakra.Box>

    <Chakra.Box w="30%" p="4" boxShadow="md">
      <video width="100%" controls>
        <source src="AAA PROYECTO.mp4" />
      </video>
    </Chakra.Box>

    <Chakra.Box w="30%" p="4" boxShadow="md">
      <video width="100%" controls>
        <source src="A PROYECTOO.mp4" />
      </video>
    </Chakra.Box>
  </Chakra.Box>
  )
}

export default Videos