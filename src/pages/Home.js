import React from "react";
import * as Chakra from "@chakra-ui/react";
import { useState } from "react";

function Home() {
  const [activeTab, setActiveTab] = useState("Inicio");
  const { isOpen, onToggle } = Chakra.useDisclosure()

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Chakra.Tabs
        isFitted
        variant="unstyled"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="sticky"
      >
        <Chakra.TabList color="blue" justifyContent="space-around">
          <Chakra.Link href="#inicio">
            <Chakra.Tab
              onClick={() => handleTabClick("Inicio")}
              bg={activeTab === "Inicio" ? "transparent" : "transparent"}
              paddingX={6}
            >
              Inicio
            </Chakra.Tab>
          </Chakra.Link>
          <Chakra.Link href="#proyectos">
            <Chakra.Tab
              onClick={() => handleTabClick("Proyectos")}
              bg={activeTab === "Proyectos" ? "transparent" : "transparent"}
              paddingX={6}
            >
              Proyectos
            </Chakra.Tab>
          </Chakra.Link>
          <Chakra.Link href="#contactos">
            <Chakra.Tab
              onClick={() => handleTabClick("Contactos")}
              bg={activeTab === "Contactos" ? "transparent" : "transparent"}
              paddingX={6}
            >
              Contactos
            </Chakra.Tab>
          </Chakra.Link>
        </Chakra.TabList>
      </Chakra.Tabs>
      <Chakra.Box
        as="section"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.50"
        id="inicio"
      >
        <Chakra.Box maxW="800px" textAlign="center">
          
            <Chakra.Heading as="h1" mb={8}>
              Bienvenidos!
            </Chakra.Heading>
            <Chakra.Flex direction="column" align="center" maxW="80%" mx="auto">
            <Chakra.Box mb={8}>
            
              <Chakra.Flex maxW="800px" alignItems="center" justifyContent="center" >
                <Chakra.Image
                borderRadius="full"
                maxWidth="150px"
                maxHeight="150px"
                  src="https://play-lh.googleusercontent.com/uv85baoigBOMJ0i_rXsUJ5GRHWnB4XhmtvPbN40tWcwC9nlPvADT0q_n6FYFirwLvD8"
                  alt="Jorge"
                />
                
      <Chakra.Text display="inline-block" mr={70} fontSize="xl">
        Soy Jorge Mathez, tengo 25 años y soy desarrollador web full
        stack.
      </Chakra.Text>
  
              </Chakra.Flex>
               
              <Chakra.Button onClick={onToggle}>Mostrar información</Chakra.Button>
      <Chakra.Collapse in={isOpen} animateOpacity>
              <Chakra.Text fontSize="xl">
                Soy un Desarrollador Web Full Stack con experiencia en distintas
                tecnologías de desarrollo web como HTML, CSS, ChakraUI,
                Javascript, React, Redux, Node.js, Express, SQL, Sequelize,
                Supabase y NextJs. Además de mi experiencia en desarrollo web,
                también tengo habilidades adicionales que me hacen un candidato
                aún más valioso para cualquier proyecto, como la música y el
                trading de criptomonedas. También he trabajado como ayudante de
                un ingeniero agrimensor, lo que me ha permitido adquirir
                habilidades de diseño y trabajar en proyectos más complejos y
                multidisciplinarios. Siempre estoy buscando formas de ampliar
                mis habilidades y conocimientos en diferentes áreas y estoy
                seguro de que puedo aportar una perspectiva única y valiosa a
                cualquier proyecto en el que esté involucrado.
              </Chakra.Text>
              </Chakra.Collapse>
            </Chakra.Box>
          </Chakra.Flex>
        </Chakra.Box>
      </Chakra.Box>

      <Chakra.Box
        as="section"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
        id="proyectos"
      >
        <Chakra.Box maxW="800px" textAlign="center">
          <Chakra.Heading as="h2" mb="4">
            Mis proyectos
          </Chakra.Heading>
          <Chakra.Text fontSize="xl" mb="8">
            Aquí podrás ver algunos de mis trabajos más recientes.
          </Chakra.Text>
          {/* Aquí iría el contenido de tus proyectos */}
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box
        as="section"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.200"
        id="contactos"
      >
        <Chakra.Box maxW="800px" textAlign="center">
          <Chakra.Heading as="h2" mb="4">
            Contacto
          </Chakra.Heading>
          <Chakra.Text fontSize="xl" mb="8">
            Si quieres contactarme, envíame un mensaje aquí.
          </Chakra.Text>
          {/* Aquí iría un formulario de contacto o información de contacto */}
        </Chakra.Box>
      </Chakra.Box>
    </>
  );
}

export default Home;
