import Head from 'next/head'
import Image from 'next/image'
import * as Chakra from "@chakra-ui/react";
import styles from '@/styles/Home.module.css'
import Link from 'next/link';


export default function Landing() {
  return (


<Chakra.Center h="100vh">
  <Chakra.Box maxW="32rem" textAlign="center">
    <Chakra.Heading mb={4}>¡Bienvenidos!</Chakra.Heading>
    <Chakra.Text fontSize="xl">
    Este es mi portafolio donde encontraras algunos de mis trabajos e informacion sobre mi
    </Chakra.Text>
    <Link href= "/Home">
    <Chakra.Button size="lg" colorScheme="green" mt="24px">
      Home
    </Chakra.Button>
    </Link>
  </Chakra.Box>
</Chakra.Center>

  )
}
