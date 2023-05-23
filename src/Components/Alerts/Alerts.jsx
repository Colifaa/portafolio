import React from 'react';
import * as Chakra from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";


function Alerts({ type, message, onClose }) {
    return (
        <Chakra.AlertDialog isOpen={true} onClose={onClose}>
        <Chakra.AlertDialogOverlay />
        <Chakra.AlertDialogContent
    
          bg="green.100"
          borderRadius="md"
          boxShadow="md"
          maxWidth="sm"
        >
          <Chakra.AlertDialogHeader
              justifyContent="center"
            fontSize="lg"
            fontWeight="bold"
            p={4}
            borderBottomWidth="1px"
            color="green.500"
            display="flex"
            alignItems="center"
          >
            <CheckCircleIcon mr={2} />
            {type}
          </Chakra.AlertDialogHeader>
          <Chakra.AlertDialogBody p={4} textAlign="center" >{message}</Chakra.AlertDialogBody>
          <Chakra.AlertDialogFooter p={4}  justifyContent="center">
            <Chakra.Button
              colorScheme="green"
              onClick={onClose}
            >
              Cerrar
            </Chakra.Button>
          </Chakra.AlertDialogFooter>
        </Chakra.AlertDialogContent>
      </Chakra.AlertDialog>
    );
  }
  
  export default Alerts;