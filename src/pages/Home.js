import React, { useEffect, useState } from "react";
import * as Chakra from "@chakra-ui/react";
import Card from "@/Components/Card";
import Lotus from "../Components/Lotus/Lotus.jsx";
import { useDisclosure } from "@chakra-ui/react";
import Contacto from "@/Components/Contacto/Contacto.jsx";
import { Howl } from "howler";
import Footer from "@/Components/Footer/Footer.jsx";

import Musica from "@/Components/Musica/Musica.jsx";
import InformacionJorge from "@/Components/InformacionJorge/InformacionJorge.jsx";
import Videos from "@/Components/Videos/Videos.jsx";
import NavTab from "@/Components/NavTab/NavTab.jsx";
import Raiting from "@/Components/Raiting/Raiting.jsx";

function Home() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <NavTab />
      <InformacionJorge />
      <Videos />

      <Chakra.Box
        style={{
          background: "linear-gradient(to right, #073041, #19A7CE, #073041)",
          borderWidth: "0 0px 6px 0px",
          borderStyle: "solid",
          borderColor: "transparent transparent black transparent",
        }}
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

          {hydrated && <Lotus />}
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box
        style={{
          background: "linear-gradient(to right, #073041, #AFD3E2, #073041)",
          borderWidth: "0 0px 6px 0px",
          borderStyle: "solid",
          borderColor: "transparent transparent black transparent",
        }}
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
          <Contacto />
          <Chakra.Link
          mt="50"
            href="/cv jorge PDF.pdf"
            download
            color="blue.500"
            fontWeight="bold"
            fontSize={["md", "lg", "xl"]} // Tamaños de fuente responsivos
            _hover={{
              textDecoration: "underline",
              color: "blue.700",
            }}
            _focus={{ outline: "none" }} // Elimina el contorno al hacer clic en el enlace
            display="inline-block" // Alinea el enlace horizontalmente
            p={2} // Agrega un relleno interno
            borderRadius="md" // Añade bordes redondeados
            boxShadow="md" // Agrega una sombra
            transition="all 0.2s" // Agrega una transición suave al hacer hover
          >
            Descargar CV
          </Chakra.Link>
          <Raiting/>
        </Chakra.Box>
      </Chakra.Box>
      <Footer />
    </>
  );
}

export default Home;
