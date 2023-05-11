import React, { useEffect, useState } from "react";
import * as Chakra from "@chakra-ui/react";
import Card from "@/Components/Card";
import Lotus from "../Components/Lotus/Lotus.jsx";
import { useDisclosure } from "@chakra-ui/react";
import Contacto from "@/Components/Contacto/Contacto.jsx";
import { Howl } from "howler";

function Home() {
  const [activeTab, setActiveTab] = useState("Inicio");
  const { isOpen, onToggle } = useDisclosure();
  const [hydrated, setHydrated] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [seekPosition, setSeekPosition] = useState(0);
 

  useEffect(() => {
    const audio = new Howl({
      src: "BARDERO - Esperanza (Letra).mp3",
      autoplay: isPlaying,
      loop: true,
      seek: seekPosition,
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
        if (sound) {
          setSeekPosition(sound.seek());
        }
      },
      onend: () => {
        setIsPlaying(false);
        setSeekPosition(0);
      },
    });

    setSound(audio);

    return () => {
      audio.stop();
    };
  }, []);

  const play = () => {
    if (sound && !isPlaying) {
      sound.play();
    }
  };

  const pause = () => {
    if (sound && isPlaying) {
      sound.pause();
    }
  };

  const restart = () => {
    if (sound) {
      sound.stop();
      setSeekPosition(0);
      sound.play();
    }
  };

  return (
    <>
      <Chakra.Tabs
        borderRadius="sm"
        bgColor="#146C94"
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
          <Chakra.Box mb={2} >
            Información del tema: BARDEROS - Esperanza
          </Chakra.Box>
          <Chakra.Box display="flex" justifyContent="center">
            <Chakra.Button onClick={play} disabled={isPlaying} mx={2}>
              ▶️
            </Chakra.Button>
            <Chakra.Button onClick={pause} disabled={!isPlaying} mx={2}>
              ⏸️
            </Chakra.Button>
            <Chakra.Button onClick={restart} disabled={!isPlaying} mx={2}>
              ⏯️
            </Chakra.Button>
          </Chakra.Box>
        </Chakra.Box>

      <Chakra.TabList justifyContent="space-around">
      <Chakra.Link href="#inicio">
  <Chakra.Tab
    _hover={{
      color: "white",
      bg: "blue.400",
      fontWeight: "bold",
      fontSize: "xl",
      textDecoration: "none",
    }}
    transition="all 0.2s"
    onClick={() => handleTabClick("Inicio")}
    bg={activeTab === "Inicio" ? "transparent" : "transparent"}
    paddingX={6}
  >
    Inicio
  </Chakra.Tab>
          </Chakra.Link>
          <Chakra.Link href="#proyectos">
            <Chakra.Tab
              _hover={{
                color: "white",
                bg: "blue.400",
                fontWeight: "bold",
                fontSize: "xl",
              }}
              transition="all 0.2s"
              onClick={() => handleTabClick("Proyectos")}
              bg={activeTab === "Proyectos" ? "transparent" : "transparent"}
              paddingX={6}
            >
              Proyectos
            </Chakra.Tab>
          </Chakra.Link>
          <Chakra.Link href="#contactos">
            <Chakra.Tab
              _hover={{
                color: "white",
                bg: "blue.400",
                fontWeight: "bold",
                fontSize: "xl",
              }}
              transition="all 0.2s"
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
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        id="inicio"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgColor="#AFD3E2"
        bgAttachment="inherit"
        borderRadius="2xl"
      >
        <Chakra.Box maxW="800px" textAlign="center" bgPos="center">
          <Chakra.Heading as="h1" mb={8}>
            Bienvenidos!
          </Chakra.Heading>

          <Chakra.Flex
            direction="column"
            align="center"
            maxW="80%"
            mx="auto"
            bgColor="#146C94"
            borderRadius="xl"
            p={4}
          >
            <Chakra.Flex
              maxW="800px"
              alignItems="center"
              justifyContent="center"
            >
              <Chakra.Image
                borderRadius="full"
                maxWidth="200px"
                maxHeight="200px"
                src="asu.jpg"
                alt="Jorge"
              />

              <Chakra.Text display="inline-block" mr={70} fontSize="xl">
                Soy Jorge Mathez, tengo 25 años y soy desarrollador web full
                stack.
              </Chakra.Text>
            </Chakra.Flex>

            <Chakra.Button onClick={onToggle}>
              Mostrar información 👨‍🎓
            </Chakra.Button>

            <Chakra.Collapse in={isOpen} animateOpacity>
              <Chakra.Text fontSize="xl" marginTop="8">
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
            </Chakra.Collapse>
          </Chakra.Flex>
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box
        bgImage="ROKANROL.jpg"
        bgPos="center"
        maxW="800px"
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

          {hydrated && <Lotus />}
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
          <Contacto />
        </Chakra.Box>
      </Chakra.Box>
    </>
  );
}

export default Home;
