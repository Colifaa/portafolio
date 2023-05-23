import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import * as Chakra from "@chakra-ui/react";
import { getComments, postComment } from "../../../helpers/user_management";
import Alerts from '../Alerts/Alerts';

function Rating() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [comment, setComment] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const fetchedComments = await getComments();
      const reversedComments = fetchedComments.reverse();
      setComments(reversedComments);
    } catch (error) {
      console.error("Error al obtener los comentarios:", error.message);
    }
  };
  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    checkFormValidity();
  };

  const handleSubmit = async () => {
    if (currentValue === 0 || comment.trim() === "") {
      // Mostrar mensaje de error indicando que las estrellas y el comentario son obligatorios
      console.error("Las estrellas y el comentario son obligatorios");
      return;
    }

    try {
      await postComment(name, currentValue, comment);
      console.log("Calificación guardada exitosamente");

      // Actualizar los comentarios después de insertar la calificación
      fetchComments();

      // Mostrar alerta de éxito
      onOpenSuccessAlert();
    } catch (error) {
      console.error("Error al guardar la calificación:", error.message);
    }
  };

  const checkFormValidity = () => {
    setIsFormValid(name.trim() !== "" && currentValue !== 0);
  };


  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };





  return (

    <Chakra.VStack mt="8">
      <Chakra.HStack mb="5">
        {stars.map((_, index) => {
          const ratingValue = index + 1;
          return (
            <FaStar
              key={index}
              size="24px"
              color={ratingValue <= currentValue ? "#ffc107" : "#e4e5e9"}
              onClick={() => handleClick(ratingValue)}
              style={{ cursor: "pointer" }}

            />
          );
        })}
        <Chakra.Text>{currentValue} estrellas</Chakra.Text>
      </Chakra.HStack>
      <Chakra.HStack mt={4}>
      <Chakra.VStack spacing={2}>
  <Chakra.Input
    type="text"
    placeholder="Nombre"
    value={name}
    onChange={handleNameChange}
    isInvalid={name.trim() === ""}
  />
  {name.trim() === "" && (
    <Chakra.Text fontSize="sm" color="red.500">
      Nombre obligatorio
    </Chakra.Text>
  )}
</Chakra.VStack>

<Chakra.VStack spacing={2}>
  <Chakra.Input
    placeholder="Deja un comentario"
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    isInvalid={comment.trim() === ""}
  />
  {comment.trim() === "" && (
    <Chakra.Text fontSize="sm" color="red.500">
      Comentario obligatorio
    </Chakra.Text>
  )}
</Chakra.VStack>

      </Chakra.HStack>
      <Chakra.Box>
        <Chakra.Button
          colorScheme="blue"
          onClick={handleSubmit}
          isDisabled={!isFormValid}
          mt="4"
        >
          Enviar calificación
        </Chakra.Button>
        {showAlert && (
          <Alerts
            type="comentario enviado"
            message="Gracias por tu colaboracion 😎"
            onClose={() => setShowAlert(false)}
          />
        )}
      </Chakra.Box>


      <Chakra.Text fontSize="lg" fontWeight="bold" mt={4}>
        Comentarios:
      </Chakra.Text>
      <Chakra.Flex flexWrap="wrap" >
        {comments.slice(0, 4).reverse().map((comment) => (
          <Chakra.Box
            key={comment.id}
            borderWidth="1px"
            p={4}
            mt={2}
            mr={2}
            flexBasis="calc(50% - 8px)"
            display="flex"
            flexDirection="column"
            borderColor="black"
            borderRadius="md"
            transition="background-color 0.3s"
            _hover={{ backgroundColor: "gray.600" }}
            _focus={{ boxShadow: "outline" }}
          >
            <Chakra.Text fontSize="md" fontWeight="bold">
              {comment.name}
            </Chakra.Text>
            <Chakra.Text>{comment.comentarios}</Chakra.Text>
            <Chakra.Flex justifyContent="center" mt="2">
              {stars.map((_, index) => (
                <FaStar
                  key={index}
                  size="16px"
                  color={index < comment.puntos ? "#ffc107" : "#e4e5e9"}
                  style={{ cursor: "default" }}

                />
              ))}
            </Chakra.Flex>
          </Chakra.Box>
        ))}
      </Chakra.Flex>
      <Chakra.Box>
        {comments.length > 4 && (
          <Chakra.Button
            mt="4"
            colorScheme="blue"
            onClick={handleModalOpen}
            _hover={{ backgroundColor: "blue.600" }}
            _focus={{ boxShadow: "outline" }}

          >
            Ver todos los comentarios
          </Chakra.Button>
        )}
      </Chakra.Box>
      <Chakra.Modal isOpen={showModal} onClose={handleModalClose} size="xl">
        <Chakra.ModalOverlay />
        <Chakra.ModalContent>
          <Chakra.ModalHeader>Comentarios</Chakra.ModalHeader>
          <Chakra.ModalCloseButton />
          <Chakra.ModalBody>
            {comments.map((comment) => (
              <Chakra.Box
                key={comment.id}
                borderWidth="1px"
                p={4}
                mt={2}
                display="flex"
                alignItems="center"
              >
                <Chakra.Text fontSize="md" fontWeight="bold" mr={2}>
                  {comment.name}
                </Chakra.Text>
                <Chakra.Text>{comment.comentarios}</Chakra.Text>
                <Chakra.HStack ml="auto">
                  {stars.map((_, index) => (
                    <FaStar
                      key={index}
                      size="16px"
                      color={index < comment.puntos ? "#ffc107" : "#e4e5e9"}
                      style={{ cursor: "default" }}
                    />
                  ))}
                </Chakra.HStack>
              </Chakra.Box>
            ))}
          </Chakra.ModalBody>
          <Chakra.ModalFooter>
            <Chakra.Button colorScheme="blue" onClick={handleModalClose}>
              Cerrar
            </Chakra.Button>
          </Chakra.ModalFooter>
        </Chakra.ModalContent>
      </Chakra.Modal>
    </Chakra.VStack>
  );
}


export default Rating;
