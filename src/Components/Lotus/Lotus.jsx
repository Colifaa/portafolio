import React from 'react'
import { useDisclosure } from "@chakra-ui/react"
import Card from "@/Components/Card";
import * as Chakra from "@chakra-ui/react";
function Lotus() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
 <Chakra.Box>
        <Chakra.Button onClick={onOpen}>Open Modal</Chakra.Button>
  
        <Chakra.Modal size="full" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <Chakra.ModalOverlay />
          <Chakra.ModalContent>
            <Chakra.ModalCloseButton />
            <Chakra.ModalBody pb={6}>
             <Chakra.Box textAlign="center" >
            <Card/>
            </Chakra.Box>
            </Chakra.ModalBody>
  
            <Chakra.ModalFooter>
              <Chakra.Button colorScheme='blue' mr={3}>
                Save
              </Chakra.Button>
              <Chakra.Button onClick={onClose}>Cancel</Chakra.Button>
            </Chakra.ModalFooter>
          </Chakra.ModalContent>
        </Chakra.Modal>
        </Chakra.Box>
  )
}

export default Lotus



