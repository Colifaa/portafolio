import React from "react";
import * as Chakra from "@chakra-ui/react";
import { SettingsIcon, StarIcon } from "@chakra-ui/icons";
import { MdGroupWork } from "react-icons/md";
function Card() {
  return (
    <div>
      <Chakra.Text fontSize="xl" mb="8">
        Aquí podrás ver algunos de mis trabajos más recientes.
      </Chakra.Text>
      <Chakra.SimpleGrid spacing={30} templateColumns=", minmax(200px, 1fr))">
        <Chakra.Card
          style={{
            background: "linear-gradient(to right, #073041, #19A7CE, #073041)",
            borderWidth: "0 0px 6px 0px",
            borderStyle: "solid",
            borderColor: "transparent transparent black transparent",
          }}
          justifyContent="center"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Chakra.Box width={{ base: "100%", sm: "80%" }}>
            <Chakra.Stack>
              <Chakra.CardBody>
                <Chakra.Heading
                  fontSize={{ base: "2xl", sm: "3xl" }}
                  fontFamily="Montserrat"
                >
                  Lotus
                </Chakra.Heading>
                <Chakra.Box
                  style={{
                    background:
                      "linear-gradient(to right, #5C469C, #19A7CE, #5C469C)",
                    borderWidth: "0 0px 6px 0px",
                    borderStyle: "solid",
                    borderColor: "transparent transparent black transparent",
                  }}
                  margin="auto"
                  overflowX="auto"
                  textAlign="center"
                  maxWidth="80ch"
                  p="4"
                  boxShadow="xl"
                  borderRadius="lg"
                  bg="white"
                >
                  <Chakra.Text
                    fontFamily="serif"
                    fontSize={{ base: "md", sm: "xl" }}
                    py="1"
                    fontWeight="black"
                  >
                    Les presento " Lotus " esta pagina web es una galería de
                    Arte. Se compone de obras de todo tipo de artistas
                    emergentes y consagrados, de diferentes estilos y en
                    diferentes soportes. Cualquier usuario puede completar el
                    formulario de solicitud de publicación de obra y
                    comercializar con nosotros su creación
                  </Chakra.Text>
                </Chakra.Box>

                <Chakra.Box justifyContent="center" display="flex">
                  <Chakra.Image
                    marginTop="4"
                    borderRadius="20px"
                    boxShadow="rgba(151, 65, 252, 0.2) 0 15px 30px -5px"
                    height="254px"
                    padding="5px"
                    width="190px"
                    border="2px solid black"
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    maxH="200px"
                    src="https://sppydtsxdhpyuhwzppca.supabase.co/storage/v1/object/public/imagebuck/img/MovimientoII.jpg?t=2023-04-11T00%3A52%3A41.602Z"
                    alt="Lotus"
                    backgroundImage="linear(to-r, #00b7ff, #ff30ff)"
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "rgba(151, 65, 252, 0.4) 0 15px 30px -5px",
                      filter: "brightness(100%)",
                      bgGradient: "linear(to-r, purple.500, purple.300)",
                    }}
                  />
                </Chakra.Box>

                <Chakra.Text fontSize="xl" fontWeight="semibold" mt="5">
                  Tecnologias utilizadas:
                </Chakra.Text>
                <Chakra.List spacing={3}>
                  <Chakra.ListItem fontSize="lg" fontWeight="semibold" mt="5">
                    <Chakra.ListIcon
                      as={MdGroupWork}
                      bgColor="black"
                      borderRadius="full"
                      color="red.500"
                    />
                    Front End:{" "}
                  </Chakra.ListItem>
                  <Chakra.ListItem>
                    <Chakra.ListIcon as={SettingsIcon} color="green.500" />{" "}
                    Frameworks/librerías: React, Next.js
                  </Chakra.ListItem>

                  <Chakra.ListItem>
                    {" "}
                    <Chakra.ListIcon as={SettingsIcon} color="green.500" /> UI
                    libraries: ChakraUI{" "}
                  </Chakra.ListItem>
                  <Chakra.ListItem>
                    <Chakra.ListIcon as={StarIcon} color="#FF8E00" />
                    Lenguajes: JavaScript,HTML, CSS
                  </Chakra.ListItem>
                  <Chakra.ListItem fontSize="lg" fontWeight="semibold">
                    <Chakra.ListIcon
                      as={MdGroupWork}
                      bgColor="black"
                      borderRadius="full"
                      color="red.500"
                      mt="3"
                    />{" "}
                    Back-end:
                  </Chakra.ListItem>
                  <Chakra.ListItem>
                    <Chakra.ListIcon as={SettingsIcon} color="green.500" />{" "}
                    Frameworks: Supabase{" "}
                  </Chakra.ListItem>
                  <Chakra.ListItem>
                    <Chakra.ListIcon as={StarIcon} color="#FF8E00" /> Lenguajes:
                    SQL{" "}
                  </Chakra.ListItem>
                </Chakra.List>
              </Chakra.CardBody>

              <Chakra.CardFooter textAlign="center" justifyContent="center">
                <Chakra.Link href="https://lnkd.in/dNHTw58b">
                  <Chakra.Button
                    _hover={{
                      backgroundColor: "#146C94",
                      transform: "scale(1.1)",
                      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                    }}
                    variant="solid"
                    style={{
                      background:
                        "linear-gradient(to right, #5C469C, #19A7CE, #5C469C)",
                    }}
                    direction={{ base: "column", sm: "row" }}
                    spacing={4}
                    mx={{ base: 2, sm: 4 }}
                  >
                    Ir al proyecto
                  </Chakra.Button>
                  <Chakra.Link href="https://clipchamp.com/watch/m5FkOJWaP3C">
                    <Chakra.Button
                      _hover={{
                        backgroundColor: "#146C94",
                        transform: "scale(1.1)",
                        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                      }}
                      variant="solid"
                      style={{
                        background:
                          "linear-gradient(to right, #5C469C, #19A7CE, #5C469C)",
                      }}
                      direction={{ base: "column", sm: "row" }}
                      spacing={4}
                      mx={{ base: 2, sm: 4 }}
                    >
                      ir al Vídeo
                    </Chakra.Button>
                  </Chakra.Link>
                </Chakra.Link>
              </Chakra.CardFooter>
            </Chakra.Stack>
          </Chakra.Box>
        </Chakra.Card>

        <Chakra.Card
          style={{
            background: "linear-gradient(to right, #073041, #19A7CE, #073041)",
            borderWidth: "0 0px 6px 0px",
            borderStyle: "solid",
            borderColor: "transparent transparent black transparent",
          }}
          justifyContent="center"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Chakra.Stack>
            <Chakra.CardBody>
              <Chakra.Heading
                fontSize={{ base: "2xl", sm: "3xl" }}
                fontFamily="Montserrat"
              >
                IziQstudy
              </Chakra.Heading>
              <Chakra.Box
                style={{
                  background:
                    "linear-gradient(to right, #5C469C, #19A7CE, #5C469C)",
                  borderWidth: "0 0px 6px 0px",
                  borderStyle: "solid",
                  borderColor: "transparent transparent black transparent",
                }}
                margin="auto"
                overflowX="auto"
                textAlign="center"
                maxWidth="80ch"
                p="4"
                boxShadow="xl"
                borderRadius="lg"
                bg="white"
              >
                <Chakra.Text
                  fontFamily="serif"
                  fontSize={{ base: "md", sm: "xl" }}
                  py="1"
                  fontWeight="black"
                >
                  " IziQstudy " una página web que permite a los usuarios crear
                  sus propios mazos de cartas de estudio. Cada carta tiene una
                  pregunta y una respuesta, lo que permite a los usuarios
                  aprender mientras juegan.
                </Chakra.Text>
              </Chakra.Box>
              <Chakra.Box justifyContent="center" display="flex">
                <Chakra.Image
                  marginTop="4"
                  borderRadius="20px"
                  boxShadow="rgba(151, 65, 252, 0.2) 0 15px 30px -5px"
                  height="254px"
                  padding="5px"
                  width="190px"
                  border="2px solid black"
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  maxH="200px"
                  src="studyGame.png"
                  alt="IziQ"
                  backgroundImage="linear(to-r, #00b7ff, #ff30ff)"
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow: "rgba(151, 65, 252, 0.4) 0 15px 30px -5px",
                    filter: "brightness(100%)",
                    bgGradient: "linear(to-r, purple.500, purple.300)",
                  }}
                />
              </Chakra.Box>

              <Chakra.Text fontSize="xl" fontWeight="semibold" mt="5">
                Tecnologias utilizadas:
              </Chakra.Text>
              <Chakra.List spacing={3}>
                <Chakra.ListItem fontSize="lg" fontWeight="semibold" mt="5">
                  <Chakra.ListIcon
                    as={MdGroupWork}
                    bgColor="black"
                    borderRadius="full"
                    color="red.500"
                  />
                  Front End:{" "}
                </Chakra.ListItem>
                <Chakra.ListItem>
                  <Chakra.ListIcon as={SettingsIcon} color="green.500" />{" "}
                  Frameworks/librerías: React, Next.js
                </Chakra.ListItem>

                <Chakra.ListItem>
                  {" "}
                  <Chakra.ListIcon as={SettingsIcon} color="green.500" /> UI
                  libraries: ChakraUI{" "}
                </Chakra.ListItem>
                <Chakra.ListItem>
                  <Chakra.ListIcon as={StarIcon} color="#FF8E00" />
                  Lenguajes: JavaScript,HTML, CSS
                </Chakra.ListItem>
                <Chakra.ListItem fontSize="lg" fontWeight="semibold">
                  <Chakra.ListIcon
                    as={MdGroupWork}
                    bgColor="black"
                    borderRadius="full"
                    color="red.500"
                    mt="3"
                  />{" "}
                  Back-end:
                </Chakra.ListItem>
                <Chakra.ListItem>
                  <Chakra.ListIcon as={SettingsIcon} color="green.500" />{" "}
                  Frameworks: Supabase{" "}
                </Chakra.ListItem>
                <Chakra.ListItem>
                  <Chakra.ListIcon as={StarIcon} color="#FF8E00" /> Lenguajes:
                  SQL{" "}
                </Chakra.ListItem>
              </Chakra.List>
            </Chakra.CardBody>

            <Chakra.CardFooter textAlign="center" justifyContent="center">
              <Chakra.Link href="https://izi-q-study7.vercel.app/">
                <Chakra.Button
                  _hover={{
                    backgroundColor: "#146C94",
                    transform: "scale(1.1)",
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                  }}
                  variant="solid"
                  style={{
                    background:
                      "linear-gradient(to right, #5C469C, #19A7CE, #5C469C)",
                  }}
                  direction={{ base: "column", sm: "row" }}
                  spacing={4}
                  mx={{ base: 2, sm: 4 }}
                >
                  Ir al proyecto
                </Chakra.Button>
              </Chakra.Link>
            </Chakra.CardFooter>
          </Chakra.Stack>
        </Chakra.Card>

        <Chakra.Card
          style={{
            background: "linear-gradient(to right, #073041, #19A7CE, #073041)",
            borderWidth: "0 0px 6px 0px",
            borderStyle: "solid",
            borderColor: "transparent transparent black transparent",
          }}
          justifyContent="center"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Chakra.Stack>
            <Chakra.CardBody>
              <Chakra.Heading
                fontSize={{ base: "2xl", sm: "3xl" }}
                fontFamily="Montserrat"
              >
                PI-Food
              </Chakra.Heading>
              <Chakra.Box
                style={{
                  background:
                    "linear-gradient(to right, #5C469C, #19A7CE, #5C469C)",
                  borderWidth: "0 0px 6px 0px",
                  borderStyle: "solid",
                  borderColor: "transparent transparent black transparent",
                }}
                margin="auto"
                overflowX="auto"
                textAlign="center"
                maxWidth="80ch"
                p="4"
                boxShadow="xl"
                borderRadius="lg"
                bg="white"
              >
                <Chakra.Text
                  fontFamily="serif"
                  fontSize={{ base: "md", sm: "xl" }}
                  py="1"
                  fontWeight="black"
                >
                  " PI-Food " Este proyecto consiste en una aplicación que
                  utiliza una API externa para obtener datos sobre diferentes
                  tipos de comida, además de permitir la creación de nuevas
                  recetas mediante una base de datos
                </Chakra.Text>
              </Chakra.Box>
              <Chakra.Box justifyContent="center" display="flex">
                <Chakra.Image
                  marginTop="4"
                  borderRadius="20px"
                  boxShadow="rgba(151, 65, 252, 0.2) 0 15px 30px -5px"
                  height="254px"
                  padding="5px"
                  width="190px"
                  border="2px solid black"
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  maxH="200px"
                  src="PI-Food.png"
                  alt="PI-Food"
                  backgroundImage="linear(to-r, #00b7ff, #ff30ff)"
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow: "rgba(151, 65, 252, 0.4) 0 15px 30px -5px",
                    filter: "brightness(100%)",
                    bgGradient: "linear(to-r, purple.500, purple.300)",
                  }}
                />
              </Chakra.Box>

              <Chakra.Text fontSize="xl" fontWeight="semibold" mt="5">
                Tecnologias utilizadas:
              </Chakra.Text>
              <Chakra.List spacing={3}>
                <Chakra.ListItem fontSize="lg" fontWeight="semibold" mt="5">
                  <Chakra.ListIcon
                    as={MdGroupWork}
                    bgColor="black"
                    borderRadius="full"
                    color="red.500"
                  />
                  Front End:{" "}
                </Chakra.ListItem>
                <Chakra.ListItem>
                  <Chakra.ListIcon as={SettingsIcon} color="green.500" />{" "}
                  Frameworks/librerías: React,Redux
                </Chakra.ListItem>

                <Chakra.ListItem>
                  <Chakra.ListIcon as={StarIcon} color="#FF8E00" />
                  Lenguajes: JavaScript,HTML, CSS
                </Chakra.ListItem>
                <Chakra.ListItem fontSize="lg" fontWeight="semibold">
                  <Chakra.ListIcon
                    as={MdGroupWork}
                    bgColor="black"
                    borderRadius="full"
                    color="red.500"
                    mt="3"
                  />{" "}
                  Back-end:
                </Chakra.ListItem>
                <Chakra.ListItem>
                  <Chakra.ListIcon as={SettingsIcon} color="green.500" />{" "}
                  Frameworks: Express{" "}
                </Chakra.ListItem>
                <Chakra.ListItem>
                  <Chakra.ListIcon as={StarIcon} color="#FF8E00" /> Lenguajes:
                  SQL{" "}
                </Chakra.ListItem>
              </Chakra.List>
            </Chakra.CardBody>

            <Chakra.CardFooter textAlign="center" justifyContent="center">
              <Chakra.Link href="https://www.linkedin.com/posts/jorge-mathez-598597260_javascript-react-desarrolladores-activity-7057023249867546625-NPaI/">
                <Chakra.Button
                  _hover={{
                    backgroundColor: "#146C94",
                    transform: "scale(1.1)",
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                  }}
                  variant="solid"
                  style={{
                    background:
                      "linear-gradient(to right, #5C469C, #19A7CE, #5C469C)",
                  }}
                  direction={{ base: "column", sm: "row" }}
                  spacing={4}
                  mx={{ base: 2, sm: 4 }}
                >
                  ir al Vídeo
                </Chakra.Button>
              </Chakra.Link>
            </Chakra.CardFooter>
          </Chakra.Stack>
        </Chakra.Card>
      </Chakra.SimpleGrid>
    </div>
  );
}

export default Card;
