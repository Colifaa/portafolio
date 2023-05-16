import React from 'react'
import { FaStar } from "react-icons/fa";
import * as Chakra from "@chakra-ui/react";

function Raiting() {

    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
  
    const handleClick = (value) => {
      setCurrentValue(value);
    };


  return (
    <Chakra.HStack>
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
  )
}

export default Raiting