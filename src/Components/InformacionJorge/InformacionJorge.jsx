import React from 'react'
import * as Chakra from "@chakra-ui/react";
function InformacionJorge() {
    const { isOpen, onToggle } = Chakra.useDisclosure();
  return (
    <Chakra.Box
    as="section"
    minHeight="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    id="inicio"
    bgPos="center"
    bgRepeat="no-repeat"
    bgSize="cover"
    style={{
        background: "linear-gradient(to right, #073041, black, #073041)",
        borderWidth: "0 0px 6px 0px",
        borderStyle: "solid",
        borderColor: "transparent transparent black transparent",
        
      }}
    bgAttachment="inherit"
    borderRadius="2xl"
    mt="140px"
    
  >
    <Chakra.Box maxW="800px" textAlign="center" bgPos="center"   >
      <Chakra.Flex
        direction="column"
        align="center"
        maxW="500%"
        mx="auto"
        bgColor="#146C94"
        borderRadius="xl"
        p={4}
        style={{
            background: "linear-gradient(to right, #146C94, #19A7CE, #146C94)",
            borderWidth: "0 0px 6px 0px",
            borderStyle: "solid",
            borderColor: "transparent transparent black transparent",
            
          }}
      >
        <Chakra.Flex
          maxW="400px" // Ajustar el valor aquí
          alignItems="center"
          justifyContent="center"
          mt={isOpen ? 4 : 8}
          
        >
          <Chakra.Image
          borderRadius="full"
          maxWidth="150px" // Ajustar el valor aquí
          maxHeight="150px"
          src="asu.jpg"
          alt="Jorge"
          ml="-2"
          mt="-5"
          marginLeft="-3.5"
          />

          <Chakra.Text ml="5" display="inline-block" mr={70} fontSize="xl" fontWeight="medium" >
            Soy Jorge Mathez, tengo 25 años y soy desarrollador web full
            stack.
          </Chakra.Text>
        </Chakra.Flex>

        <Chakra.Button mt="15px" onClick={onToggle}>
          Mostrar información 👨‍🎓
        </Chakra.Button>

        <Chakra.Collapse in={isOpen} animateOpacity>
        <Chakra.Box  mt="8px" >
          <Chakra.Text fontSize="xl" marginTop="4" >
            Soy un Desarrollador Web Full Stack con experiencia en distintas
            tecnologías de desarrollo web como HTML, CSS, ChakraUI,
            Javascript, React, Redux, Node.js, Express, SQL, Sequelize,
            Supabase y NextJs.💻
            <br />
            <br />
            Además de mi experiencia en desarrollo web, también tengo
            habilidades adicionales que me hacen un candidato aún más
            valioso para cualquier proyecto, como la música y el trading de
            criptomonedas. 📈📊🎸🎧
            <br />
            <br />
            También he trabajado como ayudante de un ingeniero agrimensor,
            lo que me ha permitido adquirir habilidades de diseño y trabajar
            en proyectos más complejos y multidisciplinarios.🏧📚
            <br />
            <br />
            Siempre estoy buscando formas de ampliar mis habilidades y
            conocimientos en diferentes áreas y estoy seguro de que puedo
            aportar una perspectiva única y valiosa a cualquier proyecto en
            el que esté involucrado.
          </Chakra.Text>
          </Chakra.Box>
        </Chakra.Collapse>
      </Chakra.Flex>
    </Chakra.Box>
  </Chakra.Box>
  )
}

export default InformacionJorge