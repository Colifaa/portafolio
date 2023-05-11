import Head from "next/head";

import * as Chakra from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

export default function Landing() {



  return (
      
   
    
    <Box
      bg="#146C94"
      p={8}
      minHeight="100vh"
      bgImage="Gatito.png"
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="contain"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="6px solid black" // Añade el estilo de borde deseado
      borderRadius="xl" // Define el radio de borde deseado
    >
    

      <Head>
        <title>Mi portafolio</title>
        <meta
          name="description"
          content="Bienvenidos a mi portafolio donde encontrarás algunos de mis trabajos e información sobre mi"
        />
      </Head>

      <Box
        maxW={{ base: "90%", md: "500px" }}
        mx="auto"
        bg="rgba(0, 0, 0, 0.7)"
        borderRadius="xl"
        p={2}
        textAlign="center"
        border="4px"
        position="relative"
      >
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="orange"
          fontFamily="cursive"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
          mb={5}
        >
          ¡Bienvenidos!
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color="orange"
          fontFamily="cursive"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
          mb={10}
        >
          Este es mi portafolio donde encontrarás algunos de mis trabajos e
          información sobre mi.
        </Text>

        <Link href="/Home">
   <Button colorScheme="teal" size="lg" fontSize="xl" fontFamily="cursive"  _hover={{
    backgroundColor: "red",
    transform: "scale(1.1)",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
  }}
  transition="transform 0.3s ease, box-shadow 0.3s ease" >
Home
</Button>
        </Link>
        <Image
          objectFit="contain"
          mt="8"
          src="https://38.media.tumblr.com/06f0d5cf2e7491acc2fbe2e39031c1b1/tumblr_n9cnttf1FZ1ty0fy0o4_500.gif"
          alt="Dan Abramov"
        />
      

      </Box>
    </Box>
    
  );
}
