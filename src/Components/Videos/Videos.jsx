import React from 'react'
import * as Chakra from "@chakra-ui/react";
function Videos() {
  return (

    <Chakra.Box
      style={{
        background: "linear-gradient(to right, #146C94, #19A7CE, #146C94)",
        borderWidth: "0 0px 6px 0px",
        borderStyle: "solid",
        borderColor: "transparent transparent black transparent",

      }}
      bgPos="center"

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