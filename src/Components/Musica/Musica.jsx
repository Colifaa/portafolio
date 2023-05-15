import React, { useEffect, useState } from 'react'
import * as Chakra from "@chakra-ui/react";

function Musica() {




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


    
    <div>
      {" "}
      <Chakra.Box mb={2}>Información del tema: BARDEROS - Esperanza</Chakra.Box>
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
    </div>
  );
}

export default Musica;
